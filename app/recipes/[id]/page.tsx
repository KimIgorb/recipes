import { getRecipe } from "@/services/recipes"
import Image from "next/image"

export default async function Page(props: { params: Promise<{ id: string }> }) {

  const { id } = await props.params
  const recipe = await getRecipe(parseInt(id))

  const recipeDetails = [
    { id: 1, value: "Cuisine", data: recipe.cuisine },
    { id: 2, value: "Meal type", data: recipe.mealType[0] },
    { id: 3, value: "Difficulty", data: recipe.difficulty },
    { id: 4, value: "Calories per serving", data: recipe.caloriesPerServing },
    { id: 5, value: "Preparation time", data: recipe.prepTimeMinutes },
    { id: 6, value: "Cooking time", data: recipe.cookTimeMinutes },
  ]
  return (
    <div className="pt-4 pl-0 lg:pl-11 w-full">
      <h1 className="font-semibold text-4xl leading-none mb-4">{recipe.name}</h1>
      <div className="block lg:flex lg:gap-5">
        <div className="mb-10">
          <Image className="rounded-xl h-auto w-full lg:h-80 lg:w-[36rem] mb-4 object-cover" src={recipe.image} width={450} height={450} alt={recipe.name}  priority/>
          <div>
            <h2 className="text-xl font-semibold mb-1">Ingredients :</h2>
            <ul className="space-y-1">
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>
                  <p className="text-base lg:text-lg">{ingredient}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="lg:space-y-5 space-y-3 lg:mb-[59px] mb-4">
            {recipeDetails.map(detail => (
              <div key={detail.id} className="flex items-end justify-between border-b">
                <p className="lg:text-xl font-semibold">{detail.value}</p>
                <p className="lg:text-lg font-semibold">{detail.data}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1 lg:mb-3">Instructions:</h2>
            <ol className="list-decimal space-y-2">
              {recipe.instructions.map(instruction => (
                <li key={instruction}>
                  <p className="lg:text-lg">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}