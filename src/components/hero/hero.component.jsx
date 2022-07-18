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
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* <h1>This is the Hero Component</h1> */}
    </section>
  );
};

export default Hero;
