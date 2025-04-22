import Image from "next/image";
import Link from "next/link";
import { Recipies } from "@/shared/types";

export const RecipeList = async ({ recipes }: { recipes: Recipies }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between conatiner mx-auto p-3">
      {recipes.meals.map((recipe) => (
        <Link
          href={`/${recipe.idMeal}`}
          key={recipe.idMeal}
          className="flex flex-col items-center hover:scale-105 duration-300 ease-in-out"
        >
          <Image src={recipe.strMealThumb} alt={recipe.strMeal} width={200} height={200} />
          <h3 className="text-2xl">{recipe.strMeal}</h3>
        </Link>
      ))}
    </div>
  );
};
