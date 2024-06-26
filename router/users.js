const express = require("express");
const path = require("path");

const rootPath = require("../util/path");

const routes = express.Router();

routes.get("/users", (req, res, next) => {
   res.sendFile(path.join(rootPath, "views", "users.html"));
});

module.exports = routes;
