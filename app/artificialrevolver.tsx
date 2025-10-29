



export default function ArtificialRevolver({state}:{state: number}){

    return(<div className="absolute top-0 left-0 inset-0">
        <div className="relative w-full h-full rounded-full flex justify-center items-center transition-transform duration-1700 bg-[conic-gradient(#ff9999_0deg_90deg,#99ccff_90deg_180deg,#fff59d_180deg_270deg,#a5d6a7_270deg_360deg)] " style={{transform: `rotateZ(${((state-1))*90}deg)`}}>
            <div className="relative w-[65%] h-[65%] rounded-full bg-white" />
        </div>
    </div>)
} 