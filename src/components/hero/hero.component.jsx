import React, { useState, useEffect } from "react";

import "./hero.styles.scss";

import heroImg280 from "../../assets/images/hero_ll2qqb_c_scale,w_280.webp";
import heroImg1663 from "../../assets/images/hero_ll2qqb_c_scale,w_1663.webp";
import heroImg2585 from "../../assets/images/hero_ll2qqb_c_scale,w_2585.webp";
import heroImg2798 from "../../assets/images/hero_ll2qqb_c_scale,w_2798.webp";
import heroImg3251 from "../../assets/images/hero_ll2qqb_c_scale,w_3251.webp";
import heroImg3692 from "../../assets/images/hero_ll2qqb_c_scale,w_3692.webp";
import heroImg3840 from "../../assets/images/hero_ll2qqb_c_scale,w_3840.webp";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageUrl =
    windowWidth <= 280
      ? heroImg280
      : windowWidth <= 1663
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${imageUrl})`,
        }}
      >
        <div className="hero-text-primary">
          <h1>
            <span className="header-main top">Jason Black </span>
            <span className="header-main bottom">Front-End Web Developer</span>
          </h1>
        </div>

        <p className="callout-box">
          I make responsive websites using HTML, CSS, JavaScript, and React
        </p>
      </div>
    </section>
  );
};

export default Hero;
