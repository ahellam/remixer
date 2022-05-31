import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Result from './Result';
import Recommendation from './Recommendation';
import Spinner from './Spinner';

function Search({playlists, setPlaylists, tracks, setTracks}) {

  let navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentTrack, setCurrentTrack] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true)
    fetch(`http://localhost:3000/spotify_api/search?track_name=${search}`)
    .then(res => res.json())
    .then(json => {
      setCurrentTrack(json)
      setIsLoading(false)
      setSearch("")
    })
  }
  
  function handleRecommendation() {
    // console.log(`currentTrack id: ${currentTrack.id}, tempo: ${parseInt(currentTrack.audio_analysis.tempo)}, key: ${currentTrack.audio_analysis.key}, mode: ${currentTrack.audio_analysis.mode}`) 
    fetch(`http://localhost:3000/spotify_api/recommendations?id=${currentTrack.id}&tempo=${parseInt(currentTrack.audio_analysis.tempo)}&key=${currentTrack.audio_analysis.key}&mode=${currentTrack.audio_analysis.mode}`)
    .then(res => res.json())
    .then(setRecommendations)
  }

  function handleSaveRec(rec) {

    const recData = {
      playlist_id: parseInt(selectedPlaylist),
      name: rec.name, 
      artist: rec.artists[0].name,
      album_name: rec.album.name,
      album_image: rec.album.images[1].url,
      tempo: rec.audio_features.tempo,
      time_signature: rec.audio_features.time_signature,
      key: rec.audio_features.key,
      mode: rec.audio_features.mode,
      duration_ms: rec.audio_features.duration_ms,
      spotify_id: rec.id,
      uri: rec.uri
    }
    // console.log(recData)
    fetch('http://localhost:3000/tracks', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recData),
    })
    .then(res => res.json())
    .then((newTrack) => {setTracks([...tracks, newTrack])})
    .then(() => {navigate('/playlists');});
  }

  function handleSaveTrack(e) {
    e.preventDefault()
    // console.log(currentTrack)
    // console.log('selected playlist id: ', selectedPlaylist)

    const songData = {
      playlist_id: parseInt(selectedPlaylist),
      name: currentTrack.name,
      artist: currentTrack.artists[0].name,
      album_name: currentTrack.album.name,
      album_image: currentTrack.album.images[1].url,
      tempo: currentTrack.audio_analysis.tempo,
      time_signature: currentTrack.audio_analysis.time_signature,
      key: currentTrack.audio_analysis.key,
      mode: currentTrack.audio_analysis.mode,
      duration_ms: currentTrack.duration_ms,
      spotify_id: currentTrack.id,
      uri: currentTrack.uri
    }

    // console.log(songData)
    fetch('http://localhost:3000/tracks', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(songData),
    })
    .then(res => res.json())
    .then((newTrack) => {setTracks([...tracks, newTrack])})
    .then(() => {navigate('/playlists');})
  }
  

                                                                                  // console.log(analysisStats)
                                                                                  // console.log(currentTrackId)
  return (
    <div className="">
    <div className="bg-neutral-800 h-screen">
    <div className=" bg-neutral-800 p-3 rounded-sm flex flex-col items-start">
      <form className="p-1" id="searchTrack" onSubmit={handleSearch}>
        <input
          className="p-1 rounded-sm"
          type="text"
          placeholder="Search Songs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          className=" 
      bg-neutral-600
      text-green-300 
      px-3
      py-1
      rounded-sm
      mx-1
      hover:bg-green-700
      active:bg-green-900
      "
          type="submit"
        >
          Search
        </button>
      </form> 
        {/* <Spinner /> */}

      <div className="my-2">
      {(isLoading ? <Spinner /> : currentTrack.id && <Result playlists={playlists} currentTrack={currentTrack} handleRecommendation={handleRecommendation} selectedPlaylist={selectedPlaylist} setSelectedPlaylist={setSelectedPlaylist} handleSaveTrack={handleSaveTrack}/>)}
      </div>
      
      <div className="grid grid-cols-3">
        {recommendations.map((rec, index) => (
          <Recommendation key={index} rec={rec} index={index} handleSaveRec={handleSaveRec} selectedPlaylist={selectedPlaylist}/>
        ))}
      </div>
    </div>



    </div>
    </div>
  );
}

export default Search;

//{searchResults.length === 0 && 

  // SHOULD THIS BE 2 DIFFERENT USE EFFECTS?
  // useEffect(() => {
    // searchResults.length > 1 ? setCurrentTrackId(searchResults[0].id) : setCurrentTrackId("")

    // if (currentTrackId.length > 1)
    // fetch(`http://localhost:3000/spotify_api/audio-analysis?id=${currentTrackId}`)
    // .then(res => res.json())
    // .then(setAnalysisStats)
    
    // .then(json => console.log("tempo: ", json.track.tempo, "key: ", json.track.key))
    // .then(json => setAnalysisStats(json.track))
  // }, [searchResults, currentTrackId])
