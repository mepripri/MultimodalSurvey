import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`navbar ${menuOpen ? "expanded" : ""}`}>
        <div className="logo">
          <Link to="/" className="link-a">
            MultimodalSurvey
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="link-a" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Methodology" className="link-a" onClick={toggleMenu}>
              Methodology
            </Link>
          </li>
          <li>
            <Link to="/Taxonomy" className="link-a" onClick={toggleMenu}>
              Taxonomy
            </Link>
          </li>
          <li>
            <Link to="/KeyFindings" className="link-a" onClick={toggleMenu}>
              KeyFindings
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="link-a" onClick={toggleMenu}>
              AboutUs
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
