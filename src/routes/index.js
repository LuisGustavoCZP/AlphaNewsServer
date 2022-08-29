const {Router} = require("express");
const {add, list} = require("../database");

const route = Router();
route.get("/", (req, res) => 
{
    res.json(list());
});

route.post("/", (req, res) => 
{
    const data = req.body;
    //console.log(data);
    if(!data) 
    {
        res.status(400).json({message:"Noticia inexistente!"});
        return;
    } 
    add(data);
    res.json({message:"Deu certo!"});
});

module.exports = route;