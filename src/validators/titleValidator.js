function titleValidation (text)
{
    if(!text) return "title:Não possui título!";
    if(!text.length > 100) return "title:Título muito longo!";
    return;
}

module.exports = {titleValidation};