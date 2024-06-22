import Link from 'next/link'
import React from 'react'
import { SearchIcon } from '../../../public/icons/svg'

const Header = () => {
  return (
    <header className='flex bg-white p-4 shadow-sm justify-between items-center'>
     <Link href="/"><span className="font-paytone text-base min-[380px]:text-xl sm:text-2xl text-red-600">RecipeFinder</span></Link>
     <Link href="/search" className='flex  items-center gap-2 py-1.5 justify-end border border-gray-100/75 hover:border-gray-300 bg-gray-50 px-2 min-[380px]:px-5 rounded-full'> <span className='font-jost text-xxs min-[380px]:text-sm text-gray-500'>Find Recipe </span>
     <SearchIcon className="h-3 w-3 min-[380px]:h-5 min-[380px]:w-5 stroke-red-600"/>  </Link>
    </header>
  )
}

export default Header