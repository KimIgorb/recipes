'use client'
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { deleteFavorites, postFavorites } from "@/services/favorites";
import type { Recipe } from "@/services/definitions";

interface Props {
  recipe: Recipe
  isFavorite: boolean
}

export default function FavoritesBtn({ recipe, isFavorite }: Props) {
  const [favorite, setFavorite] = React.useState(isFavorite);

  async function addToFavorites(recipe: Recipe) {
    if (favorite) {
      await deleteFavorites(recipe.id)
      setFavorite(false)
    } else {
      await postFavorites(recipe)
      setFavorite(true)
    }
  }

  return (
    <button
      onClick={() => addToFavorites(recipe)}
      className="absolute left-3 top-3 text-black hover:text-primary transition-colors duration-300 flex items-center justify-center w-7 h-7 rounded-full bg-white shadow-md"
    >
      {favorite ? (
        <HeartIconSolid width={20} height={20} className="text-primary" />
      ) : (
        <HeartIcon width={20} height={20} />
      )}
    </button>
  )
}
