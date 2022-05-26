import React from 'react'

function Recommendation({rec}) {

    const keyToNotes = (key) => {
        const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]
        return key >=0 ? notes[key] : "No key detected"
      }
    
      const modeToWord = (num) => {
        return num > 0 ? "Major" : "Minor"
      }

  return (
    <div className="bg-neutral-800 text-green-200 text-xs font-medium leading-[15px] text-left mx-1 py-1">
        {/* {console.log(rec.artists[0].name,":", rec.name, "id: ", rec.id)} */}
        <img
            className="h-[100px] mr-3 float-left"
            src={rec.album.images[1].url}
            alt="album cover"
          ></img>

        <span className="text-green-400 font-semibold">
            TRACK:&nbsp;
        </span> {rec.name}<br></br>
        <span className="text-green-400 font-semibold">
            ARTIST:&nbsp;
        </span> {rec.artists[0].name}<br></br>
        <span className="text-green-400 font-semibold">
            TEMPO:&nbsp;
        </span> {Math.round(rec.audio_features.tempo)}<br></br>
        <span className="text-green-400 font-semibold">
            KEY:&nbsp;
        </span> {keyToNotes(rec.audio_features.key)}&nbsp;{modeToWord(rec.audio_features.mode)} <br></br>

            <button className="  
            my-1 
            bg-neutral-600
            text-green-300 
              text-base
              px-4
              py-0.5
              rounded-sm
            hover:bg-green-700
            active:bg-green-900
            "
             onClick={() => console.log(rec.id)}>Add</button>
    </div>
  )
}

export default Recommendation