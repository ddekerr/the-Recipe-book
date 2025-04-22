import { RecipesService } from './recipes.service';
import { QueryType } from './types';
export declare class RecipesController {
    private readonly resipesService;
    constructor(resipesService: RecipesService);
    getRecipesList(query: QueryType): Promise<any>;
    getRecipeById(id: string): Promise<any>;
}
