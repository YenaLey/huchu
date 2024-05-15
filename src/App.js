import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';

function App() {

  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Huchu</Link>
          </div>
          <div className="pc-menu">
            <ul>
              <li><Link to="/">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
