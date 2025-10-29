"use client";
import React,{useRef, useEffect, useState} from "react";



export default function Description({activeindex}:{activeindex :number}){

    const [Data ,setData] = useState([]);
    const headingref = useRef<HTMLDivElement | null>(null);
    const [opacitystate, setopacitystate] = useState("opacity-50");
    const [activecolumn, setactivecolumn] = useState(1); 

    async function GetData(index: number){
    const data = await fetch('/description.json').then((res) => res.json());
    setData(data[index]);
    console.log("Data is ",data[index]);
    }

    useEffect(() => {
        GetData(0);
    },[])

    useEffect(() => {
        console.log("use effect should work");
        headingref.current?.classList.replace("translate-y-0","-translate-y-8");
        setopacitystate("opacity-0");
        setTimeout(() => {
            GetData(activeindex);
            setopacitystate("opacity-100");
        headingref.current?.classList.replace("transition-transform","transition-none");
        headingref.current?.classList.replace("-translate-y-8","translate-y-8");
        setTimeout(() => {        headingref.current?.classList.replace("transition-none","transition-transform");
        headingref.current?.classList.replace("translate-y-8","translate-y-0");},50);

        },400);

    },[activeindex])

 
    return(<div className="relative w-80 h-110 rounded-2xl shadow-2xl shadow-black/60">       
    {/* start from here work you way up */}
        <div className="relative flex justify-between mx-[15%] py-4">
            <div className={`${(activecolumn==1)? "font-semibold":"font-regular"}`} onClick={() => setactivecolumn(1)}>Overview</div>
            <div className={`${(activecolumn==2)?"font-semibold":"font-regular"}`} onClick={() => setactivecolumn(2)}>Ingredients</div>
        </div>
        {activecolumn==1? 
                (<><div className="text-xl font-semibold p-4"> 
            <div className={`${opacitystate} transition-all duration-250`}><div className={`text-4xl z-2 text-black transition-transform translate-y-0 duration-400 ease-out`} ref={headingref}>{Data[0]}</div></div>
            <div className="absolute top-18 left-4 w-8 h-12 pt-2 rounded-lg text-center text-white text-4xl font-bold opacity-60" style={{backgroundColor: `${Data[3]}`}} >.</div>
            </div>
            
        <div className={`relative px-6 transition-all duration-400 ${opacitystate}`}>
            <h2 className="text-gray-900/90 text-lg">{Data[1]}</h2>
            <p className="">{Data[2]}</p>
        </div></>)
        :
        (<><div className="relative flex flex-col justify-start p-4 pl-10 border-box">
            <li className="text-md text-gray-800/90 hover:text-gray-950/90">{Data[4]}</li>
            <li className="text-md text-gray-800/90 hover:text-gray-950/90">{Data[5]}</li>
            <li className="text-md text-gray-800/90 hover:text-gray-950/90">{Data[6]}</li>
            <li className="text-md text-gray-800/90 hover:text-gray-950/90">{Data[7]}</li>
            <li className="text-md text-gray-800/90 hover:text-gray-950/90">{Data[8]}</li>
            <li className="text-md text-gray-800/90 hover:text-gray-950/90">{Data[9]}</li>
            <li className="text-md text-gray-800/90 hover:text-gray-950/90">{Data[10]}</li>
            <li className="text-md text-gray-800/90 hover:text-gray-950/90">{Data[11]}</li>

            <img src="/ingredientsimage.png" alt="Ingredients image" className="absolute w-26 h-26 top-6 right-8 brightness-150 opacity-60" />
            </div></>)
        }


       
    </div>)
}