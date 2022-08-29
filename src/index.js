const express = require("express");
const database = require("./database");
const route = require("./routes");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/news", route);
app.use(express.static("../AlphaNews"));

app.listen(port, () => {console.log(`Servidor criado: http://localhost:${port}`)})