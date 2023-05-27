import React from "react";
import Signup from './pages/Signup.js';
import Profile from './pages/Profile.js';
import {Routes,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
