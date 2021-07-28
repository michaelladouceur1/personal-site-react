import {
  DiReact,
  DiCss3,
  DiGitBranch,
  DiPython,
  DiSqllite,
  DiSass,
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5, AiFillApi, AiFillGithub } from "react-icons/ai";
import {
  SiPostgresql,
  SiNodeDotJs,
  SiCplusplus,
  SiHeroku,
  SiJquery,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiTypescript,
  SiD3DotJs,
  SiWebpack,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FcDataEncryption } from "react-icons/fc";

const data = {
  career: [
    {
      company: "Aurora Storage Products, Inc.",
      title: "Mechanical Design Engineer",
      years: "December 2017 - May 2021",
      description: `I was the lead design engineer for all new product development of
      new storage equipment at Aurora Storage Products, Inc (ASP). With
      all of my designs at ASP, I tried to consider manufacturability
      (DFMA), cost reduction, customer satisfaction, and safety of the
      finished products. I also gained hands-on experience prototyping and
      trouble shooting many of my new designs.`,
      location: "Aurora, IL",
    },
    {
      company: "Metropolitan Air Technology",
      title: "Mechanical Design Engineer",
      years: "May 2016 - June 2017",
      description: `At Metropolitan Air Technology (MAT), I lead the design process of a
      new fire & smoke damper product line that met UL standards. In
      addition to the design of the products, my responsibilities
      included: manufacturing process layout, manufacturing floor layout
      for overseas facility, custom tooling design, and general on-site
      facility maintenance.`,
      location: "Chicago, IL",
    },
    {
      company: "S&C Electric Co.",
      title: "Design Automation Engineer",
      years: "June 2015 - May 2016",
      description: `Integrated design automation software (Rule Stream) with CAD
      software (SolidEdge) using VBA programming language. Purpose of this
      project was to reduce design time needed for engineered-to-order
      quotes and orders.`,
      location: "Chicago, IL",
    },
  ],

  education: [
    {
      institution: "Full Stack Academy",
      degree: "Software Developer Certificate",
      years: "2021",
      description: `I had been contemplating a change of careers for several years, and
      decided to take the plunge with the Full Stack Academy/UIC software
      development bootcamp. Topics covered during my coursework included:
      Javascript, React, JQuery, HTML, CSS, Node, SQL, and others.`,
      location: "Online",
    },
    {
      institution: "University of Illinois at Chicago",
      degree: "B.S., Mechanical Engineering",
      years: "2013-2015",
      description: `University of Illinois at Chicago (UIC) is where I finished my
      undergraduate education, and where my passion for learning ignited.
      During my two years at UIC, I covered many interesting and
      informative topics including: fluid mechanics, thermodynamics, heat
      transfer, numerical & computational methods, engineering design, and
      higher-level mathematics. I wrapped up my time at UIC with a 1st
      prize award at the 2015 UIC Engineering Expo for my part on the
      design team of an endoluminal sewing machine.`,
      location: "Chicago, IL",
    },
    {
      institution: "College of Dupage",
      degree: "General Education",
      years: "2010-2013",
      description: `I entered College of Dupage (COD) after high school with no real
      direction. I questioned taking a semester off, but decided to take
      an introductory engineering course as a last ditch effort. The
      material sucked me in, and I remember the day I wanted to get into
      the sciences; The professor wrote a differential equation on the
      board and asked an upper classman a question about it. It was like
      black magic to me, and I wanted to know how it worked.`,
      location: "Glen Ellyn, IL",
    },
  ],

  portfolio: [
    {
      title: "Retro Draw",
      description:
        "A varying-resolution drawing tool with functionality to speed up the drawing time",
      image: "pixel-draw.png",
      deployed_url: "https://musing-lichterman-df9769.netlify.app/",
      github_url: "",
      technology: ["JavaScript", "JQuery", "HTML", "CSS"],
      pinned: false,
    },
    {
      title: "Calculator",
      description: "A simple calculator utilizing object function creation",
      image: "calculator.png",
      deployed_url: "https://distracted-kowalevski-8a2e53.netlify.app/",
      github_url: "",
      technology: ["JavaScript", "JQuery", "HTML", "CSS"],
      pinned: false,
    },
    {
      title: "Arcade",
      description: "A retro-themed arcade app",
      image: "arcade.png",
      deployed_url: "https://angry-wozniak-f00827.netlify.app/",
      github_url: "",
      technology: ["JavaScript", "JQuery", "HTML", "CSS"],
      pinned: true,
    },
    {
      title: "User Hub",
      description:
        "A user hub app utilizing JQuery and async functions for fetching data",
      image: "user-hub.png",
      deployed_url: "https://stupefied-golick-d91c6f.netlify.app/",
      github_url: "",
      technology: ["JavaScript", "JQuery", "Axios", "HTML", "CSS"],
      pinned: false,
    },
    {
      title: "Art Collector",
      description:
        "A art search app utilizing JQuery and async functions for fetching data from Harvard Art API",
      image: "art-collector.png",
      deployed_url: "https://silly-easley-3392c1.netlify.app/",
      github_url: "",
      technology: ["JavaScript", "JQuery", "Axios", "HTML", "CSS"],
      pinned: false,
    },
    {
      title: "User Hub (React)",
      description: "A blog and todo app utilizing react framework",
      image: "user-hub-react.png",
      deployed_url: "https://festive-fermi-6afda0.netlify.app/",
      github_url: "",
      technology: ["JavaScript", "React", "Axios", "HTML", "CSS"],
      pinned: true,
    },
    {
      title: "TicketMain",
      description:
        "An e-commerce site with the purpose of selling tickets to unconventional destinations and events developed by a team of 4 students from the FSA/UIC Bootcamp. A full UI was developed with the ability for a customer to browse products, browse seller pages, persistently update carts, and submit orders. An administrative dashboard was also developed for the purpose of adding and updating products, viewing orders, and viewing user details.",
      image: "ticketmain.png",
      deployed_url: "https://ticketmain.herokuapp.com/",
      github_url: "https://github.com/HeartsFSA/GraceShopper",
      youtube_url:
        "https://www.youtube.com/watch?v=WBS-jkXAgzI&list=PLPLveFltzJ39xrV7e0lizrrzRS5GP2Wmt&index=3",
      technology: [
        "JavaScript",
        "React",
        "Node.js/Express.js",
        "PostgreSQL",
        "SQL",
        "HTML",
        "CSS",
        "BCrypt",
        "MaterialUI",
        "Stripe",
      ],
      pinned: true,
    },
  ],

  skills: [
    {
      name: "JavaScript",
      element: <IoLogoJavascript />,
    },
    {
      name: "React",
      element: <DiReact />,
    },
    {
      name: "Node.js/Express.js",
      element: <SiNodeDotJs />,
    },
    {
      name: "PostgreSQL",
      element: <SiPostgresql />,
    },
    {
      name: "SQL",
      element: <FaDatabase />,
    },
    {
      name: "RestfulAPI",
      element: <AiFillApi />,
    },
    {
      name: "JQuery",
      element: <SiJquery />,
    },
    {
      name: "Git",
      element: <DiGitBranch />,
    },
    {
      name: "Github",
      element: <AiFillGithub />,
    },
    {
      name: "HTML",
      element: <AiFillHtml5 />,
    },
    {
      name: "CSS",
      element: <DiCss3 />,
    },
    {
      name: "Sass",
      element: <DiSass />,
    },
    {
      name: "Python",
      element: <DiPython />,
    },
    {
      name: "SQLlite",
      element: <DiSqllite />,
    },
    {
      name: "C++",
      element: <SiCplusplus />,
    },
    {
      name: "Heroku",
      element: <SiHeroku />,
    },
  ],
};

export default data;
