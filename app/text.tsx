"use client";
import React,{useRef, useState, useEffect} from "react";



export default function Text({activeindex}:{activeindex: number}){

    const [Name, setName] = useState([]);
    const heading1ref = useRef<HTMLDivElement | null>(null);
    const heading2ref = useRef<HTMLDivElement | null>(null);
    const tempref = useRef<HTMLDivElement | null>(null);

    async function GetData(){
        const data = await fetch("/smallimage.json").then((res) => res.json());
        const letter = data[activeindex][1].split(" ");
        setName(letter);
        console.log("Data: ",data);
    }

    useEffect(() => {
        GetData();
    },[])

    useEffect(() => {

    setTimeout(() => {
        heading1ref.current?.classList.replace("w-full","w-0");
        heading2ref.current?.classList.replace("w-full","w-0");

        tempref.current?.classList.replace("translate-x-0","-translate-x-110");
    setTimeout(() => {
        GetData();
        heading1ref.current?.classList.replace("w-0","w-full");
        heading2ref.current?.classList.replace("w-0","w-full");

        tempref.current?.classList.replace("-translate-x-110","translate-x-0");
    },700);
    },100);

   },[activeindex])



    return(<div className="relative w-full h-full ">
            <div className="absolute top-0 right-0 w-full h-[50%] border-box overflow-hidden transition-all duration-600" ref={heading2ref}>
            <div className="w-full h-full translate-x-0 text-8xl font-regular transition-all duration-600" ref={tempref}><h1 className="h-full text-gray-800/90">{Name[0]}</h1></div></div>

            <div className="absolute top-[50%] left-0 w-full h-[50%] border-box overflow-hidden transition-all duration-600" ref={heading1ref}>
            <div className="w-full h-full text-8xl font-bold"><h1 className="h-full text-black/95">{Name[1]}</h1></div></div>
    </div>)

}