import React from "react";

import ShoppeImage from "../../assets/images/shoppe.webp";

import ButtonLink from "../../components/button-link/button-link.component";

import "./projects-list.styles.scss";

const ProjectsList = () => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={ShoppeImage} alt="" />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>01</span>
        </div>
        <div className="card-description">
          <h3 className="description-title">Shopping Cart</h3>
          <div className="description-content">
            <span>
              This application takes a single ingredient provided by the user
              and finds recipes that include the specified ingredient. A split
              screen layout is used to dynamically render recipe results and
              specific information such as ingredients, cooking instructions,
              and a link to a video with additional guidance.
            </span>
          </div>
          <ButtonLink buttonText="View Project" styleClassName="btn" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
