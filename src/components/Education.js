import React from "react";

import Section from "./Section";

function Education(props) {
  return (
    <Section name="education">
      <div className="section-header">
        <h1>Education</h1>
      </div>
      <div className="list-item">
        <div className="list-item-header">
          <h2>Full Stack Academy</h2>
          <h4>Software Developer Certificate</h4>
          <h5>2021</h5>
        </div>
        <div className="list-item-content">
          <p>
            I had been contemplating a change of careers for several years, and
            decided to take the plunge with the Full Stack Academy/UIC software
            development bootcamp. Topics covered during my coursework included:
            Javascript, React, JQuery, HTML, CSS, Node, SQL, and others.
          </p>
        </div>
      </div>
      <div className="list-item">
        <div className="list-item-header">
          <h2>University of Illinois at Chicago</h2>
          <h4>B.S., Mechanical Engineering</h4>
          <h5>2013-2015</h5>
        </div>
        <div className="list-item-content">
          <p>
            University of Illinois at Chicago (UIC) is where I finished my
            undergraduate education, and where my passion for learning ignited.
            During my two years at UIC, I covered many interesting and
            informative topics including: fluid mechanics, thermodynamics, heat
            transfer, numerical & computational methods, engineering design, and
            higher-level mathematics. I wrapped up my time at UIC with a 1st
            prize award at the 2015 UIC Engineering Expo for my part on the
            design team of an endoluminal sewing machine.
          </p>
        </div>
      </div>
      <div className="list-item">
        <div className="list-item-header">
          <h2>College of Dupage</h2>
          <h4>General Education</h4>
          <h5>2010-2013</h5>
        </div>
        <div className="list-item-content">
          <p>
            I entered College of Dupage (COD) after high school with no real
            direction. I questioned taking a semester off, but decided to take
            an introductory engineering course as a last ditch effort. The
            material sucked me in, and I remember the day I wanted to get into
            the sciences; The professor wrote a differential equation on the
            board and asked an upper classman a question about it. It was like
            black magic to me, and I wanted to know how it worked.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Education;
