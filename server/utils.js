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
                    repositories(last: 20) {
                        edges {
                            node {
                                name
                                description
                                createdAt
                                updatedAt
                                primaryLanguage {
                                    name
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
