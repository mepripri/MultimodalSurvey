import React from "react";
import "./ProbStmt.css";

function ProbStmt() {
  return (
    <div className="probstmt">
      <div className="circle">
        <p>Problem Statement</p>
      </div>
      <p className="circle-p">
        Multimodal machine learning, integrating text, images, audio, and video,
        is essential for improving web technologies like recommendation systems,
        human-computer interaction, and vision-language models. However,
        significant challenges remain unresolved, including cross-modal
        alignment, where systems struggle to synchronize different data types
        effectively. Scalability and computational efficiency, especially with
        transformer models, pose difficulties in real-world applications. Safety
        and robustness are critical in high-stakes environments, while continual
        learning and privacy issues affect system adaptability and user
        personalization. Additionally, there is a lack of effective{" "}
        <b>evaluation frameworks</b> for testing these systems in realistic,
        complex environments.
      </p>
    </div>
  );
}

export default ProbStmt;
