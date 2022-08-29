const fs = require("fs");
const path = __dirname+"/dados.json";

function loadData ()
{
    console.log(path);
    if(!fs.existsSync(path))
    {
        fs.writeFileSync(path, "[]");
    }
    const fileText = fs.readFileSync(path);
    newsList = JSON.parse(fileText);
    console.log(newsList);
}


let newsList = [];

function list ()
{
    return newsList;
}

function add (data)
{
    data.id = newsList.length;
    newsList.push(data);
    fs.writeFile(path, JSON.stringify(newsList), () => 
    {

    });
}

loadData ();

module.exports = {list, add};

