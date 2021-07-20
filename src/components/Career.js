import React from "react";
import { ImLocation } from "react-icons/im";

import Section from "./Section";

function Career(props) {
  const { career } = props;

  return (
    <Section name="career">
      <div className="section-header">
        <h1>Career</h1>
      </div>
      {career.map((job) => {
        return (
          <>
            <div className="list-item">
              <div className="list-item-header">
                <h2>{job.company}</h2>
                <h4>{job.title}</h4>
                <h5>{job.years}</h5>
                <h5 className="location">
                  <ImLocation />
                  {job.location}
                </h5>
              </div>
              <div className="list-item-content">
                <p>{job.description}</p>
              </div>
            </div>
          </>
        );
      })}
    </Section>
  );
}

export default Career;
