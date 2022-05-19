import { useEffect, useState } from "react";
import Result from './Result';

function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentTrackId, setCurrentTrackId] = useState("");
  const [analysisStats, setAnalysisStats] = useState([])

  function handleSearch(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/spotify_api/search?track_name=${search}`)
    .then(res => res.json())
    .then(json => setSearchResults(json.tracks.items))
    .then(setSearch(""))
  }

  useEffect(() => {
    if (searchResults.length > 1)
    setCurrentTrackId(searchResults[0].id)
    if (currentTrackId.length > 1)
    fetch(`http://localhost:3000/spotify_api/audio-analysis?id=${currentTrackId}`)
    .then(res => res.json())
    .then(json => console.log("tempo: ", json.track.tempo, "key: ", json.track.key))
    // .then(json => setAnalysisStats(json.track))
  }, [searchResults, currentTrackId])

  
  function handleRecommendation() {
    console.log(`get recommendations from track id: ${currentTrackId}`)
    
  }

                                                                                  // console.log(analysisStats)
                                                                                  
  return (
    <div className=" bg-neutral-800 p-3 rounded-sm grid grid-rows-6">
      <form id="searchTrack" onSubmit={handleSearch}>
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
      <div className="row-start-2 row-span-2">
      {searchResults[0] && <Result searchResults={searchResults} setSearchResults={setSearchResults} handleRecommendation={handleRecommendation}/>}
      </div>
    </div>
  );
}

export default Search;

