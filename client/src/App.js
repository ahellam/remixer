import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navigation from './Navigation';
import Home from './Home';
import Search from './Search';
import Playlists from './Playlists';


function App() {

  const playlistsURL = "http://localhost:3000/playlists"
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch(playlistsURL)
    .then(res => res.json())
    .then(setPlaylists)
  },[])

  return (
    <div className="p-1 text-center grid gap-1">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/playlists" element={<Playlists playlists={playlists}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
