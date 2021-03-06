import React from "react";
import { useState } from "react";
import {
  AiFillGithub,
  AiOutlineExpand,
  AiFillStar,
  AiFillYoutube,
} from "react-icons/ai";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import "./css/PortfolioCard.scss";

function PortfolioCard(props) {
  const { project, setModalVisible, setFeatureApp } = props;

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div
      className="portfolio-item"
      onMouseEnter={() => setMenuVisible(true)}
      onMouseLeave={() => setMenuVisible(false)}
    >
      {project.pinned ? (
        <div className="featured">
          <AiFillStar />
        </div>
      ) : (
        <></>
      )}
      <img
        className={menuVisible ? "blur" : ""}
        src={`./assets/${project.image}`}
      />
      <div
        className={`${menuVisible ? "visible" : "hidden"} portfolio-item-info`}
      >
        <div className="portfolio-item-info-body">
          <h1>{project.title}</h1>
          <div className="description">
            <p>{project.description}</p>
          </div>
          <div className="technology">
            <h3>Technologies:</h3>
            <p>{project.technology.join(", ")}</p>
          </div>
        </div>
        <div className="portfolio-item-info-menu">
          {project.youtube_url && project.youtube_url.length > 0 ? (
            <>
              <a
                href={project.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </>
          ) : (
            <></>
          )}
          {project.github_url && project.github_url.length > 0 ? (
            <>
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </>
          ) : (
            <></>
          )}
          {project.deployed_url && project.deployed_url.length > 0 ? (
            <>
              <button
                onClick={() => {
                  setFeatureApp(project);
                  setModalVisible(true);
                }}
              >
                <AiOutlineExpand />
              </button>
              <a
                href={project.deployed_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
