import React from "react";
import { useState } from "react";

import GithubPreviewOverview from "./GithubPreviewOverview";
import GithubPreviewRepos from "./GithubPreviewRepos";
import GithubPreviewInterests from "./GithubPreviewInterests";

function GithubPreviewDetails(props) {
  const { githubData } = props;

  const [displayedGithubSection, setDisplayedGithubSection] = useState(
    "github-preview-overview"
  );

  const sectionComponents = {
    "github-preview-overview": (
      <GithubPreviewOverview githubData={githubData} />
    ),
    "github-preview-repositories": (
      <GithubPreviewRepos githubData={githubData} />
    ),
    "github-preview-interests": (
      <GithubPreviewInterests githubData={githubData} />
    ),
  };

  return (
    <div className="github-preview-details">
      <div className="github-preview-details-menu">
        {Object.keys(sectionComponents).map((key) => {
          const keyArr = key.split("-");
          const keyDisplay = keyArr.slice(keyArr.length - 1)[0].toUpperCase();
          return (
            <button
              id={key}
              className={displayedGithubSection === key ? "active" : ""}
              onClick={(event) => {
                setDisplayedGithubSection(event.target.id);
              }}
            >
              {keyDisplay}
            </button>
          );
        })}
      </div>
      <div className="github-preview-details-content">
        {sectionComponents[displayedGithubSection]}
      </div>
    </div>
  );
}

export default GithubPreviewDetails;
