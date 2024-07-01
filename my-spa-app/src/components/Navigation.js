import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 
const Navigation = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="nav-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleNavMenu}>Home</Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleNavMenu}>Blog</Link>
          </li>
          <li>
            <Link to="/MyDogs" onClick={toggleNavMenu}>My Dogs</Link>
          </li>
          <li>
            <Link to="/zodiac" onClick={toggleNavMenu}>Zodiac of Dogs</Link>
          </li>
          <li>
            <Link to="/dogregistrationform" onClick={toggleNavMenu}>Dog Registration Form</Link>
          </li>
        </ul>
      </div>
      <div className="nav-toggle" onClick={toggleNavMenu}>
        <span className={`burger ${isMenuOpen ? 'active' : ''}`}></span>
      </div>




<div className="dark-mode-toggle">
  <button className="dark-mode-button" onClick={toggleDarkMode}>
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
</div>
    </nav>
  );
};

export default Navigation;