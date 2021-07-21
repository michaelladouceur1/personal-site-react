import React from "react";

import "./css/GithubPreview.scss";

export const DAYS_ON_PREVIEW = 70;

function GithubPreview(props) {
  const { githubData } = props;
  console.log("INSIDE PREVIEW: ", githubData);

  return (
    <div className="github-preview">
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
  );
}

export default GithubPreview;
