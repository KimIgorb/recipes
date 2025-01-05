'use client';
import { deleteFavorites } from "@/services/favorites";
import { useRouter } from "next/navigation";

export default function RemoveFavBtn({ id }: { id: number }) {

  const router = useRouter()

  async function handleRemove(id: number) {
    await deleteFavorites(id)
    router.refresh()
  }

  return (
    <button
      onClick={() => handleRemove(id)}
      className='bg-primary text-white p-1 md:px-4 md:py-2 rounded-lg ml-auto transition-opacity duration-300 hover:opacity-80 absolute bottom-1 right-1 md:bottom-2 md:right-2 text-sm md:text-base'
    >
      Remove
    </button>
  )
}
