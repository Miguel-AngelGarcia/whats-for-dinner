"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RecipeModel = /** @class */ (function () {
    function RecipeModel(id, title, website, url, category, description, img) {
        this.id = id;
        this.title = title;
        this.website = website;
        this.url = url;
        this.category = category;
        this.description = description;
        this.img = img;
    }
    return RecipeModel;
}());
exports.default = RecipeModel;
