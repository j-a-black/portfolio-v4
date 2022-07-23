import React, { useState, useEffect } from "react";

import ButtonLink from "../button-link/button-link.component";

import heroImage from "../../assets/images/hero2.webp";

import "./hero.styles.scss";

const Hero = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const imageUrl =
  //   windowWidth <= 1663
  //     ? heroImg1663
  //     : windowWidth <= 2585
  //     ? heroImg2585
  //     : windowWidth <= 2798
  //     ? heroImg2798
  //     : windowWidth <= 3251
  //     ? heroImg3251
  //     : windowWidth <= 3692
  //     ? heroImg3692
  //     : heroImg3840;

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  return (
    <section>
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
              href="#"
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

// linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
