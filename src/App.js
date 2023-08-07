import './App.css';
import React from 'react'
import Add from "./pages/Add.jsx";
import Ranking from "./pages/Ranking.jsx";
import Books from "./pages/Books.jsx";
import About from "./pages/About.jsx";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './pages/Navbar';

function App() {

  return (
    <>
    <div className="App">
      
    <Navbar/>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/ranking" element={<Ranking/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter> 



      </div>
    </>
  )
};

export default App;
