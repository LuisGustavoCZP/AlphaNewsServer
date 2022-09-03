const express = require("express");
const database = require("./database");
const routes = require("./routes");
const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);
app.use(express.static("../AlphaNews"));

app.listen(port, () => {console.log(`Servidor criado: http://localhost:${port}`)})