import React from "react";
import { ImLocation } from "react-icons/im";

import Section from "./Section";

function Education(props) {
  const { education } = props;

  return (
    <Section name="education">
      <div className="section-header">
        <h1>Education</h1>
      </div>
      {education.map((inst, idx) => {
        return (
          <div key={idx} className="list-item">
            <div className="list-item-header">
              <h2>{inst.institution}</h2>
              <h4>{inst.degree}</h4>
              <h5>{inst.years}</h5>
              <h5 className="location">
                <ImLocation />
                {inst.location}
              </h5>
            </div>
            <div className="list-item-content">
              <p>{inst.description}</p>
            </div>
          </div>
        );
      })}
    </Section>
  );
}

export default Education;
