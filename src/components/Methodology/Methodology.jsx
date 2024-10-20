import React from "react";
import "./Methodology.css";
import meth1 from "../../assets/meth1.jpg";

function Methodology() {
  return (
    <div className="pad-div pad-div-meth ">
      <div className="hr-div">
        <hr /> <hr />
      </div>
      <div className="methodology-container" id="methodology">
        <h2 className="section-title-methodology">Our Methodology</h2>
        <div className="methodology-content">
          <div className="methodology-row">
            <img
              src={meth1}
              alt="Methodology_Image"
              className="methodology-image"
            />
            <p>
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>L</span>
              <b>iterature Search and Selection:</b> We performed an extensive
              search of scientific databases such as Google Scholar, IEEE
              Xplore, and ACM Digital Library, focusing on papers published from
              2021 onwards. We prioritized papers that specifically addressed
              multimodal learning in web environments, focusing on areas such as
              content understanding, cross-modal search, and the integration of
              text, images, and videos. Our selection criteria ensured that the
              reviewed papers were relevant, recent, and addressed key
              challenges in the field.
            </p>
          </div>
          <div className="methodology-row">
            <img
              src={meth1}
              alt="Methodology_Image"
              className="methodology-image"
            />
            <p>
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>C</span>
              <b>lassification of Papers:</b> Each selected paper was classified
              based on the problem domain, solution approach, and methodology.
              This allowed us to identify patterns and trends in the surveyed
              literature. For example, we categorized papers based on the type
              of multimodal data they addressed (e.g., text, image, video) and
              the solutions they proposed, such as transformer-based models,
              pretraining, or alignment techniques. The methodology used in each
              paper was also classified, covering theoretical surveys, empirical
              studies, benchmarking, and system implementation.
            </p>
          </div>
          <div className="methodology-row">
            <img
              src={meth1}
              alt="Methodology_Image"
              className="methodology-image"
            />
            <p>
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>R</span>
              <b>axonomy Development:</b> We used classification to develop a
              multi-dimensional taxonomy that helped organize the literature
              surveyed. This enabled us to group papers into distinct groups
              while viewing the relationships between problem domains and their
              respective solutions and methodologies. The taxonomy helped us in
              the identification of the gaps in the ongoing research landscape,
              as we have highlighted in the discussion related to unresolved
              challenges and future research directions.
            </p>
          </div>
          <div className="methodology-row">
            <img
              src={meth1}
              alt="Methodology_Image"
              className="methodology-image"
            />
            <p>
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>W</span>
              <b>ebsite Development:</b> In parallel with the survey, but
              interlinked with it, we designed and developed a responsive SPA
              website to host our findings. The website will consist of an
              introductory home section with an overview of the topic of the
              survey, sections summarizing the main findings, and an interactive
              taxonomy of the surveyed literature. The website was built using
              state-of-the-art web technologies, so a seamless user experience
              is guaranteed, regardless of the device. Visual aids and
              interactives were added to visualize and synthesize the data
              clearly.
            </p>
          </div>
          <div className="methodology-row">
            <img
              src={meth1}
              alt="Methodology_Image"
              className="methodology-image"
            />
            <p>
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>S</span>
              <b>ynthesis:</b> Analysis was performed after the classification
              of the papers to synthesize their findings. For example, the
              effectiveness of various different multimodal learning methods is
              compared, while the major trends in the field are
              outlined-increasing use of transformer-based models and multimodal
              pretraining, for example. Open challenges also gave light to
              limitations of existing approaches analyzed in specific areas that
              need further investigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;
