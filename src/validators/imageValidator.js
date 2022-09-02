function imageValidation (text)
{
    if(!text) return "image:Não possui endereço da imagem!";
    if(!text.length > 255) return "image:Endereço da imagem muito longo!";
    return;
}

module.exports = {imageValidation};