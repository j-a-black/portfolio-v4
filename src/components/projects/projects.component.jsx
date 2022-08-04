import React from "react";
import ProjectsList from "../projects-list/projects-list.component";

import SectionContainer from "../section-container/section-container.component";
import { data } from "../../data.js";

import "./projects.styles.scss";

const Projects = () => {
  return (
    <>
      <SectionContainer header="projects" idSelector="projects">
        {data.map((item) => {
          return (
            <ProjectsList
              key={item.id}
              projectNumber={item.projectNumber}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              projectLink={item.projectLink}
              gitHubLink={item.gitHubLink}
            />
          );
        })}
      </SectionContainer>
    </>
  );
};

export default Projects;
