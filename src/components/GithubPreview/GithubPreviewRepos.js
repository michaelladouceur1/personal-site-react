import React from "react";

const today = new Date();

function GithubPreviewRepos(props) {
  const { githubData } = props;

  function createdUpdatedDate(date, type) {
    const updatedCreate = new Date(date);
    let diff = (today.getTime() - updatedCreate.getTime()) / (1000 * 3600 * 24);
    if (diff < 1) {
      return `${type} ${Math.round(diff * 24)} hours ago`;
    } else if (diff < 30) {
      return `${type} ${Math.round(diff)} days ago`;
    } else {
      return `${type} on ${date.split("T")[0]}`;
    }
  }

  return (
    <div className="github-preview-details-repos">
      {githubData.repositories.nodes.map((repo, idx) => {
        return (
          <div key={idx} className="repos-row">
            <div className="repos-row-td">
              <h3>
                <a href={repo.url} target="_blank">
                  {repo.name}
                </a>
              </h3>
              {repo.description ? <p>{repo.description}</p> : <></>}
            </div>
            <div className="repos-row-cul">
              <p>{createdUpdatedDate(repo.createdAt, "Created")}</p>
              <p>{createdUpdatedDate(repo.updatedAt, "Updated")}</p>
              {repo.languages.nodes.length > 0 ? (
                repo.languages.nodes.map((lang) => {
                  return <p>{lang.name}</p>;
                })
              ) : (
                <></>
              )}
            </div>
            <div className="repos-row-down">Open</div>
          </div>
        );
      })}
    </div>
  );
}

export default GithubPreviewRepos;
