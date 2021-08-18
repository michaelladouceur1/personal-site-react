import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/graphql";

export async function getGithubData() {
  var timestamp = new Date("08/07/2021").toISOString();
  var today = new Date().toISOString();

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
                    starredRepositories(last: 10) {
                        nodes {
                            name
                        }
                    }
                    repositories(last: 100) {
                        edges {
                            node {
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
                    }
                    contributionsCollection {
                        contributionCalendar {
                            colors
                            totalContributions
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
      {
        headers: {
          Authorization: "bearer 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",
          Accept: "application/vnd.github.hawkgirl-preview+json",
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}
