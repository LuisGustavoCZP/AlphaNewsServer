const { categoryValidation } = require("./categoryValidator");
const { imageValidation } = require("./imageValidator");
const { linkValidation } = require("./linkValidator");
const { sourceValidation } = require("./sourceValidator");
const { summaryValidation } = require("./summaryValidator");
const { titleValidation } = require("./titleValidator");

function newsValidation (data)
{
    return `${titleValidation(data.titulo)}|${categoryValidation(data.categoria)}|${summaryValidation(data.resumo)}|${sourceValidation(data.fonte)}|${imageValidation(data.imagem)}|${linkValidation(data.link)}`;
}

module.exports = {newsValidation};