import React from "react";
import { useState, useEffect } from "react";
import { FiMinimize } from "react-icons/fi";

import GithubPreviewGrid from "./GithubPreviewGrid";
import GithubPreviewDetails from "./GithubPreviewDetails";

import "../css/GithubPreview.scss";

export const WEEKS_ON_PREVIEW = 12;

function GithubPreview(props) {
  const { githubData } = props;

  const [displayedWeeks, setDisplayedWeeks] = useState([]);
  const [previewExpanded, setPreviewExpanded] = useState(false);

  useEffect(() => {
    if (Object.keys(githubData).length > 0) {
      const weeks =
        githubData.contributionsCollection.contributionCalendar.weeks;
      setDisplayedWeeks(
        weeks.slice(weeks.length - WEEKS_ON_PREVIEW, weeks.length)
      );
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
          <GithubPreviewGrid displayedWeeks={displayedWeeks} />
          <GithubPreviewDetails githubData={githubData} />
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
