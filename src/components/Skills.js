import React from "react";
import {DiReact, DiCss3, DiGitBranch, DiPython, DiSqllite, DiSass} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5, AiFillApi, AiFillGithub} from 'react-icons/ai'
import {SiPostgresql, SiNodeDotJs, SiCplusplus, SiHeroku, SiGraphql, SiJest, SiMongodb, SiTypescript, SiD3DotJs} from 'react-icons/si'
import {FaDatabase} from 'react-icons/fa'

import Section from "./Section";

import './css/Skills.scss'

const skills = [
  {
    name: 'JavaScript',
    element: <IoLogoJavascript />
  },
  {
    name: 'React',
    element: <DiReact />
  },
  {
    name: 'Node.js/Express.js',
    element: <SiNodeDotJs />
  },
  {
    name: 'PostgreSQL',
    element: <SiPostgresql />
  },
  {
    name: 'SQL',
    element: <FaDatabase />
  },
  {
    name: 'RestfulAPI',
    element: <AiFillApi />
  },
  {
    name: 'Git',
    element: <DiGitBranch />
  },
  {
    name: 'Github',
    element: <AiFillGithub />
  },
  {
    name: 'HTML',
    element: <AiFillHtml5 />
  },
  {
    name: 'CSS',
    element: <DiCss3 />
  },
  {
    name: 'Sass',
    element: <DiSass />
  },
  {
    name: 'Python',
    element: <DiPython />
  },
  {
    name: 'SQLlite',
    element: <DiSqllite />
  },
  {
    name: 'C++',
    element: <SiCplusplus />
  },
  {
    name: 'Heroku',
    element: <SiHeroku />
  },
]

function Skills(props) {
  return (
    <Section name="skills">
      <div className="section-header">
        <h1>Skills</h1>
      </div>
      <div className="section-body">
        <div className='skills'>
          {
            skills.map((skill, idx) => {
              console.log(skill)
              return (
                <div key={idx} className='skills-item'>
                  {skill.element}
                  <h3>{skill.name}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </Section>
  );
}

export default Skills;
