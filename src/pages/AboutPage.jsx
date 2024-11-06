import React from "react";
import aboutData from "../assets/aboutData.json";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="AbHading">
          <h1>About Us</h1>
        </div>
        <div className="under-line"></div>
        <div className="about-content-container">
          <div className="about-image">
            <img src={`/images/${aboutData.aboutImg}`} alt="AboutImg" />
          </div>
          <div className="about-text">
            <h3>
              {aboutData.para1}
            </h3>
            <p>
              {aboutData.para2}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
