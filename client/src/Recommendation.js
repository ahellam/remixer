import React from 'react'

function Recommendation({rec}) {
  return (
    <div className="bg-neutral-800 text-green-200 text-xs font-medium leading-[19px] text-left scale-75">
        {console.log(rec.artists[0].name,":", rec.name, "id: ", rec.id)}
        <img
        // h-[170px]
            className=" mr-3 "
            src={rec.album.images[2].url}
            alt="album cover"
          ></img>
        <span className="text-green-400 font-semibold tracking-wide">
              TRACK NAME: &nbsp;
            </span> {rec.name}<br></br>
            <span className="text-green-400 font-semibold tracking-wide">
              ARTIST NAME: &nbsp;
            </span> {rec.artists[0].name}<br></br>

            <button className="     
            bg-neutral-600
            text-green-300 
              text-base
              px-4
              py-0.5
              rounded-sm
            hover:bg-green-700
            active:bg-green-900
            "
             onClick={() => console.log(rec.id)}>Add</button>
    </div>
  )
}

export default Recommendation