import { secondaryAxios } from "./instance";
import type { Recipe } from "./definitions";

console.log( process.env.NEXT_PUBLIC_API_URL)
export async function postFavorites(recipe: Recipe) {
  await secondaryAxios.post("favorites", recipe);
}

export async function getFavorites():Promise<Recipe[]> {
  const {data} = await secondaryAxios.get<Recipe[]>("favorites");
  return data
}

export async function deleteFavorites(recipeId: number) {
  await secondaryAxios.delete("favorites", { data: { id: recipeId } });
} 