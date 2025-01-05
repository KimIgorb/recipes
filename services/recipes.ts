import { primaryAxios } from "./instance";
import type { Recipe } from "./definitions";

interface RecipesResponse {
  recipes: Recipe[];
}

export async function getRecipes(): Promise<RecipesResponse["recipes"]> {
  const { data } = await primaryAxios.get<RecipesResponse>(`recipes?limit=0`);
  return data.recipes;
}

export async function getRecipe(id:number):Promise<Recipe> {
  const { data } = await primaryAxios.get<Recipe>(`recipes/${id}`)
  return data
}

export async function searchRecipes(value:string):Promise<RecipesResponse["recipes"]> {
  const { data } = await primaryAxios.get<RecipesResponse>(`recipes/search?q=${value}`);

  return data.recipes;
}
