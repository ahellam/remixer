import {useState} from 'react'
import PlaylistDetails from './PlaylistDetails'

function Playlists({playlists, handleDeleteTrack, tracks}) {

  const [shownPlaylist, setShownPlaylist] = useState("")
  // console.log(playlists.find(p => p.id === parseInt(shownPlaylist)))
  return (
    <div className="bg-neutral-800 h-screen">
        <div>
        {/* <h1 
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
        
        </h1> */}
        </div>
      <select className="
              text-center
              bg-neutral-600
              text-green-300 
              text-base
              px-1
              py-[3.3px]
              rounded-sm
              my-2
              mr-2
              "
              value={shownPlaylist}
              onChange={(e) => setShownPlaylist(e.target.value)}
              >
        <option value="">Select Playlist</option>
        {playlists.map((playlist) => (
          <option key={playlist.id} value={playlist.id}>
            {playlist.name}
          </option>
        ))}
      </select>
      {shownPlaylist && <PlaylistDetails playlist={playlists.find(p => p.id === parseInt(shownPlaylist))} handleDeleteTrack={handleDeleteTrack} shownPlaylist={shownPlaylist} tracks={tracks}/>}
       
    </div>
  )
}

export default Playlists