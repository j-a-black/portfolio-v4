import React from "react";

import ShoppeImage from "../../assets/images/shoppe.webp";

import "./projects-list.styles.scss";

const ProjectsList = () => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={ShoppeImage} alt="" />
      </div>
      <div className="card-content">
        <div className="card-meta"></div>
        <div className="card-description">
          <h3 className="description-title">Shopping Card</h3>
          <div className="description-content"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
