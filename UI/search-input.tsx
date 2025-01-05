'use client'

import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function SearchInput() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  async function handlerSearch(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim() !== '') {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    router.push(`${pathname}?${params.toString()}`)
  }
  
  return (
    <div className='relative text-gray-500 focus-within:text-primary transition-colors duration-300 max-w-32 sm:max-w-60 lg:w-72'>
      <MagnifyingGlassIcon width={20} height={20} className='absolute top-[5px] sm:top-2 left-1 w-4 h-4 sm:w-5 sm:h-5' />
      <input
        type="text"
        onChange={(event) => handlerSearch(event.target.value)}
        className='w-full outline-none pl-6 sm:pl-7 pr-1 sm:py-1 border text-black focus:border-primary transition-border duration-300 rounded-md'
      />
    </div>
  )
}