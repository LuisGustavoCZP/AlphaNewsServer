const { Router } = require("express");
const database = require("../data");

const router = Router();

router.post ('/news', (req, res) => 
{
    const data = req.body;
    if(data == null) 
    {
        res.status(400).json({message:"notícia vazia!"});
        return;
    }
    
    const {titulo, resumo, link, categoria, fonte, imagem} = data;
    if(!titulo || !resumo || !link || !categoria || !fonte || !imagem) 
    {
        res.status(400).json({message:"notícia incompleta!"});
        return;
    }
    database.addNews(req.body);
});

router.get ('/news', (req, res) => 
{
    res.json(database.allNews());
});

module.exports = router;