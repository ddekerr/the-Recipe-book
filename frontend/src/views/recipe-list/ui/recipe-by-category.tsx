import { fetchRecipesByCategory } from "../actions/get-recipes-list";
import { RecipeList } from "./recipe-list";

type RecipeParams = { params: { category: string } };

export const RecipesByCategory = async ({ params }: RecipeParams) => {
  const recipes = await fetchRecipesByCategory(params.category);

  return <RecipeList recipes={recipes} />;
};
