"use client";
import React,{useRef, useState, useEffect} from "react";



export default function Text({activeindex}:{activeindex: number}){

    const [Name, setName] = useState([]);

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
        GetData();
    },[activeindex])



    return(<div className="relative w-full h-full bg-black/10">
            <div className="w-full h-[50%] border-box bg-green-600/20 text-2xl font-semibold"><h1 className="h-full">{Name[0]}</h1></div>
            <div className="w-full h-[50%] border-box bg-red-500/20 text-2xl font-semibold"><h1 className="h-full">{Name[1]}</h1></div>
    </div>)
}