"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RecipeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    images: { type: String, required: true },
});
var Recipe = mongoose_1.default.model("Recipe", RecipeSchema);
exports.default = Recipe;
