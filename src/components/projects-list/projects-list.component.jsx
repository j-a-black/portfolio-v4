import React from "react";

import ButtonLink from "../../components/button-link/button-link.component";

import "./projects-list.styles.scss";

const ProjectsList = ({
  projectNumber,
  imgSrc,
  title,
  description,
  projectLink,
  gitHubLink,
}) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>{projectNumber}</span>
        </div>
        <div className="card-description">
          <h3 className="description-title">{title}</h3>
          <div className="description-content">
            <span>{description}</span>
          </div>
          <ButtonLink
            buttonText="View Project"
            href={projectLink}
            styleClassName="btn"
            target="_blank"
            rel="noopener noreferrer"
          />
          <br />
          <ButtonLink
            buttonText="View Code"
            href={gitHubLink}
            styleClassName="btn"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
