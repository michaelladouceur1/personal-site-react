import React from "react";

import "./css/Section.scss";

function Section(props) {
  return (
    <section
      className="section"
      id={props.name}
      // data-aos="fade-up"
      // data-aos-once="true"
    >
      <div className="content">{props.children}</div>
    </section>
  );
}

export default Section;
