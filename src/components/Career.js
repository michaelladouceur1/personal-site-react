import React from "react";

import Section from "./Section";

function Career(props) {
  return (
    <Section name="career">
      <div className="section-header">
        <h1>Career</h1>
      </div>
      <div className="list-item">
        <div className="list-item-header">
          <h2>Aurora Storage Products, Inc.</h2>
          <h4>Mechanical Design Engineer</h4>
          <h5>December 2017 - May 2021</h5>
        </div>
        <div className="list-item-content">
          <p>
            I was the lead design engineer for all new product development of
            new storage equipment at Aurora Storage Products, Inc (ASP). With
            all of my designs at ASP, I tried to consider manufacturability
            (DFMA), cost reduction, customer satisfaction, and safety of the
            finished products. I also gained hands-on experience prototyping and
            trouble shooting many of my new designs.
          </p>
        </div>
      </div>
      <div className="list-item">
        <div className="list-item-header">
          <h2>Metropolitan Air Technology</h2>
          <h4>Mechanical Design Engineer</h4>
          <h5>May 2016 - June 2017</h5>
        </div>
        <div className="list-item-content">
          <p>
            At Metropolitan Air Technology (MAT), I lead the design process of a
            new fire & smoke damper product line that met UL standards. In
            addition to the design of the products, my responsibilities
            included: manufacturing process layout, manufacturing floor layout
            for overseas facility, custom tooling design, and general on-site
            facility maintenance.
          </p>
        </div>
      </div>
      <div className="list-item">
        <div className="list-item-header">
          <h2>S&C Electric Co.</h2>
          <h4>Design Automation Engineer</h4>
          <h5>June 2015 - May 2016</h5>
        </div>
        <div className="list-item-content">
          <p>
            Integrated design automation software (Rule Stream) with CAD
            software (SolidEdge) using VBA programming language. Purpose of this
            project was to reduce design time needed for engineered-to-order
            quotes and orders.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Career;
