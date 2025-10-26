"use client";
import React,{useEffect, useRef, useState} from "react";

// type Images = {
//     active?: boolean,
//     imageref?: HTMLDivElement
// }

export default function Revolver({activeindex}:{activeindex: number}){

    const [Dishes, setDishes] = useState<string[]>([]);
    // const Imagesref = useRef<Images[]>([]);
    const [rotation, setrotation] = useState([0]);
    const localindex = useRef<number>(0);

    async function GetData(){
        const dishes = await fetch("/revolverimages.json").then((res) => res.json());
        console.log("Dishes link",dishes);
        setDishes(dishes);

        dishes.map(() => setrotation((prev) => [...prev, 0]))
        const array1 = rotation;
        array1[0] = 180;
        array1[1] = 90;
        setrotation(array1);
    }


   useEffect(() => {
    GetData();
   },[])

   useEffect(() => {
                                console.log("Local Index: ",localindex.current);
                                console.log("Active Index: ",activeindex);

    setTimeout(() => {
        const preactive = (activeindex-1 >= 0)? activeindex-1 : Dishes.length-1;
        const active = activeindex;
        const postactive = (activeindex+1 <= Dishes.length-1)? activeindex+1 : 0;
        if(localindex.current < activeindex){
            const array2 = rotation;
            array2[preactive] = array2[preactive] + 180;
            array2[active] = array2[active] + 90;
            array2[postactive ] = array2[postactive] + 90;
            setrotation(array2);
        }
    },600)
    localindex.current = activeindex;
   },[activeindex]);


    return(<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-150 h-150 bg-black/10">

                                                    {/* Give ref to these elements and try to do 0deg to 90 to again 0 deg rotation i think it will work */}

        {Dishes.map((element, index) => (
            <div className="absolute left-[50%] w-[50%] h-[50%] origin-bottom-left transition-transform duration-1200 ease-in-out" style={{transform: `rotateZ(${rotation[index]}deg)`}} key={index}
            //  ref={(el) => {if(el) Imagesref.current[index] = {imageref: el, active: false}}}
            > 
                <div className="relative left-[15%] bottom-[15%] flex justify-center items-center">
                    <img src={element} alt={"Dish"+index+1} className="relative w-full h-full"/>
                    <div className="absolute w-[60%] h-[60%] rounded-full shadow-2xl shadow-black/90 -z-1" /> 
                </div>
            </div>
        ))}


    </div>)
}