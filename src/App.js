import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link, Element } from 'react-scroll';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';


function App() {

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="gallery" smooth={true} duration={500}>Huchu</Link>
        </div>
        <div className="pc-menu">
          <ul>
            <li><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>
            <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
          </ul>
        </div>
      </nav>

      <Element name="gallery" className="section"><Gallery /></Element>
      <Element name="blog" className="section"><Blog /></Element>
    </>
  );
}

export default App;
