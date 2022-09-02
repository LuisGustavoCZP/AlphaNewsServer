function sourceValidation (text)
{
    if(!text) return "source:Não possui fonte!";
    if(!text.length > 120) return "source:Fonte muito longa!";
    return;
}

module.exports = {sourceValidation};