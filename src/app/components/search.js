'use client'
import { useEffect, useRef, useState } from "react"
import List from "./list"
import { ListSkeleton } from "./skeleton"
import useSWR from "swr"
import { fetcher } from "../lib/fetcher"
import { SearchIcon } from "../../../public/icons/svg"

const Search = () => {
  const [recipe, setRecipe] =useState('')

  const { data, isLoading} = useSWR(`search.php?s=${recipe}`, fetcher)

    console.log(data)

  return (
    <div className="pt-4 w-full px-6 sm:px-8 md:px-10 lg:px-16">
     <div className="w-full font-jost flex flex-col gap-10 items-center">
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-red-700 bg-white rounded-xl shadow py-2 px-3 w-fit text-center'>Find Your Favorite Recipes</h3>
          <div className='bg-white flex  items-center gap-2 p-4 justify-between w-full rounded-xl shadow '>
            <input type="text" value={recipe} onChange={e=>setRecipe(e.target.value)} placeholder="Search" className="w-full placeholder-gray-500 text-sm min-[360px]:text-base sm:text-lg md:text-xl  text-gray-700 outline-none" required/>
            <SearchIcon className="h-3 w-3 min-[380px]:h-5 min-[380px]:w-5 stroke-red-600"/>
          </div>          
      </div>  
    <div className="mt-10">
        {data? data.meals? <List recipeList={data.meals} totalRecipes={data.meals.length}/>
        : <div className="mt-20 gap-2 flex flex-col w-full items-center justify-center text-base md:text-lg lg:text-xl text-zinc-500 font-catamaran"><h4 className="bg-white px-3 py-1 shadow rounded-lg">No results found</h4><span className="shadow rounded-lg bg-white px-3 py-1">Try a different keyword</span></div>
        : null}
    </div>
    </div>
  )
}

export default Search