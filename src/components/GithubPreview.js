import React from "react";
import { useState, useEffect } from "react";
import { FiMinimize } from "react-icons/fi";

import "./css/GithubPreview.scss";

export const DAYS_ON_PREVIEW = 70;

function GithubPreview(props) {
  const { githubData } = props;
  // console.log(githubData);

  const [displayedWeeks, setDisplayedWeeks] = useState([]);
  const [previewExpanded, setPreviewExpanded] = useState(false);
  // console.log("displayedWeeks", displayedWeeks);

  useEffect(() => {
    if (Object.keys(githubData).length > 0) {
      const weeks =
        githubData.contributionsCollection.contributionCalendar.weeks;
      console.log(weeks.slice(weeks.length - 12, weeks.length));
      setDisplayedWeeks(weeks.slice(weeks.length - 12, weeks.length));
    }
  }, [githubData]);

  return (
    <div
      className={`github-preview ${previewExpanded ? "expanded" : "collapsed"}`}
      id="github-preview"
    >
      {previewExpanded ? (
        <div className="github-preview-content">
          <a
            href="#profile"
            className="close-btn"
            onClick={() => setPreviewExpanded(false)}
          >
            <FiMinimize />
          </a>
          <div className="github-grid">
            {displayedWeeks.length > 0 ? (
              displayedWeeks.map((week) => {
                return week.contributionDays.map((day, idx) => {
                  const color = day.color === "#ebedf0" ? "#363636" : day.color;
                  return (
                    <div
                      key={idx}
                      className="cell"
                      id={day.date}
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                });
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <button onClick={() => setPreviewExpanded(true)}>
          What's Michael working on?
        </button>
      )}
    </div>
  );
}

export default GithubPreview;
