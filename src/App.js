import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Animals from "./Animals.js";
import Birds from "./Birds.js";
import About from "./About";

class App extends Component {





  render() {
    return (
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/birds">Birds</Link>
          <Link to="/about">About</Link>
        </nav>

  
        </BrowserRouter>
   
    );
  }
}

export default App;
