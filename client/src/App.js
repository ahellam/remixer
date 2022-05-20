import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navigation from './Navigation';
import Home from './Home';
import Search from './Search';


function App() {
  return (
    <div className="p-1 text-center grid gap-1">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
