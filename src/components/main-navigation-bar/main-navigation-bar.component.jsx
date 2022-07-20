import React, { useState } from "react";

import "./main-navigation-bar.styles.scss";

const MainNavigationBar = () => {
  const [active, setActive] = useState("");

  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo-container"></a>
        <nav className="navbar-links-container">
          <a href="#" className="navbar-link">
            HOME
          </a>
          <a href="#" className="navbar-link">
            PROJECTS
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MainNavigationBar;
