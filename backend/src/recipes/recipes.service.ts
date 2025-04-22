import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueryType } from './types';
import axios from 'axios';

@Injectable()
export class RecipesService {
  private BASE_URL: string;

  constructor(private configService: ConfigService) {
    this.BASE_URL = this.configService.get<string>('BASE_URL')!;
  }

  public async getRecipes(query?: QueryType) {
    const url = this.generateUrl(query);

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getRecipeById(id: string) {
    const url = `${this.BASE_URL}lookup.php?i=${id}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  private generateUrl(query?: QueryType): string {
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
}
