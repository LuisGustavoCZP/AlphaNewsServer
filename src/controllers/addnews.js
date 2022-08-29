const { add } = require("../database");

function addnews (req, res) 
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
}

module.exports = addnews;