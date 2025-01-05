'use client'

import Link from "next/link"
import { BookOpenIcon, HeartIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"


const navLinks = [
  { title: 'Recipes', path: '/recipes', icon: <BookOpenIcon width={28} height={28} className="hidden lg:block"/> },
  { title: 'Favorites', path: '/recipes/favorites', icon: <HeartIcon width={28} height={28} className="hidden lg:block" /> },
]

export default function Navbar() {

  const pathname = usePathname()

  return (
    <ul className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-7">
      {navLinks.map(item => (
        <li key={item.title}>
          <Link
            href={item.path}
            className={`flex items-center gap-1 text-base sm:text-lg lg:text-xl font-normal transition-colors duration-300 hover:text-primary ${pathname === item.path ? "text-primary" : "text-black"}`}
          >
            {item.icon}
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}