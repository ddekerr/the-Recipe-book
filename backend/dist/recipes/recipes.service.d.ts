import { ConfigService } from '@nestjs/config';
import { QueryType } from './types';
export declare class RecipesService {
    private configService;
    private BASE_URL;
    constructor(configService: ConfigService);
    getRecipes(query?: QueryType): Promise<any>;
    getRecipeById(id: string): Promise<any>;
    private generateUrl;
}
