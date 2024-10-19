import React from "react";
import "./Result.css";
import img01 from "../../assets/img01.jpg"; // Ensure img01.jpg is in the right folder

function Results() {
  return (
    <div className="results-container" id="results">
      <h2 className="section-title">Results</h2>
      <div className="results-content">
        {/* First Result Block */}
        <div className="result-block">
          <img src={img01} alt="Pie Chart" className="result-image" />
          <ul className="result-list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation.</li>
            <li>Excepteur sint occaecat cupidatat non proident.</li>
            <li>Sunt in culpa qui officia deserunt mollit.</li>
          </ul>
        </div>

        {/* Second Result Block */}
        <div className="result-block">
          <ul className="result-list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation.</li>
            <li>Excepteur sint occaecat cupidatat non proident.</li>
            <li>Sunt in culpa qui officia deserunt mollit.</li>
          </ul>
          <img src={img01} alt="Bar Chart" className="result-image" />
        </div>

        {/* Third Result Block */}
        <div className="result-block">
          <img src={img01} alt="Line Chart" className="result-image" />
          <ul className="result-list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation.</li>
            <li>Excepteur sint occaecat cupidatat non proident.</li>
            <li>Sunt in culpa qui officia deserunt mollit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Results;
