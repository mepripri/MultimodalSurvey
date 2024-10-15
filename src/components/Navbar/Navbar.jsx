import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <a href="#explore-menu">Menu</a>
        <a href="#app-download">Mobile App</a>
        <a href="#footer">Contact Us</a>
      </ul>
    </div>
  );
}

export default Navbar;
