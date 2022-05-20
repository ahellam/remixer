import React from "react";

function Spinner() {
  return (
      <div className="self-center border-4 border-white h-60 rotate-90">
    <div className="flex justify-center items-center">
      <div
        className="animate-spin inline-block w-40 h-40 border-8 border-double rounded-full"
        role="status" >
            <div
        className="inline-block w-16 h-16 border-4 border-neutral-800 rounded-full"
        role="status" >
      </div>
        <span className="text-green-300 font-extrabold text-xl tracking-widest animate-pulse">LOADING</span>
        
      </div>
    </div>
    </div>
  );
}

export default Spinner;
