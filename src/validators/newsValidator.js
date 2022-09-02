const { titleValidation } = require("./titleValidator");

function newsValidation (data)
{
    const validationErros = `${titleValidation(data.titulo)}|`;
    return validationErros;
}

module.exports = {newsValidation};