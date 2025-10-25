"use client";
import Scrollar from "./scrollar";
import Revolver from "./revolver";

export default function Parent(){

  function IndexChange(index: number){
    console.log("Item no: ",index+1);
  }

  return(<div className="relative w-screen h-screen bg-gray-100/90 brightness-90 backdrop-blur-sm">

      <div className="absolute top-[70%] left-[10%] w-[50%] max-w-[40vw] h-30">
        <Scrollar indexchange={(index) => IndexChange(index)}/>
      </div>

      <Revolver />
  </div>)
}