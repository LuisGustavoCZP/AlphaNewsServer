const { titleValidation, categoryValidation, summaryValidation, sourceValidation, imageValidation, linkValidation } = require("./");

function newsValidation (data)
{
    return `${titleValidation(data.titulo)}|${categoryValidation(data.categoria)}|${summaryValidation(data.resumo)}|${sourceValidation(data.fonte)}|${imageValidation(data.imagem)}|${linkValidation(data.link)}`;
}

module.exports = {newsValidation};