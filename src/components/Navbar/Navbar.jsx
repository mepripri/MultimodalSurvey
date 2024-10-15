import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="blank-div"></div>
      <div className="navbar">
        <ul className="navbar-menu">
          <a href="#explore-menu">About Us</a>
          <a href="#app-download">Literature Review</a>
          <a href="#footer">Methodology</a>
          <a href="#results">Results</a>
        </ul>
      </div>
      <div className="blank-div"></div>
    </>
  );
}

export default Navbar;
