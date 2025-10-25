"use client";
import React,{useEffect, useRef, useState} from "react";



export default function Revolver(){

    const [Dishes, setDishes] = useState([]);

    async function GetData(){
        const dishes = await fetch("/revolverimages.json").then((res) => res.json());
        console.log("Dishes link",dishes);
        setDishes(dishes);
    }


   useEffect(() => {
    GetData();
   },[])


    return(<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-150 h-150 bg-black/10">

                                                    {/* Give ref to these elements and try to do 0deg to 90 to again 0 deg rotation i think it will work */}

        {Dishes.map((element, index) => (
            <div className="absolute left-[50%] w-[50%] h-[50%] origin-bottom-left rotate-180 transition-all duration-1200" key={index} ref={(el) => }> 
                <div className="relative left-[15%] bottom-[15%] flex justify-center items-center">
                    <img src={element} alt={"Dish"+index+1} className="relative w-full h-full"/>
                    <div className="absolute w-[60%] h-[60%] rounded-full shadow-2xl shadow-black/90 -z-1" /> 
                </div>
            </div>
        ))}


    </div>)
}