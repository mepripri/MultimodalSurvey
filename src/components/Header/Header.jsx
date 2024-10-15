import React from "react";
import "./Header.css";
import main from "../../assets/main.jpeg";

function Header() {
  return (
    <header className="header">
      <div className="header-h1-p">
        <h1>
          A Survey on Multimodal Learning on the Web and Content Understanding
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, minus.
          Nemo aliquam voluptatem eos beatae at iste sit repellendus voluptatum
          eaque nostrum quod cumque asperiores maxime eveniet, nihil molestias
          recusandae.
        </p>
        <button className="header-btn">MORE INFO</button>
      </div>
      <div className="header-img">
        <img src={main} alt="main" />
      </div>
    </header>
  );
}

export default Header;
