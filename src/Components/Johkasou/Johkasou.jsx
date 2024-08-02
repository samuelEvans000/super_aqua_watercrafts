import React from "react";
import "./Johkasou.css";

const Johkasou = () => {
  return (
    <div className="johkasou">
      <h1>Johkasou Technology</h1>
      <div className="johkIntro">
        <div className="johkIntro1">
          <div className="johkTitle">Domestic Waste Water Treatment System</div>
          <h2>Advanced Features and Benefits:</h2>

          <ol>
            <li>Easy to maintain, high-performance treatment system</li>
            <li>Removes nutrients efficiently</li>
            <li>
              A spacious separation box is given to separate & store the sludge.
              The sludge can be drawn at the time of maintenance, which is
              recommended once after 6 months
            </li>
            <li>
              Available in three different models catering to the varying output
              requirements
            </li>
            <li> Consumes low energy</li>
            <li> Lesser operating cost</li>
            <li>Highly modular and scalable</li>
            <li>Long plant life and consistently high performance</li>
          </ol>
        </div>
        <div className="johkIntro2">
          <div className="johkTitle">Images of Installation Johkasou-STP</div>
          <img src="/assets/johkIntro.png" />
        </div>
      </div>

      <div className="stp">
        <div className="johkTitlestp">Performance of Johkasou STP</div>
        <p>
          Johkasou is capable of meeting the needs of output qualities expected
          by the government regulatory bodies or as per the application
          requirements.
        </p>
        <img src="/assets/stp.png" />
      </div>

      <div className="treatment">
        <div className="treatmentImg">
          <img src="/assets/treatment.png" />
        </div>

        <div className="treatmentText">
          <div className="johkTitle">High-Performance Johkasou Technology</div>
          <p>
            The process of effective decentralized treatment of water through
            Johkasou (As explained in diagram above):
          </p>
          <p>
            {" "}
            <strong>Chamber 1:</strong> Beginning with the process of
            decantation, where the liquid & solid waste are separated by the
            simple use of gravity Wastewater.
          </p>
          <p>
            <strong>Chamber 2:</strong> Anaerobic media is the place where
            microorganisms decompose organic material contained in the domestic
            wastewater.
          </p>

          <p><strong>Chamber 3:</strong> Moving bed chamber is filled with MBBR Media that comes into action by aeration.</p>
       
       <p><strong>Chamber 4:</strong> Sedimentation chamber.</p>

       <p><strong>Chamber 5:</strong> Disinfectant is used as a sterilization agent to remove pathogenic microorganisms from the treated water before it is discharged into the environment or next level of treatment based on the usage requirements.</p>
        </div>
      </div>

      <div className="circulation">
        <p><strong>Re-Circulation system:</strong>  This part ensures circulation in the sedimentation chamber for the re-treatment of water. Since it becomes like an anaerobic chamber, the process of denitrification is repeated for the second time in the final process.</p>
      <img src="/assets/circulation.png" />

      <div className="johkTitlestp">Features of Johkasou - STP</div>
      <img src="/assets/stpf.png" />
      </div>

      
    </div>
  );
};

export default Johkasou;
