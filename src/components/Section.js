import React from "react";

import "./css/Section.scss";

function Section(props) {
  return (
<<<<<<< HEAD
    <section className="section" id={props.name}>
=======
    <section
      className="section"
      id={props.name}
      // data-aos="fade-up"
      // data-aos-once="true"
    >
>>>>>>> git-project-viewer
      <div className="content">{props.children}</div>
    </section>
  );
}

export default Section;
