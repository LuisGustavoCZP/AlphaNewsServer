const { add } = require("../database");
const { newsValidation } = require("../validators");

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
    
    const errorTypes = {};
    validationErros.forEach((error => 
    {
        if(error) 
        {
            const [field, content] = error.split(":");
            if(!errorTypes[field]) errorTypes[field] = [content];
            else errorTypes[field].push(content);
        }
    }))

    const errors = Object.entries(errorTypes);

    if(errors.length > 0) 
    {
        res.status(400).json({messages:errors});
        return;
    }

    add(data);
    res.json({message:null});
}

module.exports = addnews;