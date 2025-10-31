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
    const localindex = useRef(0);

    async function GetData(){
        const dishes = await fetch("/revolverimages.json").then((res) => res.json());
        // console.log("Dishes link",dishes);
        setDishes(dishes);
    }

    useEffect(() => {
        setTimeout(() => {
        const array1 = Array(Dishes.length).fill(0);
        array1[0] = 100;
        array1[1] = 100;
        array1[Dishes.length-1] = 100;
        console.log("Dishes length: ",Dishes.length);
        setshowindex(array1);
        },100)
    },[Dishes]);


   useEffect(() => {
    GetData();
   },[])

   function Rotate(){
    // console.log(typeof(localindex.current));
    // console.log(typeof(localindex.current));
    if(localindex.current < activeindex){
        setrotate((prev) => prev+90);
    }
    else if(localindex.current > activeindex){
        if(localindex.current-activeindex <= 1){
        setrotate((prev) => prev-90);
        }
        else if(localindex.current-activeindex > 1){
            setrotate((prev) => prev+90);
        }
    }
    console.log(activeindex);      // change repeting iamges with images that are factor of 4
   }

   useEffect(() => { 
    //  console.log("Original value of active index ",activeindex);      
    setTimeout(() => {
    Rotate();

    const active = activeindex;
    const preactive = (active-1 < 0)? Dishes.length : active-1; 
    const postactive = (active >= Dishes.length-1)?  0 : active+1;
    const array1 = Array(Dishes.length).fill(0);
    array1[preactive] = 100;
    array1[activeindex] = 100;
    array1[postactive] = 100;
    setshowindex(array1);
    setTimeout(() => {    localindex.current = activeindex;},100);
    },100)


    // console.log("active index", activeindex);
    // console.log("localindex ",localindex.current);

   },[activeindex])



//    useEffect(() => {console.log(showindex)},[showindex]);


    return(<div className="relative w-full h-full transition-transform duration-1600 rotate-230" style={{transform: `rotateZ(${rotate}deg)`}}>
       

        {Dishes.map((element, index) => (
            <div className="absolute left-[50%] w-[50%] h-[50%] origin-bottom-left transition-all duration-1200 ease-out opacity-0"
             style={{opacity: showindex[index], transform: `rotateZ(${(index+1)*(-90)}deg)`}}
              key={index}> 
                <div className="relative w-full h-auto max-w-110 left-[10%] bottom-[10%] flex justify-center items-center">
                    <img src={element} alt={"Dish"+index+1} className="relative w-full h-full"/>
                    <div className="absolute w-[60%] h-[60%] rounded-full [box-shadow:40px_40px_120px_black] -z-1" /> 
                    {/* <div className="relative font-bold text-2xl bg-white">{element}</div> */}
                </div>
            </div>
        ))}


    </div>)
}