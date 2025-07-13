import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./styles.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        {/* Menu Links */}
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a className="nav-item" href="/" onClick={closeMenu}>
            Home
          </a>
          <a className="nav-item" href="/about-us" onClick={closeMenu}>
            About Us
          </a>
          <a className="nav-item" href="/gallery" onClick={closeMenu}>
            Gallery
          </a>
          <a className="nav-item" href="/contact-us" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-item" href="/winners" onClick={closeMenu}>
            Winners
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
