import React from "react";

function PlaylistDetails({ playlist }) {

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
    <div className="bg-neutral-800 p-3 text-green-400">
      <div className="flex">
        <img src={playlist.image} alt="playlist img" className="h-[140px] mr-3 rounded-sm"></img>
            <div className="flex flex-col text-left">
                <div>
                <h1 className="text-2xl font-semibold tracking-wide underline underline-offset-1">{playlist.name}</h1> 
                <p className="text-s text-green-300">{playlist.description}</p>
                <p className="font-semibold">Average Tempo of Tracks: <span className="text-green-300 font-normal">{Math.round(playlist.tempo_avg)} bpm</span></p>
                <p className="font-semibold">Total Track Count: <span className="text-green-300 font-normal">{playlist.song_count}</span></p>

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
      <div className="bg-neutral-800 flex flex-col mt-2">
        {playlist.tracks.map((t) => (
          <div key={t.id} className=" text-green-200 my-1 text-sm leading-[18px]">
            <img
            className="h-[107px] mr-3 float-left"
            src={t.album_image}
            alt="album cover"
          ></img>
            <div className="text-left">
              <span className="text-green-400 font-semibold">
                TRACK:&nbsp;
              </span> {t.name}<br></br>

              <span className="text-green-400 font-semibold">
                ARTIST: &nbsp;
              </span>
                {t.artist} <br></br>

              <span className="text-green-400 font-semibold">
                DURATION: &nbsp;
              </span>
                {millisToMinutesAndSeconds(t.duration_ms)} <br></br>

              <span className="text-green-400 font-semibold">
                TEMPO: &nbsp;
              </span>
                {Math.round(t.tempo)} bpm<br></br>

                <button className="  
            my-1 
            bg-neutral-600
            text-green-300 
            text-base
            px-3
            py-0.5
            rounded-sm
            mr-1
            hover:bg-red-700
            active:bg-red-900
            "
            onClick={() => console.log(t.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistDetails;
