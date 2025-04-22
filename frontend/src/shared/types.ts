export type Recipe = {
    idMeal: string;
    strMealThumb: string;
    strMeal: string;
    strArea: string;
    strCategory: string;
    strInstructions: string;
    [key: string]: string;
  };
  
  export type Recipies = {
    meals: Recipe[];
  };
  