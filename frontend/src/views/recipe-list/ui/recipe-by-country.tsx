import { fetchRecipesByCountry } from "../actions/get-recipes-list";
import { RecipeList } from "./recipe-list";

type RecipeParams = { params: { country: string } };

export const RecipesByCountry = async ({ params }: RecipeParams) => {
  const recipes = await fetchRecipesByCountry(params.country);
  console.log(params.country);

  return <RecipeList recipes={recipes} />;
};
