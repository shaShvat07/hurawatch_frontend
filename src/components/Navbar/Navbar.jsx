import React, { useState } from 'react';
import './styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = 'https://img.hurawatch.cc/xxrz/400x400/100/88/52/88526f5e66ecc3b78ee9a1744d4c8457/88526f5e66ecc3b78ee9a1744d4c8457.png'
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        <li>
          <a href="#">Home</a>
          <ul className="dropdown">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Genre</a>
          <ul className="dropdown">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Country</a>
          <ul className="dropdown">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">TV Shows</a>
        </li>
        <li>
          <a href="#">Top IMDB</a>
        </li>
        {/* Repeat for the other 5 buttons */}
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="login-btn">
        <a href="#">Login</a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;