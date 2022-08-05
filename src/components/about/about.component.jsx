import React from "react";
import SectionContainer from "../section-container/section-container.component";

import "./about.styles.scss";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-header">what i deliver</h2>
          <div className="about-description">
            Responsible for delivering mobile first applications using HTML5,
            CSS3/Sass, JavaScript, and React. I develop and maintain user
            interface and implement designs from concept through deployment. I
            administer features that improve site interaction across multiple
            browsers.
          </div>
        </div>
        <div className="bottom-banner" id="projects">
          portfolio
        </div>
      </div>
    </section>
  );
};

export default About;
