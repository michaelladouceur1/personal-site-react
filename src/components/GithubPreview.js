import React from "react";
import { useState } from "react";
import { FiMinimize } from "react-icons/fi";

import "./css/GithubPreview.scss";

export const DAYS_ON_PREVIEW = 70;

function GithubPreview(props) {
  const { githubData } = props;

  const [previewExpanded, setPreviewExpanded] = useState(false);

  return (
    <div
      className={`github-preview ${previewExpanded ? "expanded" : "collapsed"}`}
      id="github-preview"
    >
      {previewExpanded ? (
        <div className="github-preview-content">
          <button
            className="close-btn"
            onClick={() => setPreviewExpanded(false)}
          >
            <FiMinimize />
          </button>
          <div className="github-grid">
            {Object.keys(githubData).length > 0 ? (
              githubData.grid.reverse().map((cell, idx) => {
                const check = Object.values(cell.data).filter(
                  (el) => el.length > 0
                );
                if (check.length === 0) {
                  return (
                    <div key={idx} className="cell empty" id={cell.date}></div>
                  );
                } else {
                  return (
                    <div key={idx} className="cell filled" id={cell.date}></div>
                  );
                }
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <a href="#github-preview" onClick={() => setPreviewExpanded(true)}>
          What's Michael working on?
        </a>
      )}
    </div>
  );
}

export default GithubPreview;
