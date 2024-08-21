import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <div className="connect">
      <div className="connectImg">
        <img src="/assets/letsImg.png" />
      </div>
      <div className="connectText">
        <h2>Super Aqua Watercrafts Pvt. Ltd.</h2>
        <p>Address</p>
        <h3>
          605, Suncity Business Tower, Golf Course Road, Sector 54 Gurgaon,
          Haryana, 122002
        </h3>
        
        <p>Contact Person</p>
        <h3>Mr. Hariphool Singh</h3>
    
        <p>Contact Number</p>
        <h3>+91-8826218571</h3>
        
        <p>Email</p>
        <a href="mailto:sawatercrafts@gmail.com">
        <h3>sawatercrafts@gmail.com</h3>
        </a>
      </div>
    </div>
  );
};

export default Connect;
