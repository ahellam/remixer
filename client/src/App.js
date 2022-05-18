import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navigation from './Navigation';
import Home from './Home';


function App() {
  return (
    <div className="p-3 text-center grid gap-1">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
