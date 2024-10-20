import React from "react";
import "./Literature.css";

function LiteratureReview() {
  const tableData = Array(21).fill({
    title: "Research Title",
    methodology: "Methodology",
    focus: "Main Focus",
    year: "Year Published",
    link: "Link",
  });

  return (
    <div className="pad-div">
      <div className="hr-div">
        <hr /> <hr />
      </div>
      <div id="liter" className="literature-review-container">
        <h2 className="section-title-literature">Literature Review</h2>
        <table className="literature-table">
          <thead>
            <tr>
              <th>Research Title</th>
              <th>Methodology</th>
              <th>Main Focus</th>
              <th>Year Published</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.title}</td>
                <td>{row.methodology}</td>
                <td>{row.focus}</td>
                <td>{row.year}</td>
                <td>{row.link}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiteratureReview;
