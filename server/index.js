const express = require("express");
const server = express();
const path = require("path");

const apiRouter = require("./api");
const PORT = process.env.PORT || 4000;

server.use(express.json());

server.use("/", express.static(path.join(__dirname, "build")));
server.use("/api", apiRouter);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
