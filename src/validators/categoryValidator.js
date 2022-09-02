function categoryValidation (text)
{
    if(!text) return "category:Não possui uma categoria!";
    if(text.length > 50) return "category:Categoria muito longa!";
    return '';
}

module.exports = {categoryValidation};