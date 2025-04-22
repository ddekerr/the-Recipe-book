import { BASE_URL } from "@/shared/data";
import { Recipies } from "@/shared/types";

export const fetchRecipeById = async (id: string): Promise<Recipies> => {
  const response = await fetch(`${BASE_URL}recipes/${id}`);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};
