import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState('light'); // Default theme set to light
  const [language, setLanguage] = useState('en'); // Language state for dropdown

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.body.classList.toggle('dark-theme', newTheme === 'dark'); // Toggle dark theme class on body

      return newTheme;
    });
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Handle language change
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">MohanKumar <span className='hi-text'>.</span></a>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-right">
        {/* Language Selector */}
        <select className="language-select" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '🌞'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
