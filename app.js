const express = require("express");
const path = require("path");
const app = express();

const homeRoutes = require("./router/home");
const usersRoutes = require("./router/users");

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(usersRoutes);

app.listen(3000);
