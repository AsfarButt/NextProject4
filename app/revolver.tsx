"use client";
import React,{useEffect, useRef, useState} from "react";

// type Images = {
//     active?: boolean,
//     imageref?: HTMLDivElement
// }

export default function Revolver({activeindex}:{activeindex: number}){

    const [Dishes, setDishes] = useState<string[]>([]);
    // const Imagesref = useRef<Images[]>([]);
    const [showindex, setshowindex] = useState([0]);
    const [rotate, setrotate] = useState(0);

    async function GetData(){
        const dishes = await fetch("/revolverimages.json").then((res) => res.json());
        console.log("Dishes link",dishes);
        setDishes(dishes);

        const array1 = Array(dishes.length).fill(0);
        array1[activeindex] = 100;
        setshowindex(array1);
        console.log(array1);
    }


   useEffect(() => {
    GetData();
   },[])

   useEffect(() => {  console.log("Original value of active index ",activeindex);
    setTimeout(() => {
    setrotate((prev) => prev-90);

    const active = activeindex;
    const preactive = (active-1 < 0)? Dishes.length : active-1; 
    const postactive = (active >= Dishes.length-1)?  0 : active+1;

    console.log("preactive: ",preactive);
    console.log("active: ",active);
    console.log("postactive: ",postactive);
        
    console.log("Active Index: ",activeindex);
    const array1 = Array(Dishes.length).fill(0);
    array1[activeindex] = 100;
    setshowindex(array1);
    },100)
    
   },[activeindex])



   useEffect(() => {console.log(showindex)},[showindex]);


    return(<div className="relative w-150 h-150 bg-black/10 transition-transform duration-1200 ease-out" style={{transform: `rotateZ(${rotate}deg)`}}>

                                                    {/* Give ref to these elements and try to do 0deg to 90 to again 0 deg showindex i think it will work */}

        {Dishes.map((element, index) => (
            <div className="absolute left-[50%] w-[50%] h-[50%] origin-bottom-left transition-all duration-1200 ease-in-out"
             style={{opacity: showindex[index], transform: `rotateZ(${index*90}deg)`}}
              key={index}> 
                <div className="relative left-[15%] bottom-[15%] flex justify-center items-center">
                    <img src={element} alt={"Dish"+index+1} className="relative w-full h-full"/>
                    <div className="absolute w-[60%] h-[60%] rounded-full shadow-2xl shadow-black/90 -z-1" /> 
                </div>
            </div>
        ))}


    </div>)
}