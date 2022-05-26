import React from "react";

function PlaylistDetails({ playlist }) {

    // console.log(playlist)
    
  return (
    <div className="bg-neutral-800 p-3 grid grid-flow-row text-green-400">
      <div className="flex">
        <img src={playlist.image} alt="playlist img" className="h-[140px] mr-3 rounded-sm"></img>
            <div className="flex flex-col text-left">
                <div>
                <h1 className="text-2xl font-semibold tracking-wide underline underline-offset-1">{playlist.name}</h1> 
                <p className="text-s text-green-300">{playlist.description}</p>
                <p className="font-semibold">Average Tempo of Tracks: <span className="text-green-300 font-normal">{Math.round(playlist.tempo_avg)} bpm</span></p>
                <p className="font-semibold">Total Track Count: <span className="text-green-300 font-normal">{playlist.song_count}</span></p>
            <button
              onClick={() => console.log("View Details")}
              className="     
            bg-neutral-600
            text-green-300 
              text-base
              px-4
              py-0.5
              rounded-sm
              my-1
            hover:bg-green-700
            active:bg-green-900
            mr-2
            "
            >
              View Details
            </button>
            <button
              onClick={() => console.log("Delete Playlist")}
              className="     
            bg-neutral-600
            text-green-300 
              text-base
              px-4
              py-0.5
              rounded-sm
              my-1
            hover:bg-red-700
            active:bg-red-900
            mr-2
            "
            >
              Delete Playlist
            </button>
            </div>
            </div>
      </div>
    </div>
  );
}

export default PlaylistDetails;
