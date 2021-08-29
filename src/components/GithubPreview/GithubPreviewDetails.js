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
    "github-preview-repos": <GithubPreviewRepos githubData={githubData} />,
    "github-preview-interests": (
      <GithubPreviewInterests githubData={githubData} />
    ),
  };

  return (
    <div className="github-preview-details">
      <div className="github-preview-details-menu">
        <button
          id="github-preview-overview"
          onClick={(event) => {
            setDisplayedGithubSection(event.target.id);
          }}
        >
          Overview
        </button>
        <button
          id="github-preview-repos"
          onClick={(event) => {
            setDisplayedGithubSection(event.target.id);
          }}
        >
          Repositories
        </button>
        <button
          id="github-preview-interests"
          onClick={(event) => {
            setDisplayedGithubSection(event.target.id);
          }}
        >
          Interests
        </button>
      </div>
      <div className="github-preview-details-content">
        {sectionComponents[displayedGithubSection]}
      </div>
    </div>
  );
}

export default GithubPreviewDetails;
