import React from "react";
import "./KeyFindings.css";
import kf01 from "../../assets/kf01.png";
import kf02 from "../../assets/kf02.png";

function KeyFindings() {
  return (
    <div className="pad-div">
      <div className="hr-div">
        <hr /> <hr />
      </div>
      <div className="results-container" id="results">
        <h2 className="section-title-results">Core Insights</h2>
        <div className="results-content">
          <div className="result-block">
            <h1>Key Findings</h1>
            <img src={kf01} alt="Bar Chart" className="result-image" />
            <p>
              This horizontal bar chart summarizes the key findings of the same
              papers in multimodal learning, rating their overall contributions.
              It demonstrates that papers like "Transformers for Multimodal
              Learning" and "Foundations of Multimodal ML" make the most
              substantial contributions to the field, while others, like
              "VisualWebArena" and "Multimodal Pretraining for RecSys," offer
              more moderate insights.
            </p>
          </div>
          <div className="result-block">
            <h1>Key Challenges</h1>
            <img src={kf02} alt="Line Chart" className="result-image" />
            <p>
              This bar chart compares the challenges of cross-modal alignment
              and scalability across multiple papers in the field of multimodal
              learning. The graph highlights how certain papers, such as
              "Foundations of Multimodal ML" and "Transformers for Multimodal
              Learning," score highly in both categories, while others exhibit
              varying levels of emphasis on these key challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyFindings;
