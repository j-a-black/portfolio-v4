import React from "react";
import ProjectsList from "../projects-list/projects-list.component";

import SectionContainer from "../section-container/section-container.component";

import "./projects.styles.scss";

const Projects = () => {
  return (
    <>
      <SectionContainer header="projects" idSelector="projects">
        <ProjectsList />
      </SectionContainer>
    </>
  );
};

export default Projects;
