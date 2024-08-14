import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [openBoxes, setOpenBoxes] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  const togglePara = (index) => {
    if (isSmallScreen) {
      setOpenBoxes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
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

  const boxData = [
    {
      img: "/assets/c1.png",
      title: "Change Today for a Sustainable Tomorrow",
      content:
        "Since time immemorial, human civilizations have thrived along the river banks. But focus on economic development has put pressure on our natural environment including, the water resources. Unfortunately, the water bodies today have been converted into dumping areas for human, animal and industrial wastes.",
    },
    {
      img: "/assets/c2.png",
      title: "Water Recycling",
      content:
        "The need of the hour with the ever-increasing population and the given limited water resources, water recycling becomes all the more important and urgent in order to reduce the high-water stress in India. Thereby creating multiple water recycling opportunities that ease the acute pressure on our groundwater, which then can be used for drinking and other imperative usages.",
    },
    {
      img: "/assets/c3.png",
      title: "Japan's Water Story",
      content:
        "Japan is a nation richly endowed with clean water. Despite using the water resources optimally, rapid industrial development over the decades pushed it further to its limits, thereby giving birth to the need to recycle. Through a holistic approach involving law, policies, technology, execution framework and clear priorities, Japan was able to come out of this adversity and make their water and environment beautiful again.",
    },
    {
      img: "/assets/c4.png",
      title: "Water Scenario in India",
      content:
        "India is one of the most blessed countries in the world in terms of natural resources. However, the increasing demand for domestic, industrial and agriculture uses has put a strain on most of the river basins. While India is facing water scarcity, on one hand, it is battling with polluted water resources on the other across the country.",
    },
  ];

  return (
    <div className="home">
      <div className="intro">
        <div className="introText">
          <h1>Revolutionizing Water Management with Innovative Solutions</h1>
          <p>Super Aqua Watercrafts Pvt Ltd</p>
          <Link to="/letsConnect">
            <button>TALK TO US</button>
          </Link>
        </div>
        <div className="introImg">
          <img src="/assets/introImg.png" />
        </div>
      </div>

      <div className="aboutColor">
        <div className="about">
          <div className="aboutText1">
            <h1>About us</h1>
            <h2>We are the water warriors.</h2>
            <p>
              SA Watercrafts is a brand introduced under Super Aqua Watercrafts
              Pvt. Ltd. based out of Gurgaon, Haryana. SA Watercrafts aims at
              driving its business towards protection of nature and making it a
              better world to live in for the present and future generations. It
              has been a matter of concern that water is a diminishing commodity
              and the sooner we address the problems of its availability, the
              better it is. We at SA Watercrafts, wish to inform you that we
              have been making inroads towards treatment of waste water which
              could be a great way to increase the efficiency in water use. For
              this purpose, we have tied up with the world's largest
              decentralized STP plants manufacturing company from Japan and hope
              to service our market with their products.
            </p>
          </div>
          <div className="aboutText2">
            <img src="/assets/about.png" />
            <p>
              We have recently been empaneled by the ministry of Jal Shakti of
              GOI for Jal Jeevan and Swachh Bharat Mission, we are also the only
              STP product in India to carry CII Green Pro certificate and also
              been recognized by FICCI as the most innovative water technology
              in 2020.
              <br></br>Our STP is based on Johkasou Technology. Johkasou
              Technology, developed by Govt. Of Japan, is a revolutionary
              concept in decentralized Treatment approach and effectively used
              for waste water treatment.
              <br></br> This has wide applications across India both in an urban
              and rural setup. We also offer the solution on innovative PPP
              models like BOOT/HAM or regular EPC and O&M.
            </p>
          </div>
        </div>
      </div>

      <div className="change">
        <h1>Change to Change</h1>
        <div className="changeBoxes">
          {boxData.map((box, index) => (
            <div
              key={index}
              className={`changeBox ${
                openBoxes.includes(index) || !isSmallScreen ? "open" : ""
              }`}
              onClick={() => togglePara(index)}
            >
              <div className="cb1">
              <img src={box.img} />
              <p className="changeTitle">{box.title}</p>
              </div>
              {(openBoxes.includes(index) || !isSmallScreen) && (
                <p>{box.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lets">
        <div className="letsImg">
          <img src="/assets/letsImg.png" />
        </div>
        <div className="letsText">
          <h1>Let’s Connect!!</h1>
          <h3>Contact us to know more.</h3>
          <p>
            SA Watercrafts has offices and affiliated companies in major cities
            in India, Japan, Nepal and Bhutan. Through this network of security
            and reliability that spreads across these major countries, we cover
            every detail of our customer's requirements. <br></br>We are looking
            forward to extend our product and services to you, feel free to
            contact us for any queries.
          </p>
          <Link to="/letsConnect">
            <button>TALK TO US</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
