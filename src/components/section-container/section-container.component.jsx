import React, { Children } from "react";

import "./section-container.styles.scss";

const SectionContainer = ({ header, children, idSelector }) => {
  return (
    <section id={idSelector}>
      <div className="container">
        <h2 className="section-header">{header}</h2>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
