const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {
        Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`${shimmer} relative overflow-hidden rounded-xl shadow-sm bg-gray-100`}
          >
            <div className="flex justify-center">
              <div className="h-44 w-full rounded-md bg-gray-200" />
            </div>
            <div className="flex flex-col items-start p-2">
              <div className="h-5 w-2/4 rounded-md bg-gray-200 mb-1" />
              <div className="h-5 w-1/3 rounded-md bg-gray-200" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export function FavoriteCardSkeleton() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {
        Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`${shimmer} relative h-32 overflow-hidden rounded-xl shadow-sm bg-gray-100 flex items-center gap-4 p-4`}
          >
            <div>
              <div className=" rounded-md w-24 h-24 bg-gray-200" />
            </div>
            <div className="items-start p-2 w-full flex flex-col gap-4">
              <div className="h-5 w-3/4 rounded-md bg-gray-200" />
              <div className="h-5 w-1/3 rounded-md bg-gray-200 self-end" />
            </div>
          </div>
        ))
      }
    </div>
  )
}