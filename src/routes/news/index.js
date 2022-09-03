const { Router } = require("express");
const { newsController } = require("../../controllers");

const route = Router();
route.get("/", newsController.list);
route.post("/", newsController.add);

module.exports = route;