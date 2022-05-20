import { useEffect, useState } from "react";
import Result from './Result';
import Spinner from './Spinner';

function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentTrackId, setCurrentTrackId] = useState("");
  const [analysisStats, setAnalysisStats] = useState();
  const [isLoading, setIsLoading] = useState(false)

  function getTrackAnalysis(trackId){
    fetch(`http://localhost:3000/spotify_api/audio-analysis?id=${trackId}`)
    .then(res => res.json())
    .then(setAnalysisStats)
    .then(setIsLoading(false))
  }

  function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true)
    fetch(`http://localhost:3000/spotify_api/search?track_name=${search}`)
    .then(res => res.json())
    .then(json => {
      setSearchResults(json.tracks.items)
      setCurrentTrackId(json.tracks.items[0].id)
      getTrackAnalysis(json.tracks.items[0].id)
    })
    
    
    .then(setSearch(""))
  }




  
  function handleRecommendation() {
    console.log(`get recommendations from track id: ${currentTrackId}`)
    
  }

  function clearTrackInfo() {
    setSearchResults([])
    setCurrentTrackId("")
}

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
      {(isLoading ? <Spinner /> : searchResults[0] && analysisStats &&  <Result searchResults={searchResults} setSearchResults={setSearchResults} analysisStats={analysisStats} handleRecommendation={handleRecommendation} clearTrackInfo={clearTrackInfo}/>)}
      </div>
    </div>
    <Spinner />
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
