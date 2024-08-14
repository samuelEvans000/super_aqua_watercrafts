import React, { useEffect, useState } from "react";
import "./Johkasou.css";

const Johkasou = () => {
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [text3, setText3] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  const toggleText1 = () => {
    if (isSmallScreen) {
      setText1(!text1);
    }
  };

  const toggleText2 = () => {
    if (isSmallScreen) {
      setText2(!text2);
    }
  };

  const toggleText3 = () => {
    if (isSmallScreen) {
      setText3(!text3);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="johkasou">
      <h1>Johkasou Technology</h1>
      <div className="johkIntro">
        <div className="johkIntro1">
          <div
            onClick={toggleText1}
            className={`johkTitle ${text1 || !isSmallScreen ? "open" : ""}`}
          >
            Domestic Waste Water Treatment System{" "}
            <img src="/assets/downarrow.png" />
          </div>

          {(text1 || !isSmallScreen) && (
            <span className="mobilejohk">
              <h2>Advanced Features and Benefits:</h2>
              <ol>
                <li>Easy to maintain, high-performance treatment system</li>
                <li>Removes nutrients efficiently</li>
                <li>
                  A spacious separation box is given to separate & store the
                  sludge. The sludge can be drawn at the time of maintenance,
                  which is recommended once after 6 months
                </li>
                <li>
                  Available in three different models catering to the varying
                  output requirements
                </li>
                <li> Consumes low energy</li>
                <li> Lesser operating cost</li>
                <li>Highly modular and scalable</li>
                <li>Long plant life and consistently high performance</li>
              </ol>
            </span>
          )}
        </div>
        <div className="johkIntro2">
          <div className="johkTitle">Images of Installation Johkasou-STP</div>
          <img src="/assets/johkIntro.png" />
        </div>
      </div>

      <div className="stp">
        <div
          onClick={toggleText2}
          className={`johkTitlestp ${text2 || !isSmallScreen ? "open" : ""}`}
        >
          Performance of Johkasou STP
          <img src="/assets/downarrow.png" />
        </div>

        {(text2 || !isSmallScreen) && (
          <span className="mobilejohk">
            <p>
              Johkasou is capable of meeting the needs of output qualities
              expected by the government regulatory bodies or as per the
              application requirements.
            </p>
            <img src="/assets/stp.png" />
          </span>
        )}
      </div>

      <div className="treatment">
        {(text3 || !isSmallScreen) && (
          <div className="treatmentImg">
            <img src="/assets/treatment.png" />
          </div>
        )}

        <div className="treatmentText">
          <div
            onClick={toggleText3}
            className={`johkTitle ${text3 || !isSmallScreen ? "open" : ""}`}
          >
            High-Performance Johkasou Technology{" "}
            <img src="/assets/downarrow.png" />
          </div>

          {(text3 || !isSmallScreen) && (
            <span className="mobilejohk">
              <p>
                The process of effective decentralized treatment of water
                through Johkasou (As explained in diagram above):
              </p>
              <p>
                {" "}
                <strong>Chamber 1:</strong> Beginning with the process of
                decantation, where the liquid & solid waste are separated by the
                simple use of gravity Wastewater.
              </p>
              <p>
                <strong>Chamber 2:</strong> Anaerobic media is the place where
                microorganisms decompose organic material contained in the
                domestic wastewater.
              </p>

              <p>
                <strong>Chamber 3:</strong> Moving bed chamber is filled with
                MBBR Media that comes into action by aeration.
              </p>

              <p>
                <strong>Chamber 4:</strong> Sedimentation chamber.
              </p>

              <p>
                <strong>Chamber 5:</strong> Disinfectant is used as a
                sterilization agent to remove pathogenic microorganisms from the
                treated water before it is discharged into the environment or
                next level of treatment based on the usage requirements.
              </p>
            </span>
          )}
        </div>
      </div>

      {(text3 || !isSmallScreen) && (
        <div className="circulation">
          <p>
            <strong>Re-Circulation system:</strong> This part ensures
            circulation in the sedimentation chamber for the re-treatment of
            water. Since it becomes like an anaerobic chamber, the process of
            denitrification is repeated for the second time in the final
            process.
          </p>
          <img src="/assets/circulation.png" />
        </div>
      )}

      <div className="circulation">
        <div className="johkTitlestp">Features of Johkasou - STP</div>
        <img src="/assets/stpf.png" />
      </div>
    </div>
  );
};

export default Johkasou;
