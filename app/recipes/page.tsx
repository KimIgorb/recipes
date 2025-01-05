import { CardSkeleton } from "@/components/skeleton";
import { getFavorites } from "@/services/favorites";
import { getRecipes, searchRecipes } from "@/services/recipes"
import SearchInput from "@/UI/search-input";
import { lazy, Suspense } from "react";
const RecipesList = lazy(() => import('@/components/recipes-list'));

type SearchParams = Promise<{ [key: string]: string }>;

export default async function Page(props: { searchParams: SearchParams }) {

  const searchParams = await props.searchParams;
  const search = searchParams.search

  const [recipes, favoritesData] = await Promise.all([
    search ? searchRecipes(search) : getRecipes(),
    getFavorites(),
  ])

  return (
    <div className="pt-4 w-full lg:pl-11">
      <div className="mb-4 flex items-end justify-between">
        <h1 className="font-semibold text-3xl sm:text-4xl">Recipes</h1>
        <SearchInput />
      </div>
      {recipes.length === 0 &&
        <div className="h-4/5 flex items-center justify-center">
          <p className="text-3xl text-primary font-bold">Sorry, we couldn&apos;t find any recipes matching your search.</p>
        </div>
      }
      <Suspense fallback={<CardSkeleton />}>
        <RecipesList recipes={recipes} favorites={favoritesData} />
      </Suspense>
    </div>
  )
}
