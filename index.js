const express = require("express");
const server = express();
const path = require("path");

const apiRouter = require("./server/api");
const PORT = process.env.PORT || 8080;

server.use(express.json());

// server.use("/", express.static(path.join(__dirname, "build")));
server.use("/api", apiRouter);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
