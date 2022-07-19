import React from "react";

import "./main-navigation-bar.styles.scss";

const MainNavigationBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content-container">
        <div className="nav-links">
          <a className="nav-link" href="#">
            ABOUT
          </a>
          <a className="nav-link" href="#">
            <div className="nav-logo">JB</div>
          </a>
          <a className="nav-link" href="#">
            PROJECTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainNavigationBar;
