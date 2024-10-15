import React from "react";
import "./methodology.css";
import meth1 from "../../assets/meth1.jpg"; // Ensure meth1.jpg is in the right folder

function Methodology() {
  return (
    <div className="methodology-container" id="methodology"> {/* Change the id here */}
      <h2 className="section-title">Our Methodology</h2>
      <div className="methodology-content">
        <div className="methodology-row">
          <img src={meth1} alt="Methodology Image" className="methodology-image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
        </div>
        <div className="methodology-row">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
          <img src={meth1} alt="Methodology Image" className="methodology-image" />
        </div>
        <div className="methodology-row">
          <img src={meth1} alt="Methodology Image" className="methodology-image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Methodology;
