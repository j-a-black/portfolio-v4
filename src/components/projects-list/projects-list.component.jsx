import React, { useState, useEffect } from "react";

import ButtonLink from "../../components/button-link/button-link.component";

import "./projects-list.styles.scss";

const ProjectsList = ({
  projectNumber,
  color,
  imgSrc,
  title,
  description,
  projectLink,
  gitHubLink,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const displayBorderBottom = windowWidth >= 1024 ? true : false;

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
    <div className="project-card">
      <div className="card-image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-content">
        <div
          className="card-meta"
          style={{
            borderBottom: displayBorderBottom
              ? `2px solid ${color}`
              : "2px solid white",
          }}
          // {displayBorderBottom ? (style={{ borderBottom: `2px solid ${color}` }}) : null}
        >
          <span style={{ color: `${color}` }}>{projectNumber}</span>
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
