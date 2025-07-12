import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" />
          <div className="navbar-title">
            <span>Vijaya Group</span>
            <br />
            <span>Of Institutions</span>
          </div>
        </div>

        {/* Menu Links */}
        <nav className="navbar-links">
          <div className="nav-item">ABOUT US ▾</div>
          <div className="nav-item">ADMISSIONS ▾</div>
          <div className="nav-item">ACADEMICS ▾</div>
          <div className="nav-item">STUDENT LIFE ▾</div>
          <div className="nav-item">COMMUNITY ▾</div>
          <div className="nav-item">OUR SERVICES ▾</div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
