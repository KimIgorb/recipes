import type { Recipe } from "@/services/definitions";
import RecipeCard from "./recipe-card";

interface Props {
  recipes: Recipe[];
  favorites: { id: number, name: string, image: string }[];
}

export default function RecipesList({ recipes, favorites }: Props) {

  const favoritesIds = favorites.map((fav: { id: number }) => fav.id)

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[92vh] overflow-y-scroll">
      {recipes.map((recipe) => (
        <RecipeCard
          recipe={recipe}
          key={recipe.id}
          name={recipe.name}
          tags={recipe.tags}
          rating={recipe.rating}
          image={recipe.image}
          isFavorite={favoritesIds.includes(recipe.id)}
        />
      ))}
    </ul>
  )
}
