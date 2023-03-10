import React from "react";

import GithubPreviewCell from "./GithubPreviewCell";

function GithubPreviewGrid(props) {
  const { displayedWeeks } = props;

  return displayedWeeks.length > 0 ? (
    <div className="github-grid">
      {displayedWeeks.map((week) => {
        return week.contributionDays.map((day, idx) => {
          return <GithubPreviewCell key={idx} day={day} />;
        });
      })}
    </div>
  ) : (
    <></>
  );
}

export default GithubPreviewGrid;
