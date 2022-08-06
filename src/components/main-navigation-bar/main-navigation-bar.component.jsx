import React from "react";

import "./main-navigation-bar.styles.scss";

const MainNavigationBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo-container">
          home
        </a>
        <nav className="navbar-links-container">
          <a href="#about" className="navbar-link">
            ABOUT
          </a>
          <a
            href="#projects"
            className="
          navbar-link"
          >
            PROJECTS
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MainNavigationBar;
