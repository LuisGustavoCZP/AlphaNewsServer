const { add } = require("../database");

function addnews (req, res) 
{
    const data = req.body;
    //console.log(data);
    if(!data) 
    {
        res.status(400).json({messages:[{news:"Noticia inexistente!"}]});
        return;
    } 
    
    const validationErros = `${newsValidation(data)}`.split('|');
    console.log(validationErros);
    const errors = {};
    validationErros.forEach((error => 
    {
        if(error) 
        {
            const [field, content] = error.split(":");
            if(!errors[field]) errors[field] = [content];
            else errors[field].push(content);
        }
    }))

    if(Object.keys(errors).length > 0) 
    {
        res.status(400).json({messages:errors});
        return;
    }

    add(data);
    res.json({message:"Deu certo!"});
}

module.exports = addnews;