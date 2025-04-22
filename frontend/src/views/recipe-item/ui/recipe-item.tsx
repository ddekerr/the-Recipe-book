import Link from "next/link";
import { fetchRecipeById } from "../actions/get-recipe";
import Image from "next/image";
import { getIngredients } from "../utils/getIngredients";
import { fetchRecipesByCategory } from "@/views/recipe-list/actions/get-recipes-list";
import { RecipeList } from "@/views/recipe-list";

type RecipeParams = {
  params: { id: string };
};

export const RecipeItem = async ({ params }: RecipeParams) => {
  const recipe = (await fetchRecipeById(params.id)).meals[0];
  const recipesSameCategory = await fetchRecipesByCategory(recipe.strCategory);

  return (
    <main className="conatiner mx-auto p-3">
      <div className="flex gap-8 justify-between">
        <div>
          <Image src={recipe.strMealThumb} alt={recipe.strMeal} width={200} height={200} />
        </div>
        <div className="grow-1 flex flex-col justify-center items-center gap-4">
          <h2 className="text-5xl text-center">{recipe.strMeal}</h2>
          <Link
            href={`./country/${recipe.strArea}`}
            className="text-2xl text-center text-gray-500 underline hover:scale-105 duration-300 ease-in-out cursor-pointer"
          >
            {recipe.strArea}
          </Link>
        </div>
      </div>
      <p className="text-justify mt-4">{recipe.strInstructions}</p>
      <h3 className="mt-4 text-xl">Ingredients:</h3>
      <div className="flex gap-2">
        {getIngredients(recipe).map((i) => (
          <Link href={`ingredient/${i}`} className="text-gray-500 underline">
            {i}
          </Link>
        ))}
      </div>

      <h3 className="mt-4 text-xl">Recipes from {recipe.strCategory} category</h3>
      <RecipeList recipes={recipesSameCategory} />
    </main>
  );
};
