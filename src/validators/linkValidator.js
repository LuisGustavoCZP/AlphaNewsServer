function linkValidation (text)
{
    if(!text) return "link:Não possui link!";
    if(!text.length > 255) return "link:Endereço do link muito longo!";
    return;
}

module.exports = {linkValidation};