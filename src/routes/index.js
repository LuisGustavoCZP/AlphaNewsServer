const {Router} = require("express");
const newsRoute = require("./news");

const route = Router();
route.use("/news", newsRoute);

module.exports = route;