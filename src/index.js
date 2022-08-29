const express = require("express");
const router = require('./routes');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(router);
app.use("/", express.static("./AlphaNews"));

app.listen(port, () => {console.log(`Servidor iniciado http://localhost:${port}`)});