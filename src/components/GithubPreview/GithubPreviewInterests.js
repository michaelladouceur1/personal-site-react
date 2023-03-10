import React from "react";
import { AiFillStar } from "react-icons/ai";

function GithubPreviewInterests(props) {
  const { githubData } = props;

  return (
    <div className="github-preview-details-interests">
      {githubData.starredRepositories.nodes.map((repo, idx) => {
        return (
          <div className="repo">
            <div className="repo-main">
              <div className="repo-col-1">
                <h3>
                  <a href={repo.url} target="_blank">
                    {repo.name}
                  </a>
                </h3>
                {repo.description ? <p>{repo.description}</p> : <></>}
              </div>
              <div className="repo-col-2">
                <span>
                  <AiFillStar />
                  <h5>{repo.stargazerCount}</h5>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GithubPreviewInterests;
