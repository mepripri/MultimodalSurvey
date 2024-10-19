import React from "react";
import "./Header.css";
import main from "../../assets/main.jpeg";

function Header() {
  return (
    <>
      <header id="home" className="header">
        <div className="header-h1-p">
          <h1>
            A Survey on Multimodal Learning on the Web and Content Understanding
          </h1>
          <p>
            This survey examines recent advancements in multimodal learning,
            highlights gaps in current methods, and suggests directions for
            future research to build more robust, scalable, and secure
            multimodal systems for web applications.
          </p>
          <button className="header-btn">MORE INFO</button>
        </div>
        <div className="header-img">
          <img src={main} alt="main" />
        </div>
      </header>
    </>
  );
}

export default Header;
