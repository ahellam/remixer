import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navigation from './Navigation';
import Home from './Home';
import Search from './Search';
import Success from './Success'
import Playlists from './Playlists';
import Create from './Create'
import Login from './Login';


function App() {

  const playlistsURL = "http://localhost:3000/playlists"
  const tracksURL = "http://localhost:3000/tracks"

  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/authorized_user`)
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
    fetch(playlistsURL)
    .then(res => res.json())
    .then(setPlaylists)

    fetch(tracksURL)
    .then(res => res.json())
    .then(setTracks)

  },[])
                                                  // console.log(tracks)
  function handleDeleteTrack(track) { 
    // console.log(track.id)
    fetch(`${tracksURL}/${track.id}`, {
        method: "DELETE"
    })
    .then(setTracks(tracks.filter((t) => t.id !== track.id)))
  }


 // Reroute user to <Login /> Component if not authenticated
 if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    <div className="p-1 text-center grid gap-1">
      <Router>
        <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/success" element={<Success />}/>
          <Route path="/search" element={<Search playlists={playlists} setPlaylists={setPlaylists} tracks={tracks} setTracks={setTracks}/>}/>
          <Route path="/playlists" element={<Playlists playlists={playlists} setPlaylists={setPlaylists} handleDeleteTrack={handleDeleteTrack} tracks={tracks} />}/>
          <Route path="/create" element={<Create playlists={playlists} setPlaylists={setPlaylists}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
