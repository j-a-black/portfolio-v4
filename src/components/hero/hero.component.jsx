import React from "react";
import ButtonLink from "../button-link/button-link.component";
import heroImage from "../../assets/images/hero2.webp";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-content">
          <h1 className="hero-header">
            <span className="header-main">Jason Black </span>
            <span className="header-sub">Front-End Web Developer</span>
          </h1>
          <div className="callout-box">
            <span>
              I make responsive websites using HTML, CSS, JavaScript, and React
            </span>
            <ButtonLink
              href="#projects"
              buttonText="View Projects"
              styleClassName="btn position-active"
            ></ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
