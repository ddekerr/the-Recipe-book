export const getIngredients = (recipe: Record<string, any>): string[] => {
  return Object.entries(recipe)
    .filter(([key, value]) => key.includes("Ingredient") && value && value.trim() !== "")
    .map(([_, value]) => value.trim());
};
