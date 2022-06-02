import { useState, useEffect } from "react";
import SpotifyPlayer from 'react-spotify-web-playback';

function PlaylistDetails({ playlist, handleDeleteTrack, tracks, shownPlaylist, handleDeletePlaylist}) {

  const [selectedPlaylistTrack, setSelectedPlaylistTrack] = useState()
  const [userToken, setUserToken] = useState()

  useEffect(() => {
    fetch(`http://localhost:3000/spotify_api/get_user_token`)
        .then((res) => {
          if (res.ok) {
            res.json()
                .then((res) => {
                  setUserToken(res.token);
                });
          }
        });
  },[])

  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // const keyToNotes = (key) => {
  //   const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]
  //   return key >=0 ? notes[key] : "No key detected"
  // }

  // const modeToWord = (num) => {
  //   return num > 0 ? "Major" : "Minor"
  // }

  const shownSongs = tracks.filter(track => track.playlist_id === parseInt(shownPlaylist))
  const shownSongTempos = shownSongs.map((song) => song.tempo)
  const songsCount = shownSongTempos.length
  const tempoTotals = shownSongTempos.reduce((a, b) => a + b, 0)
  const avgTempo = tempoTotals / songsCount


  return (
    <div className="bg-neutral-800 p-3 text-green-400">
      <div className="flex">
        <img src={playlist.image} alt="playlist img" className="h-[140px] w-[200px] object-cover mr-3 rounded-sm"></img>
            <div className="flex flex-col text-left">
                <div>
                <h1 className="text-2xl font-semibold tracking-wide underline underline-offset-1">{playlist.name}</h1> 
                <p className="text-s text-green-300">{playlist.description}</p>
                <p className="font-semibold">Average Tempo of Tracks: <span className="text-green-300 font-normal">{avgTempo ? `${Math.round(avgTempo)} bpm` : "Empty Playlist"}</span></p>
                <p className="font-semibold">Total Track Count: <span className="text-green-300 font-normal">{songsCount}</span></p>

            <button
              onClick={() => handleDeletePlaylist(playlist)}
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

      <div className="ml-1 w-1/2">
      {userToken && selectedPlaylistTrack && <SpotifyPlayer
          token={userToken}
          uris={[selectedPlaylistTrack.uri]}
          styles={{
            bgColor: "neutral",
            trackNameColor: "rgb(74 222 128 / 50)",
            trackArtistColor: "#3b8f63",
            color: "rgb(74 222 128 / 50)",
            sliderHandleColor: "#3b8f63",
          }}
      />}
      {selectedPlaylistTrack && <button
       onClick={() => setSelectedPlaylistTrack()}
       className="
       float-right
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
         Clear 
        </button>}
      </div>

      <div className="bg-neutral-800 flex flex-col mt-2">
        {tracks.filter(track => track.playlist_id === parseInt(shownPlaylist)).map((t) => (
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
            onClick={() => handleDeleteTrack(t)}>Delete</button>

<button className="  
            my-1 
            bg-neutral-600
            text-green-300 
            text-base
            px-5
            py-0.5
            rounded-sm
            mr-1
            hover:bg-red-700
            active:bg-red-900
            "
            onClick={() => setSelectedPlaylistTrack(t)}>Play</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistDetails;
