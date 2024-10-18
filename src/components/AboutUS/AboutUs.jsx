import React from "react";
import "./AboutUs.css";
import img01 from "../../assets/img01.jpg"; // Ensure img01.jpg is in the right folder

function AboutUs() {
  const members = [
    { name: "Team Member 1", image: img01 },
    { name: "Team Member 2", image: img01 },
    { name: "Team Member 3", image: img01 },
    { name: "Team Member 4", image: img01 },
    { name: "Team Member 5", image: img01 }
  ];

  return (
    <div className="about-us-container" id="about-us">
      <h2 className="section-title">About Us</h2>
      <div className="team-container">
        {members.map((member, index) => (
          <div key={index} className="team-member">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="flip-card-back">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <p className="member-name">{member.name}</p> {/* Name below the tile */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
