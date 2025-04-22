import { BASE_URL } from "@/shared/data";
import { Recipies } from "@/shared/types";

export const fetchAllRecipes = async (): Promise<Recipies> => {
  const response = await fetch(`${BASE_URL}recipes/`);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

export const fetchRecipesByIngredient = async (ingredient: string): Promise<Recipies> => {
  const params = new URLSearchParams();
  params.append("ingredient", ingredient);

  const response = await fetch(`${BASE_URL}recipes?${params.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

export const fetchRecipesByCountry = async (country: string): Promise<Recipies> => {
  const params = new URLSearchParams();
  params.append("country", country);

  console.log(params.toString())

  const response = await fetch(`${BASE_URL}recipes?${params.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

export const fetchRecipesByCategory = async (category: string): Promise<Recipies> => {
  const params = new URLSearchParams();
  params.append("category", category);

  const response = await fetch(`${BASE_URL}recipes?${params.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};
