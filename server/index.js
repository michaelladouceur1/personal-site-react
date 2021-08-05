const express = require("express");
const server = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

server.use(express.json());

server.use("/", express.static(path.join(__dirname, "build")));

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
