import { useState } from "react";
import Result from './Result';
import Spinner from './Spinner';

function Search() {
  const [search, setSearch] = useState("");
  const [currentTrack, setCurrentTrack] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

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
    console.log(`get recommendations`) 
    fetch(`http://localhost:3000/spotify_api/recommendations?id=${currentTrack.id}&tempo=${currentTrack.audio_analysis.tempo}`)
    .then(res => res.json())
    .then(setRecommendations)
  }

  // console.log(currentTrack)

                                                                                  // console.log(analysisStats)
                                                                                  // console.log(currentTrackId)
  return (
    <div className="bg-neutral-800 flex flex-row h-screen">
    <div className=" bg-neutral-800 p-3 rounded-sm flex flex-col">
      <form className="p-1" id="searchTrack" onSubmit={handleSearch}>
        <input
          className="p-1 rounded-sm float-left"
          type="text"
          placeholder="Search Songs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          className=" 
          float-left
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
      <div className="my-2">
      {(isLoading ? <Spinner /> : currentTrack.id && <Result currentTrack={currentTrack} handleRecommendation={handleRecommendation}/>)}
      </div>
    </div>
    {/* <Spinner /> */}
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
