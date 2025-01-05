import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/16/solid";
import FavoritesBtn from "@/UI/favorites-btn";
import type { Recipe } from "@/services/definitions";

interface Props {
  name: string;
  tags: string[];
  rating: number;
  image: string;
  recipe: Recipe;
  isFavorite: boolean;
}


export default function RecipeCard({ name, tags, rating, image, recipe, isFavorite }: Props) {
 
  return (
    <li className="bg-white rounded-xl shadow-lg relative">
      <FavoritesBtn recipe={recipe} isFavorite={isFavorite}/>
      <Link href={`/recipes/${recipe.id}`}>
        <Image src={image} alt={name} width={1000} height={1000} className="rounded-xl max-h-44 object-cover w-full h-auto" priority />
        <div className="px-2 py-3 relative">
          <div className="absolute flex items-center right-px top-[-25px] gap-1 p-2 bg-white rounded-3xl shadow-md">
            <span className="font-semibold text-xs">{rating}</span>
            <StarIcon width={12} height={12} className="text-[#FFC529]" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">{name}</h2>
          </div>
          <div className="space-x-1">
            {tags.map((tag, index) => (
              <span className="text-secondary text-sm" key={tag}>{tag}{index < tags.length - 1 && ","}</span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  )
}
