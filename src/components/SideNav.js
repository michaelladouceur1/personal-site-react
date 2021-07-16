import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { WiDaySunny } from "react-icons/wi";

import "./css/SideNav.scss";

function SideNav(props) {
  const [progress, setProgress] = useState(0);

  window.onscroll = () => {
    setProgress(scrollProgress());
  };

  function scrollProgress() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = Math.floor((winScroll / height) * 100);
    return scrolled;
  }

  return (
    <div className="sidenav">
      <div className="sn-controls">
        <a href="#profile">Profile</a>
        <a href="#education">Education</a>
        <a href="#career">Career</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="sn-contact">
        <a href="https://www.linkedin.com/in/mpladouceur/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/michaelladouceur1" target="_blank">
          <AiFillGithub />
        </a>
        <a href="mailto: michaelladouceur1@gmail.com" target="_blank">
          <AiOutlineMail />
        </a>
      </div>
      {/* <button>
        <WiDaySunny />
      </button> */}
    </div>
  );
}

export default SideNav;
