import React from "react";
import "./Introduction.css";

function Intro() {
  return (
    <div className="pad-div">
      <div className="hr-div">
        <hr /> <hr />
      </div>
      <div className="intro-container">
        <div id="introduction" className="introduction-section">
          <div className="intro-heading">
            <h2>Introduction</h2>
          </div>
          <div className="intro-text">
            <p>
              <span style={{ fontSize: "30px",fontWeight:"bold" }}>R</span>ecent years have
              witnessed rapid development in integrating text, images, and
              videos on the web, increasing the requirement for more advanced
              multimodal learning techniques to understand content better and
              thereby create better service offerings, such as web search and
              virtual assistants. First, the process of and integration of
              information from various sources is the main tag of multimodal
              learning, which can ensure more accurate and context-aware
              outcomes. However, how to align and represent multimodal data
              effectively is still a big challenge.
              <br />
              <br />
              This survey gives an overview of recent developments in multimodal
              learning. Particular attention is focused on learning methods,
              content understanding, and cross-modal search. We discuss active
              trends, such as transformer-based models and multimodal
              pretraining, and outline their influence on the development of
              advanced web technologies. Having discussed these main
              contributions, this survey outlines unresolved challenges and
              identifies further research directions to be pursued with the aim
              of improving the functionalities of multimodal systems on the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
