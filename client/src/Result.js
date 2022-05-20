import React from "react";

function Result({ searchResults, setSearchResults, analysisStats, clearTrackInfo, handleRecommendation}) {

  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const keyToNotes = (key) => {
    const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]
    return key >=0 ? notes[key] : "No key detected"
  }

  const modeToWord = (num) => {
    return num > 0 ? "Major" : "Minor"
  }

  return (
    <div>
      {searchResults[0] && (
        <div className="text-green-200 text-xs font-medium leading-[19px] p-1 mx-auto flex items-left text-left justify-center">
          <img
            className=" mr-3 h-[170px]"
            src={searchResults[0].album.images[1].url}
          ></img>
          <p>
            <span className="text-green-400 font-semibold tracking-wide">
              TRACK NAME: &nbsp;
            </span>
            {searchResults[0].name} <br></br>

            <span className="text-green-400 font-semibold tracking-wide">
              TRACK ID: &nbsp;
            </span>
            {searchResults[0].id} <br></br>

            <span className="text-green-400 font-semibold tracking-wide">
              TRACK DURATION: &nbsp;
            </span>
            {millisToMinutesAndSeconds(searchResults[0].duration_ms)} <br></br>

            <span className="text-green-400 font-semibold tracking-wide">
              ARTIST NAME: &nbsp;
            </span>
            {searchResults[0].artists[0].name} <br></br>
            <span className="text-green-400 font-semibold tracking-wide">
              ALBUM NAME: &nbsp;
            </span>
            {searchResults[0].album.name} <br></br>
            <span className="text-green-400 font-semibold tracking-wide">
              ANALYSIS TEMPO: &nbsp;
            </span>
            {analysisStats.track.tempo} &nbsp;&nbsp;<span className="text-green-400 font-semibold tracking-wide">
              TIME SIGNATURE:&nbsp;
            </span> {analysisStats.track.time_signature} <br></br>
            <span className="text-green-400 font-semibold tracking-wide">
              ANALYSIS KEY: &nbsp;
            </span>
            {keyToNotes(analysisStats.track.key)} &nbsp;&nbsp;<span className="text-green-400 font-semibold tracking-wide">
              MODE:&nbsp;
            </span>
            {modeToWord(analysisStats.track.mode)}<br></br>
            <button
              onClick={handleRecommendation}
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
            "
            >
              Get Recommendations
            </button>
            <button
              onClick={() => clearTrackInfo()}
              className="     
            bg-neutral-600
            text-green-300 
              text-base
              px-5
              py-0.5
              rounded-sm
              ml-2
            hover:bg-red-700
            active:bg-green-900
            "
            >
              Clear
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Result;
