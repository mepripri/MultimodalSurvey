import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="blank-div"></div>
      <div className="navbar">
        <div className="logo">Logo</div>
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#liter">Literature Review</a></li>
          <li><a href="#methodology">Methodology</a></li> {/* Updated href to #methodology */}
          <li><a href="#results">Results</a></li>
          <li><a href="#about-us">About Us</a></li> {/* href updated to match id */}

        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          {/* Hamburger icon */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="blank-div"></div>
    </>
  );
}

export default Navbar;
