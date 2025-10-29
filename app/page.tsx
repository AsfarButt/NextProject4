"use client";
import React,{useState} from "react";
import Scrollar from "./scrollar";
import ArtificialRevolver from "./artificialrevolver";
import Revolver from "./revolver";
import Description from "./description";
import Text from "./text";

export default function Parent(){

  const [indexstate, setindexstate] = useState(0);
  const [sidechange, setsidechange] = useState("");

  function IndexChange(index: number){
    setindexstate(index);
    console.log("Item no: ",index+1);
    console.log("Index no: ",index);
  }

  function SideChange(side: string){
    setsidechange(side);
  }

  return(<div className="relative w-screen h-screen bg-gray-100/90 brightness-90 backdrop-blur-sm">

      <div className="absolute top-[70%] left-[10%] w-[50%] max-w-[40vw] h-30">
        <Scrollar indexchange={(index) => IndexChange(index)} sidechange={(side) => SideChange(side)}/>
      </div>

      <div className="relative -left-35 -top-170 w-260 h-260 ">
        <ArtificialRevolver state={indexstate}/>
        <Revolver activeindex={indexstate} />
      </div>

      <div className="absolute right-5 top-100 w-auto h-auto ">
        <Description activeindex={indexstate}/>
      </div>

      <div className="absolute top-[20%] left-140 w-60 h-30">
        <Text activeindex={indexstate}/>
      </div>
  </div>)
}