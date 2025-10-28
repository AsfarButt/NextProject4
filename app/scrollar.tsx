"use client";
import React,{useEffect, useRef, useState} from "react";


type imagesref = {
    active?: boolean
}
export default function Scrollar({indexchange, sidechange}:{indexchange: (index:number) => void, sidechange: (side: string) => void}){

    const [SmallImages, setSmallImages] = useState<string[]>([]);
    const carosoul = useRef<HTMLDivElement | null>(null);
    const [scrolldistance, setscrolldistance] = useState(0);
    // const Imagesref = useRef<imagesref[]>([]);
    const activeindex = useRef(0);

    async function GetData(){
        const smallimages =  await fetch('/smallimage.json').then(res => res.json());
        console.log(smallimages);
        setSmallImages(smallimages);
        indexchange(activeindex.current);
    }

    useEffect(() => {
        GetData();
    },[])

    // useEffect(() => {console.log(scrolldistance)},[scrolldistance]);

    useEffect(() => console.log(SmallImages.length),[SmallImages]);

    function LeftClick(e: React.MouseEvent<HTMLButtonElement>){
        if(activeindex.current > 0){
            const button = e.currentTarget;
            button.disabled = true;
            setTimeout(() => {button.disabled = false},1000);
            activeindex.current -= 1;
            setscrolldistance(prev => prev+136);
            indexchange(activeindex.current);
            sidechange("left");
        }
    }
    function RightClick(e: React.MouseEvent<HTMLButtonElement>){
        if(activeindex.current < SmallImages.length-1){
            const button = e.currentTarget;
            button.disabled = true;
            setTimeout(() => {button.disabled = false},1000);
            activeindex.current += 1;
            setscrolldistance(prev => prev-136);       
            indexchange(activeindex.current);   
            sidechange("right");
        }
        else{
             const button = e.currentTarget;
            button.disabled = true;
            setTimeout(() => {button.disabled = false},1000);
            activeindex.current = 0;
            setscrolldistance(prev => 0);       
            indexchange(activeindex.current);   
            sidechange("right");        
        }
    }


    return(<div className="relative w-full h-full shadow-sm shadow-black/30 rounded-2xl overflow-hidden bg-white/90">
                {/* Scrollar Parent*/}
                <div className="relative w-full h-full mask-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_8%,rgba(0,0,0,1)_92%,rgba(0,0,0,0)_100%)] bg-cover">
                    {/* Scrollar */}
                    <div className="absolute left-[20%] ml-1 top-2 w-24 h-26 rounded-3xl bg-white shadow-sm shadow-black/40" />
                    <div className={`relative left-[20%] w-26 h-full py-2 flex flex-row border-box transition-all duration-1200`} style={{transform: `translateX(${scrolldistance}px)`}} ref={carosoul}>
                        {SmallImages.map((element, index) => (
                            <div className="relative flex-none flex flex-col items-center w-26 h-full mr-8 rounded-2xl" key={index}>
                                <img src={element[0]} alt={SmallImages[index]} className="w-[80%] h-auto" />
                                <div className="absolute top-[12%] -z-1 w-[50%] h-[50%] rounded-full shadow-xl shadow-black/80" />
                                <h2 className="absolute bottom-4 text-[10px] text-gray-900/80 font-semibold">{element[1]}</h2></div>))}
                            </div>
                </div>
                {/* Buttons */}
                <div className="absolute top-0 w-full h-full flex justify-between items-center z-1 pointer-events-none">
                        <button type="button" className="text-lg pointer-events-auto cursor-pointer" onClick={(e) => LeftClick(e)}>〈</button>
                        <button type="button" className="text-lg pointer-events-auto cursor-pointer" onClick={(e) => RightClick(e)}>〉</button>
                </div>
    </div>)
}