const {Router} = require("express");
const {list, add} = require("../controllers");

const route = Router();
route.get("/", list);
route.post("/", add);



module.exports = route;