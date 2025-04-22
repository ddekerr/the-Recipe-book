"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let RecipesService = class RecipesService {
    configService;
    BASE_URL;
    constructor(configService) {
        this.configService = configService;
        this.BASE_URL = this.configService.get('BASE_URL');
    }
    async getRecipes(query) {
        const url = this.generateUrl(query);
        try {
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getRecipeById(id) {
        const url = `${this.BASE_URL}lookup.php?i=${id}`;
        try {
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    generateUrl(query) {
        const filterPath = 'filter.php?';
        if (query?.ingredient) {
            return `${this.BASE_URL + filterPath}i=${query.ingredient}`;
        }
        if (query?.country) {
            return `${this.BASE_URL + filterPath}a=${query.country}`;
        }
        if (query?.category) {
            return `${this.BASE_URL + filterPath}c=${query.category}`;
        }
        return `${this.BASE_URL}search.php?s=`;
    }
};
exports.RecipesService = RecipesService;
exports.RecipesService = RecipesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RecipesService);
//# sourceMappingURL=recipes.service.js.map