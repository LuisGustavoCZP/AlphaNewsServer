function titleValidation (title)
{
    if(!title) return "title:Não possui título!";
    if(!title.length > 100) return "title:Título muito longo!";
    return;
}

module.exports = {titleValidation};