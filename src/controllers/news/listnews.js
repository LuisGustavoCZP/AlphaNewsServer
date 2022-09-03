const { list, add } = require("../database");

function listNews (req, res)
{
    res.json(list());
}

module.exports = listNews;