import React from "react";
import "./AboutUs.css";
import Vineetha from "../../assets/Vineetha.jpg";
import Sameera from "../../assets/Sameera.jpg";
import Priyal from "../../assets/Priyal.jpg";
import Harshil from "../../assets/Harshil.jpg";
import Ravali from "../../assets/Ravali.jpeg";

function AboutUs() {
  const members = [
    { name: "Priyal Patel", image: Priyal, desc: "Website Developer" },
    { name: "Harshil Sharma", image: Harshil, desc: "Website Developer" },
    { name: "Sameera Munjampally", image: Sameera, desc: "Content Validator" },
    {
      name: "Ravali Maddela",
      image: Ravali,
      desc: "Reporting and Delivery Lead",
    },
    {
      name: "Vineetha Ravulapalli",
      image: Vineetha,
      desc: "Reporting and Delivery Lead",
    },
  ];

  return (
    <div className="pad-div">
      <div className="hr-div">
        <hr /> <hr />
      </div>
      <div className="about-us-container" id="about-us">
        <h2 className="section-title-about">About Us</h2>
        <div className="team-container">
          {members.map((member, index) => (
            <div key={index} className="team-member">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image"
                    />
                  </div>
                  <div className="flip-card-back">
                    <p>{member.desc}</p>
                  </div>
                </div>
              </div>
              <p className="member-name">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
