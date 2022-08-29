const fs = require("fs");

let newsList = [];

function loadFile ()
{
    const fileText = fs.readFileSync(__dirname+"/noticias.json");
    newsList = JSON.parse(fileText);
}

function saveFile ()
{
    fs.writeFileSync("./noticias.json", JSON.stringify(newsList));
}

loadFile ();

function allNews()
{
    return newsList;
}

function addNews(data)
{
    data.id = newsList.length;
    newsList.push(data);
    saveFile ();
}

function getNews(id)
{
    if(newsList.length <= id) return null;
    return newsList[id];
}

function editNews(id, data)
{
    if(!getNews(id)) 
    {
        return false;
    }

    newsList[id] = data;
    return true;
}

function deleteNews(id)
{
    if(!getNews(id)) 
    {
        return false;
    }
    newsList[id] = null;
    return true;
}

module.exports = {
    allNews,
    addNews,
    getNews,
    editNews,
    deleteNews
}