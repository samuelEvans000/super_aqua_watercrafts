import React from "react";
import "./Footer.css";

const Footer = () => {



  return (
    <div className="footerColor">
      <div className="footer">
        <div className="footer1">
          <img src="/assets/footerLogo.png" />
          <h2>Super Aqua Watercrafts Pvt. Ltd.</h2>
          <h4>Address</h4>
          <p>
            Address 605, Suncity Business Tower, Golf Course Road,<br></br>{" "}
            Sector 54 Gurgaon, Haryana, 122002
          </p>
        </div>
        <div className="footer2">
          <div>
            <p>Contact Person</p>
            <h3>Mr. Nikhil Goyal, CEO </h3>
          </div>

          <div>
            <p>Contact Number</p>
            <h3> +91-96098 84100 </h3>
          </div>

          <div>
            <p>Email </p>
            <h3>sawatercrafts@gmail.com</h3>
          </div>
        </div>
      </div>
        <p className="copyright">Copyright © 2024 Super Aqua Watercrafts Pvt. Ltd. All rights reserved.<br></br> Version: 2.0.2</p>
    </div>
  );
};

export default Footer;
