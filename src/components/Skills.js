import React from "react";

import Section from "./Section";

import "./css/Skills.scss";

function Skills({ skills }) {
  return (
    <Section name="skills">
      <div className="section-header">
        <h1>Skills</h1>
      </div>
      <div className="section-body">
        <div className="skills">
          {skills.map((skill, idx) => {
            return (
              <div key={idx} className="skills-item">
                {skill.element}
                <h3>{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Skills;
