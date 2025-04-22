import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { QueryType } from './types';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly resipesService: RecipesService) {}

  @Get()
  async getRecipesList(@Query() query: QueryType) {
    const { ingredient, country, category } = query;
    const recipes = await this.resipesService.getRecipes({
      ingredient,
      country,
      category,
    });

    return recipes;
  }

  @Get(':id')
  async getRecipeById(@Param('id') id: string) {
    const recipe = await this.resipesService.getRecipeById(id);
    return recipe;
  }
}
