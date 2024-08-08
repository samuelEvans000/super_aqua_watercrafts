import React, { useState } from "react";
import "./Recycling.css";

const Recycling = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <div className="recycling">
      <h1>Water Reycling</h1>
      <div className="rec">
        <div className="recText">
          <div className="recDrop">The Need of the Hour.</div>
          <h2>India's Approach to Water Recycling</h2>
          <p>
            Although the Swachh Bharat Mission and other Initiatives have played
            a vital role in addressing the Issue of sanitation coverage and
            awareness creation. We are yet to find an effective solution to
            recycle and clean our natural water resources. <br></br>
            India so far has been focused on creating large city-level
            Infrastructures for sewage treatment but It has Its own Limitations
            when It comes to large scale project planning and the final
            implementation procedures. Since the water recycling system Is being
            constructed for one of the most populated countries in the world,
            huge financial budgets are required for the construction and
            maintenance of the same.
          </p>

          <div className="recMobile">
            <div className="recDrop"> Johkasou Waste Water Treatment </div>
            <p>
              {" "}
              Japan has developed Johkasou- A decentralized treatment approach
              and used this concept effectively for wastewater systems, these
              systems have been in use for over 4 decades In Japan and have
              shown great results in relieving the pressure on water resources.
            </p>

            <div className="recDrop"> Johkasou Waste Water Treatment </div>
            <p>Johkasou-STP Is the most suitable concept for Indian demand &
              circumstances for various reasons than any regular wastewater
              treatment system lacks. Johkasou Is highly modular and scalable in
              nature, It can be easily installed block by block or building by
              building and It operates at a small CAPEX and a very low
              operational cost.</p>
          </div>

          <button
            className={`recDrop1 ${isOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <span className={`span ${isOpen ? "open" : ""}`}>
              Johkasou Waste Water Treatment{" "}
            </span>{" "}
            <img
              className={`arrow ${isOpen ? "open" : ""}`}
              src="/assets/downarrow.png"
            />
          </button>
          {isOpen && (
            <div className="dropdown-content">
              Japan has developed Johkasou- A decentralized treatment approach
              and used this concept effectively for wastewater systems, these
              systems have been in use for over 4 decades In Japan and have
              shown great results in relieving the pressure on water resources.
            </div>
          )}

          <button
            onClick={toggleDropdown1}
            className={`recDrop2 ${isOpen1 ? "open" : ""}`}
          >
            <span className={`span ${isOpen1 ? "open" : ""}`}>
              Core Concept of Johkasou Is - “Treat at the Site, Reuse at the
              Site”
            </span>{" "}
            <img
              className={`arrow ${isOpen1 ? "open" : ""}`}
              src="/assets/downarrow.png"
            />
          </button>
          {isOpen1 && (
            <div className="dropdown-content">
              Johkasou-STP Is the most suitable concept for Indian demand &
              circumstances for various reasons than any regular wastewater
              treatment system lacks. Johkasou Is highly modular and scalable in
              nature, It can be easily installed block by block or building by
              building and It operates at a small CAPEX and a very low
              operational cost.
            </div>
          )}
        </div>
        <div className="recImg">
          <img src="/assets/recycling.png" />
        </div>
      </div>
    </div>
  );
};

export default Recycling;
