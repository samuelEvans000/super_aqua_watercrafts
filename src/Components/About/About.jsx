import React from 'react'
import '../Home/Home.css'

const About = () => {
  return (
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
  )
}

export default About
