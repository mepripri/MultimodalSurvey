import React, { useState } from "react";
import "./Taxonomy.css";

function Taxonomy() {
  const [searchTerm, setSearchTerm] = useState("");
  const tableData = [
    {
      citation:
        "Foundations and Trends in Multimodal Machine Learning: Principles, Challenges, and Open Questions (2024)",
      domain: "Multimodal Learning",
      solution: "Representation Learning, Alignment, Reasoning, Generation",
      methodology: "Theoretical Survey & Review",
    },
    {
      citation: "A Survey on Safe Multi-Modal Learning Systems (2024)",
      domain: "Safe Multi-Modal Learning",
      solution: "Taxonomy of Safety Pillars: Robustness, Alignment, Monitoring",
      methodology: "Theoretical Survey and Review",
    },
    {
      citation:
        "Multimodal Pretraining, Adaptation, and Generation for Recommendation: A Survey (2024)",
      domain: "Multimodal Recommendation Systems",
      solution: "Multimodal Pretraining, Adaptation, and Generation",
      methodology: "Theoretical Survey and Review",
    },
    {
      citation:
        "VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks (2024)",
      domain: "Multimodal Agents",
      solution: "Evaluation of Agents on Visual Web Tasks",
      methodology: "Benchmarking",
    },
    {
      citation:
        "Advances of Multimodal Continual Learning: A Comprehensive Survey (2023)",
      domain: "Multimodal Continual Learning",
      solution: "Survey of Multimodal Continual Learning Techniques",
      methodology: "Theoretical Survey",
    },
    {
      citation:
        "A Comprehensive Survey on Multimodal Recommender Systems: Taxonomy, Evaluation, and Future Directions (2023)",
      domain: "Multimodal Recommender Systems",
      solution: "Taxonomy, Evaluation of Multimodal Systems",
      methodology: "Theoretical Survey",
    },
    {
      citation: "Multimodal Learning With Transformers: A Survey (2023)",
      domain: "Multimodal Learning",
      solution: "Transformer-Based Models for Cross-Modal Tasks",
      methodology: "Theoretical Survey",
    },
    {
      citation: "A Survey of Text Classification With Transformers (2023)",
      domain: "Text Classification with Transformers",
      solution: "Transformer-Based Text Classification",
      methodology: "Empirical Study",
    },
    {
      citation:
        "CLIM: A Cross-Lingual Image-Language Model for Vision-and-Language Tasks (2023)",
      domain: "Vision-Language Tasks",
      solution: "Cross-Lingual Image-Language Model",
      methodology: "Empirical Study",
    },
    {
      citation:
        "MultiModal-GPT: A Vision and Language Model for Dialogue with Humans (2023)",
      domain: "Vision-Language Tasks, Human-Computer Interaction",
      solution: "GPT-Based Vision and Language Model",
      methodology: "Empirical Study",
    },
    {
      citation: "Towards General Purpose Vision Systems (2022)",
      domain: "Vision Systems",
      solution: "General-Purpose Vision Systems",
      methodology: "Theoretical Survey",
    },
    {
      citation:
        "WebGPT: Browser-assisted Question-Answering with Human Feedback (2022)",
      domain: "Question-Answering Systems",
      solution: "Browser-Assisted QA with Human Feedback",
      methodology: "Empirical Study",
    },
    {
      citation:
        "Challenges and Opportunities of Multimodal Data in Human Learning (2022)",
      domain: "Multimodal Data in Human Learning",
      solution: "Survey on Multimodal Data Challenges",
      methodology: "Theoretical Survey",
    },
    {
      citation:
        "UIBert: Learning Generic Multimodal Representations for UI Understanding (2022)",
      domain: "Multimodal Representations for UI Understanding",
      solution: "Generic Multimodal Representation Learning for UI",
      methodology: "Empirical Study",
    },
    {
      citation:
        "Cross-modal Ambiguity Learning for Multimodal Fake News Detection (2022)",
      domain: "Fake News Detection",
      solution: "Cross-modal Ambiguity Learning for Fake News Detection",
      methodology: "Empirical Study",
    },
    {
      citation: "Multimodal Learning with Transformers: A Survey (2022)",
      domain: "Multimodal Learning",
      solution: "Transformer-Based Multimodal Learning",
      methodology: "Theoretical Survey",
    },
    {
      citation:
        "Multimodal Few-Shot Learning with Frozen Language Models (2021)",
      domain: "Few-Shot Learning with Frozen Language Models",
      solution: "Frozen Language Models for Multimodal Learning",
      methodology: "Empirical Study",
    },
    {
      citation:
        "Learning Transferable Visual Models from Natural Language Supervision (2021)",
      domain: "Vision-Language Models",
      solution: "Natural Language Supervision",
      methodology: "Empirical Study",
    },
    {
      citation:
        "WebVision Database: Visual Learning and Understanding from Web Data (2021)",
      domain: "Visual Learning from Web Data",
      solution: "Visual Learning from Web Data",
      methodology: "Dataset Benchmarking",
    },
    {
      citation:
        "CLIP-ViL: How Much Can CLIP Benefit Vision-and-Language Tasks? (2021)",
      domain: "Vision-Language Tasks",
      solution: "CLIP-Based Vision-Language Model",
      methodology: "Dataset Benchmarking",
    },
    {
      citation:
        "LXMERT: Learning Cross-Modality Encoder Representations from Transformers (2021)",
      domain: "Cross-Modality Representations",
      solution: "Transformer-Based Cross-Modality Learning",
      methodology: "Empirical Study",
    },
    {
      citation:
        "ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision (2021)",
      domain: "Vision-Language Models",
      solution: "Vision-and-Language Transformer",
      methodology: "Empirical Study",
    },
    {
      citation:
        "UniT: Multimodal Multitask Learning with a Unified Transformer (2021)",
      domain: "Multimodal Multitask Learning",
      solution: "Unified Transformer for Multimodal Learning",
      methodology: "Theoretical Survey",
    },
  ];

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="pad-div pad-div-lit">
      <div className="hr-div">
        <hr /> <hr />
      </div>
      <div id="liter" className="literature-review-container">
        <h2 className="section-title-taxonomy">Taxonomy</h2>
        <div className="search-section">
          <h3 className="search-title">Search a Paper :</h3>
          <input
            type="text"
            placeholder="Type to search paper..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="literature-table-wrapper">
          <table className="literature-table">
            <thead>
              <tr>
                <th>Paper Citation</th>
                <th>Problem Domain</th>
                <th>Solution Approach</th>
                <th>Methodology</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row.citation}</td>
                  <td>{row.domain}</td>
                  <td>{row.solution}</td>
                  <td>{row.methodology}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="4">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Taxonomy;
