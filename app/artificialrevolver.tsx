



export default function ArtificialRevolver({state}:{state: number}){

    return(<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-150 h-150">
        <div className="relative w-full h-full rounded-full flex justify-center items-center transition-transform duration-1200 bg-[conic-gradient(#ff9999_0deg_90deg,#99ccff_90deg_180deg,#fff59d_180deg_270deg,#a5d6a7_270deg_360deg)] " style={{transform: `rotateZ(${((state-1)+0.5)*90}deg)`}}>
            <div className="relative w-[85%] h-[85%] rounded-full bg-white" />
        </div>
    </div>)
} 