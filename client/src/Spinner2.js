import React from "react";

function Spinner2() {
  return (
      <div className="border-4 border-white border-double h-44 grid grid-cols-3">
    <div className="flex justify-center items-center">
      <div
        className="animate-spin inline-block w-40 h-40 border-8 border-double rounded-full"
        role="status" >
            <div
        className="inline-block w-16 h-16 border-4 border-neutral-800/0 rounded-full"
        role="status" >
      </div>
        <span className="text-green-300 font-extrabold text-xl tracking-widest animate-pulse">WELCOME</span>
        
      </div>
    </div>
    

    <div className="self-center mx-auto w-5/6 h-3/5 border-2 border-white grid grid-cols-3 grid-rows-3 grid-flow-col">
        <div className="w-auto border-4 border-neutral-800 bg-green-500 animate-pulse rounded-sm"></div>
        <div className="w-auto border-4 border-neutral-800 bg-green-600 animate-pulse rounded-sm"></div>
        <div className="w-auto border-4 border-neutral-800 bg-green-500 animate-pulse rounded-sm"></div>
        <div className="w-auto border-4 border-neutral-800 bg-green-600 animate-pulse rounded-sm"></div>
        <div className="w-auto border-4 border-neutral-800 bg-green-300 animate-pulse rounded-sm"></div>
        <div className="w-auto border-4 border-neutral-800 bg-green-800 animate-pulse rounded-sm"></div>
        <div className="w-auto border-4 border-neutral-800 bg-green-500 animate-pulse rounded-sm"></div>
        <div className="w-auto border-4 border-neutral-800 bg-green-600 animate-pulse rounded-sm"></div>
        <div className="w-auto border-4 border-neutral-800 bg-green-400 animate-pulse rounded-sm"></div>
    </div>

      <div
        className="self-center animate-spin inline-block w-40 h-40 border-8 border-double rounded-full col-start-3"
        role="status" >
            <div
        className="inline-block w-16 h-16 border-4 border-neutral-800/0 rounded-full"
        role="status" >
      </div>
        <span className="text-green-300 font-extrabold text-xl tracking-widest animate-pulse">REMIXER</span>
      </div>

    </div>
  );
}

export default Spinner2;


