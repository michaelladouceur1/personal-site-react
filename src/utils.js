import axios from "axios";
import { GITHUB_API_PAT } from "./secret";
import { DAYS_ON_PREVIEW } from "./components/GithubPreview";

const DAYS = DAYS_ON_PREVIEW;
const TODAY = new Date(new Date().toISOString().split("T")[0]);
console.log("DAYS: ", DAYS);

function filterReposByDate(repos, field, gOrL) {
  let check = null;

  return repos.filter((repo) => {
    const fieldDate = new Date(repo[field].split("T")[0]);

    check =
      gOrL === ">"
        ? TODAY - fieldDate > DAYS * 86400000
        : TODAY - fieldDate < DAYS * 86400000;

    if (check) {
      return repo;
    }
  });
}

async function extractRepoData(repos) {
  const fields = Object.keys(repos[0].urls).map((key) => key.split("_")[0]);

  const extractedRepos = repos.map(async (repo) => {
    for (const field of fields) {
      const { url, headers } = repo.urls[`${field}_url`];
      repo[field] = await getData(url, headers);
    }
    return repo;
  });
  return extractedRepos;
}

async function getRepoData(repos, dataUrl) {
  return await Promise.all(
    repos.map((repo) => {
      //   console.log("REPO: ", repo);
      return getData(repo[dataUrl]);
    })
  );
}

function extractPackageJsonUrls(repos) {
  let reposCopy = [...repos];
  console.log("EP REPOS: ", repos);
  const rps = reposCopy.map((repo) => {
    console.log("EP REPO: ", repo);
    console.log("EP CONT: ", repo.commits);
    return repo.contents.map((file) => {
      console.log("EP FILE: ", file);
      return file.name;
    });
  });

  console.log("END REPOS: ", rps);
  //   return content
  //     .map((c) => {
  //       return c
  //         .filter((file) => file.name === "package.json")
  //         .map((file) => file.download_url);
  //     })
  //     .filter((c) => c.length > 0)
  //     .map((url) => url[0]);
}

function extractDependenciesFromPackageJson(packages) {
  let dependencies = [];
  packages.forEach((pkg) => {
    const deps = Object.keys(pkg.dependencies);
    dependencies.push(...deps);
  });
  return dependencies;
}

function mapCommitsToGrid(grid, commits) {}

/*
repo: {
    id: number,
    name: string,
    description: string,
    topics: [],
    created_at: date,
    updated_at: date,
    language: string,
    commits: [], 
    technology: []
}
*/
function initializeGithubDataObject() {
  const obj = {
    grid: [],
    info: {
      recent_repos: [],
      old_repos: [],
      new_technology: [],
    },
  };

  for (let i = 0; i < DAYS; i++) {
    const shifted = new Date(i * 86400000);
    const date = new Date(TODAY - shifted).toDateString();
    obj.grid.push({
      date: date,
      data: {
        projects: [],
        commits: [],
      },
    });
  }
  return obj;
}

async function initializeRepoObjects(repos) {
  return repos.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      language: repo.language,
      technology: [],
      urls: {
        contents_url: {
          url: repo.contents_url,
          headers: "standard",
        },
        commits_url: {
          url: repo.commits_url,
          headers: "standard",
        },
        topics_url: {
          url: `${repo.url}/topics`,
          headers: "preview",
        },
      },
    };
  });
  return repoObjs;
}

export async function getGithubData() {
  try {
    // Get all repos from Github API
    const repos = await getRepos();
    // console.log("Repos: ", repos);

    // Filter repos by how many days to preview on site
    const recentUpdatedRepos = filterReposByDate(repos, "updated_at", "<");
    const oldRepos = filterReposByDate(repos, "updated_at", ">");
    // console.log("RRepos: ", recentUpdatedRepos);
    // console.log("ORepos: ", oldRepos);

    // Set githubData.info.repos objects
    const initializedRecentReposObjs = await initializeRepoObjects(
      recentUpdatedRepos
    );
    const initializedOldReposObjs = await initializeRepoObjects(oldRepos);

    // Extract additional info from API using repo urls
    const recentReposObjs = await Promise.all(
      await extractRepoData(initializedRecentReposObjs)
    );
    const oldReposObjs = await Promise.all(
      await extractRepoData(initializedOldReposObjs)
    );

    console.log("RRO: ", recentReposObjs);

    let githubData = initializeGithubDataObject();
    githubData.info.recent_repos = recentReposObjs;
    githubData.info.old_repos = oldReposObjs;

    let idx = 0;
    for (const cell of githubData.grid) {
      for (const repo of githubData.info.recent_repos) {
        for (const commit of repo.commits) {
          const commitDate = new Date(commit.commit.author.date).toDateString();
          if (cell.date === commitDate) {
            githubData.grid[idx].data.commits.push(commit);
          }
        }
      }
      idx++;
    }

    // githubData.grid.forEach((cell, idx) => {
    //   githubData.info.recent_repos.forEach((repo) => {
    //     repo.commits.forEach((commit) => {
    //       const commitDate = new Date(commit.commit.author.date).toDateString();
    //       if (cell.date === commitDate) {
    //         console.log("TRUE: ", cell.date);
    //         githubData.grid[idx].data.commits.push(commit);
    //       }
    //     });
    //   });
    // });

    // extractPackageJsonUrls(recentReposObjs);

    // const recentPkgUrls = extractPackageJsonUrls(recentContent);
    // const oldPkgUrls = extractPackageJsonUrls(oldContent);
    // console.log("RPkgUrls: ", recentPkgUrls);
    // console.log("OPkgUrls: ", oldPkgUrls);

    // const rPkgs = await Promise.all(recentPkgUrls.map(getData));
    // const oPkgs = await Promise.all(oldPkgUrls.map(getData));
    // console.log("RPkgs: ", rPkgs);
    // console.log("OPkgs: ", oPkgs);

    // const RDependencies = extractDependenciesFromPackageJson(rPkgs);
    // const ODependencies = extractDependenciesFromPackageJson(oPkgs);
    // console.log("RDep: ", RDependencies);
    // console.log("ODep: ", ODependencies);

    // const rDepSet = Array.from(new Set(RDependencies));
    // const oDepSet = Array.from(new Set(ODependencies));

    // console.log("RDepSet: ", rDepSet);
    // console.log("ODepSet: ", oDepSet);

    // const newDeps = rDepSet.filter((dep) => !oDepSet.includes(dep));
    // console.log("New Deps: ", newDeps);

    // githubData.info.new_technology = newDeps;
    console.log("GithubData: ", githubData);

    console.log(
      "Rate Limit: ",
      await getData("https://api.github.com/rate_limit")
    );

    return githubData;
  } catch (error) {
    return error;
  }
}

// Github API

function setHeaders(type) {
  return {
    headers: {
      Authorization: `token ${GITHUB_API_PAT}`,
    },
  };
}

function setPreviewHeaders() {
  return "application/vnd.github.mercy-preview+json";
}

export async function getRepos() {
  try {
    const { data: repos } = await axios.get(
      "https://api.github.com/users/michaelladouceur1/repos",
      setHeaders()
    );
    return repos;
  } catch (error) {
    return error;
  }
}

async function getData(url, headers) {
  url = url.split("{")[0];
  let header = setHeaders();
  if (headers === "preview") {
    header.headers.Accept = setPreviewHeaders();
  }
  try {
    const { data } = await axios.get(url, header);
    return data;
  } catch (error) {
    return error;
  }
}
