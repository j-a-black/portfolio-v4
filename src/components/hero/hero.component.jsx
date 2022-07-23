import React, { useState, useEffect } from "react";

import ButtonLink from "../button-link/button-link.component";

import "./hero.styles.scss";

import heroImg1663 from "../../assets/images/hero_ll2qqb_c_scale,w_1663.webp";
import heroImg2585 from "../../assets/images/hero_ll2qqb_c_scale,w_2585.webp";
import heroImg2798 from "../../assets/images/hero_ll2qqb_c_scale,w_2798.webp";
import heroImg3251 from "../../assets/images/hero_ll2qqb_c_scale,w_3251.webp";
import heroImg3692 from "../../assets/images/hero_ll2qqb_c_scale,w_3692.webp";
import heroImg3840 from "../../assets/images/hero_ll2qqb_c_scale,w_3840.webp";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageUrl =
    windowWidth <= 1663
      ? heroImg1663
      : windowWidth <= 2585
      ? heroImg2585
      : windowWidth <= 2798
      ? heroImg2798
      : windowWidth <= 3251
      ? heroImg3251
      : windowWidth <= 3692
      ? heroImg3692
      : heroImg3840;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${imageUrl})`,
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

//
