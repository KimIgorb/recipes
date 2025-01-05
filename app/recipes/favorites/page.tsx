import FavoriteCard from "@/components/favorite-card"
import {FavoriteCardSkeleton} from "@/components/skeleton"
import { getFavorites } from "@/services/favorites"
import { Suspense } from "react"

export default async function Page() {

  const favoritesData = await getFavorites()

  return (
    <div className="pt-4 lg:pl-11 w-full h-[92vh] overflow-y-scroll">
      <h1 className="font-semibold text-3xl sm:text-4xl mb-4">Favorites</h1>

      {favoritesData.length === 0 &&
        <div className="h-4/5 flex items-center justify-center">
          <p className="text-3xl text-primary font-bold">You have no favorites yet</p>
        </div>
      }
      <Suspense fallback={<FavoriteCardSkeleton />}>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {favoritesData.map(fav => (
            <FavoriteCard
              key={fav.id}
              name={fav.name}
              image={fav.image}
              id={fav.id}
            />
          ))}
        </ul>
      </Suspense>
    </div>
  )
}
