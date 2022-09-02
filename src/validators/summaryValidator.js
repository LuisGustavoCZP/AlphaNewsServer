function summaryValidation (text)
{
    if(!text) return "summary:Não possui resumo!";
    if(!text.length > 300) return "summary:Resumo muito longo!";
    return;
}

module.exports = {summaryValidation};