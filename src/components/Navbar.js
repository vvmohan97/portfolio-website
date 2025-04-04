import React, { useEffect, useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect if screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.body.classList.toggle('dark-theme', newTheme === 'dark');
      return newTheme;
    });
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" onClick={closeMobileMenu}>
          MohanKumar <span className="hi-text">.</span>
        </a>
      </div>
  {/* Mobile theme toggle when menu is open */}
  {isMobile || isMobileMenuOpen ? (
        <div className="mobile-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '🌞'}
          </button>
      
        </div>
      ):""}
      
      {/* Mobile Menu Icon */}
      {isMobile && (
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>
      )}

    

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobile && isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
        <li><a href="#portfolio" onClick={closeMobileMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
      </ul>

      {/* Desktop Right Side */}
      {!isMobile && (
        <div className="navbar-right">
          <select className="language-select" value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
          </select>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '🌞'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
