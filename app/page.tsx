"use client";
import React,{useState} from "react";
import Scrollar from "./scrollar";
import ArtificialRevolver from "./artificialrevolver";
import Revolver from "./revolver";

export default function Parent(){

  const [indexstate, setindexstate] = useState(0);

  function IndexChange(index: number){
    setindexstate(index);
    console.log("Item no: ",index+1);
  }

  return(<div className="relative w-screen h-screen bg-gray-100/90 brightness-90 backdrop-blur-sm">

      <div className="absolute top-[70%] left-[10%] w-[50%] max-w-[40vw] h-30">
        <Scrollar indexchange={(index) => IndexChange(index)}/>
      </div>

      <div className="relative w-150 h-150 left-[15%] top-[5%]">
        <ArtificialRevolver state={indexstate}/>
        <Revolver activeindex={indexstate} />
      </div>
  </div>)
}