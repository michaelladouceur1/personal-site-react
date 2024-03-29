const axios = require("axios");

// const GITHUB_PAT = require("../secret");
const GITHUB_PAT = process.env.GITHUB_PAT || require("../secret");

const GITHUB_API_URL = "https://api.github.com/graphql";

function setHeaders() {
  return {
    headers: {
      Authorization: `bearer ${GITHUB_PAT}`,
      Accept: "application/vnd.github.hawkgirl-preview+json",
    },
  };
}

async function getGithubData() {
  var timestamp = new Date("08/07/2021").toISOString();
  var today = new Date().toISOString();
  console.log("getGithubData()");

  try {
    const {
      data: { data },
    } = await axios.post(
      GITHUB_API_URL,
      {
        query: `
            query {
                viewer {
                    followers(last: 10) {
                        totalCount
                        nodes {
                            name
                            login
                        }
                    }
                    organizations(last: 5) {
                        nodes {
                            name
                        }
                    }
                    projects(last: 5) {
                        nodes {
                            name
                        }
                    }
                    starredRepositories(first: 10, orderBy: {direction: DESC, field: STARRED_AT}) {
                        nodes {
                            name
                            description
                            url
                            stargazerCount
                            primaryLanguage {
                                name
                            }
                            labels {
                                nodes {
                                    name
                                    description
                                }
                            }
                        }
                    }
                    repositories(first: 10, orderBy: {direction: DESC, field: UPDATED_AT}) {
                            nodes {
                                name
                                description
                                url
                                createdAt
                                updatedAt
                                primaryLanguage {
                                    name
                                }
                                languages(first: 10) {
                                    nodes {
                                        name
                                    }
                                }
                                owner {
                                    login
                                }
                                dependencyGraphManifests {
                                    nodes {
                                        dependenciesCount
                                        dependencies {
                                            nodes {
                                                packageLabel
                                            }
                                        }
                                    }
                                }
                            }
                        
                    }
                    contributionsCollection {
                        contributionCalendar {
                            colors
                            totalContributions
                            months {
                                name
                            }
                            weeks {
                                contributionDays {
                                    date
                                    color 
                                    contributionCount
                                    contributionLevel
                                }
                            }
                        }
                    }
                }
            }
            `,
      },
      setHeaders()
    );
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = getGithubData;
