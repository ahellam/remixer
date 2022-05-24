import React from "react";

function Result({ currentTrack, handleRecommendation }) {

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
        <div className="text-green-200 text-xs font-medium leading-[19px] p-1 mx-auto flex items-left text-left justify-center">
          <img
            className=" mr-3 h-[170px]"
            src={currentTrack.album.images[1].url}
            alt="album cover"
          ></img>
          <p>
            <span className="text-green-400 font-semibold tracking-wide">
              TRACK NAME: &nbsp;
            </span>
            {currentTrack.name} <br></br>
{/* 
            <span className="text-green-400 font-semibold tracking-wide">
              TRACK ID: &nbsp;
            </span>
            {currentTrack.id} <br></br> */}

            <span className="text-green-400 font-semibold tracking-wide">
              TRACK DURATION: &nbsp;
            </span>
            {millisToMinutesAndSeconds(currentTrack.duration_ms)} <br></br>

            <span className="text-green-400 font-semibold tracking-wide">
              ARTIST NAME: &nbsp;
            </span>
            {currentTrack.artists[0].name} <br></br>
            <span className="text-green-400 font-semibold tracking-wide">
              ALBUM NAME: &nbsp;
            </span>
            {currentTrack.album.name} <br></br>
            <span className="text-green-400 font-semibold tracking-wide">
              ANALYSIS TEMPO: &nbsp;
            </span>
            {parseInt(currentTrack.audio_analysis.tempo)} &nbsp;&nbsp;<span className="text-green-400 font-semibold tracking-wide">
              TIME SIGNATURE:&nbsp;
            </span> {currentTrack.audio_analysis.time_signature}/4 <br></br>
            <span className="text-green-400 font-semibold tracking-wide">
              ANALYSIS KEY: &nbsp;
            </span>
            {keyToNotes(currentTrack.audio_analysis.key)} &nbsp;&nbsp;<span className="text-green-400 font-semibold tracking-wide">
              MODE:&nbsp;
            </span>
            {modeToWord(currentTrack.audio_analysis.mode)} &nbsp;&nbsp; <br></br>
            
            <span className="text-green-400 font-semibold tracking-wide">
              GENRES:&nbsp;
            </span>{currentTrack.genres.map(g => `${g} / `)}


            <br></br>
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
          </p>
        </div>
        
    </div>
  );
}

export default Result;
