"use client";
import React,{useRef, useState, useEffect} from "react";





export default function Text({activeindex}:{activeindex: number}){



    return(<div className="relative w-full h-full bg-black/10">
            <div className="w-full h-[50%] border-box bg-green-600/20">Corn</div>
            <div className="w-full h-[50%] border-box bg-red-500/20">Soup</div>
    </div>)
}