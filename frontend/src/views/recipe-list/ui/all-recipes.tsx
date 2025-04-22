import { fetchAllRecipes } from "../actions/get-recipes-list";
import { RecipeList } from "./recipe-list";

export const AllRecipes = async () => {
  const recipes = await fetchAllRecipes();

  return <RecipeList recipes={recipes} />;
};
