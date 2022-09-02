const { newsValidation } = require("./newsValidator");
const { titleValidation } = require("./titleValidator");
const { categoryValidation } = require("./categoryValidator");
const { summaryValidation } = require("./summaryValidator");
const { sourceValidation } = require("./sourceValidator");
const { imageValidation } = require("./imageValidator");
const { linkValidation } = require("./linkValidator");


module.exports = {newsValidation, titleValidation, categoryValidation, summaryValidation, sourceValidation, imageValidation, linkValidation};