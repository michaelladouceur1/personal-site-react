const express = require("express");
const apiRouter = express.Router();

const getGithubData = require("../utils");

apiRouter.get("/github", async (req, res, next) => {
  try {
    const data = await getGithubData();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log("ERROR: ", error);
    res.send(error);
  }
});

module.exports = apiRouter;
