const fs = require("fs");
const path = __dirname+"/dados.json";
const superPath = __dirname.replace(/(\\\w*){2}$/gi, '');
console.log(superPath);

function loadData ()
{
    console.log(path);
    if(!fs.existsSync(path))
    {
        fs.writeFileSync(path, "[]");
    }
    const fileText = fs.readFileSync(path);
    newsList = JSON.parse(fileText);
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
    fs.writeFile(path, JSON.stringify(newsList, null, 2), () => {});
}

loadData ();

module.exports = {list, add};

