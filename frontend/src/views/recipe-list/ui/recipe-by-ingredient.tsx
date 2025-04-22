import { fetchAllRecipes, fetchRecipesByIngredient } from "../actions/get-recipes-list";
import { RecipeList } from "./recipe-list";

type RecipeParams = { params: { ingredient: string } };

export const RecipesByIngredient = async ({ params }: RecipeParams) => {
  const recipes = await fetchRecipesByIngredient(params.ingredient);

  return <RecipeList recipes={recipes} />;
};
