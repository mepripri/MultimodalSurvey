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
            <Link to="/" className="link-a">
              Home
            </Link>
          </li>
          <li>
            <Link to="/LiteratureReview" className="link-a">
              Literature Review
            </Link>
          </li>
          <li>
            <Link to="/Methodology" className="link-a">
              Methodology
            </Link>
          </li>
          <li>
            <Link to="/Result" className="link-a">
              Taxonomy
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
