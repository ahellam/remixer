import React from 'react'
import PlaylistDetails from './PlaylistDetails'

function Playlists({playlists}) {
  return (
    <div className="bg-neutral-800 h-screen">
        <div>
        <h1 
            className=" tracking-wide text-3xl p-1 text-center font-medium">
            <span className="text-green-300"> P</span>
            <span className="text-green-400"> L</span>
            <span className="text-green-500"> A</span>
            <span className="text-green-600"> Y</span>
            <span className="text-green-700"> L</span>
            <span className="text-green-600"> I</span>
            <span className="text-green-500"> S</span>
            <span className="text-green-400"> T</span>
            <span className="text-green-300"> S</span>
        
        </h1>
        </div>
      {playlists.map((playlist) => (
          <PlaylistDetails key={playlist.id} playlist={playlist}/>
      ))}
    </div>
  )
}

export default Playlists