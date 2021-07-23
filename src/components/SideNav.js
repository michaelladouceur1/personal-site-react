import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { WiDaySunny } from "react-icons/wi";
import { CSSTransition } from "react-transition-group";

import "./css/SideNav.scss";

function SideNav(props) {
  const [progress, setProgress] = useState(0);
  const [contactDisplay, setContactDisplay] = useState("Contact");
  const [holdCD, setHoldCD] = useState("");
  const [displayShown, setDisplayShown] = useState(true);

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
        <a href="#portfolio">Portfolio</a>
        <a href="#skills">Skills</a>
        <a href="#career">Career</a>
        <a href="#education">Education</a>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="sn-contact">
        <a
          href="https://www.linkedin.com/in/mpladouceur/"
          target="_blank"
          onMouseEnter={() => {
            setDisplayShown(false);
            setHoldCD("LinkedIn");
          }}
          onMouseLeave={() => {
            setDisplayShown(false);
            setHoldCD("Contact");
          }}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/michaelladouceur1"
          target="_blank"
          onMouseEnter={() => {
            setDisplayShown(false);
            setHoldCD("Github");
          }}
          onMouseLeave={() => {
            setDisplayShown(false);
            setHoldCD("Contact");
          }}
        >
          <AiFillGithub />
        </a>
        <a
          href="mailto: michaelladouceur1@gmail.com"
          target="_blank"
          onMouseEnter={() => {
            setDisplayShown(false);
            setHoldCD("Email");
          }}
          onMouseLeave={() => {
            setDisplayShown(false);
            setHoldCD("Contact");
          }}
        >
          <AiOutlineMail />
        </a>
      </div>
      <CSSTransition
        in={displayShown}
        timeout={300}
        classNames="contact"
        mountOnEnter
        onExited={() => {
          setContactDisplay(holdCD);
          setDisplayShown(true);
        }}
      >
        <h3 id="contact-display">{contactDisplay}</h3>
      </CSSTransition>
    </div>
  );
}

export default SideNav;
