// HomeSection.js
import React, { useState } from "react";
import "./Accordions.css";

function AccordionItem({ title, content, isOpen, toggle }) {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggle}>
        <span>{title}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function HomeSection() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const sections = [
    {
      title: "🚧 Major Challenges",
      content: (
        <ul>
          <li>
            Handling the integration of multimodal data (text, images, audio).
          </li>
          <li>
            Ensuring robustness, alignment, and monitoring in multimodal
            systems.
          </li>
          <li>
            Evaluating the scalability and safety of multimodal learning models.
          </li>
        </ul>
      ),
    },
    {
      title: "🚀 Latest Developments",
      content: (
        <ul>
          <li>
            Growth in multimodal transformers for tasks such as
            vision-and-language learning.
          </li>
          <li>
            Application of multimodal learning in human-computer interaction and
            UI understanding.
          </li>
          <li>
            Advances in multimodal pretraining, generation, and adaptation for
            recommendation systems.
          </li>
        </ul>
      ),
    },
    {
      title: "🔮 Future Directions",
      content: (
        <ul>
          <li>
            Developing safe, robust, and scalable multimodal systems for
            real-world applications.
          </li>
          <li>
            Improving the alignment and reasoning capabilities of multimodal AI
            systems.
          </li>
          <li>
            Exploring cross-modal learning to handle ambiguous or sparse data
            scenarios.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="home-section">
      <h1 className="title">Challenges and Future Works</h1>
      <p className="subtitle">
        <em>"Exploring Synergy Across Modalities for Intelligent Systems"</em>
      </p>
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          content={section.content}
          isOpen={openAccordion === index}
          toggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}

export default HomeSection;
