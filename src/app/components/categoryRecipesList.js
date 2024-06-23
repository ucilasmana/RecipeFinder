'use client'
import List from '@/app/components/recipeList'
import { ListSkeleton } from '@/app/components/skeleton'
import { fetcher } from '@/app/lib/fetcher'
import useSWR from 'swr'

const CategoryRecipesList = ({category}) => {
 
  const { data, isLoading} = useSWR(`filter.php?c=${category}`, fetcher)

  if (isLoading)  {
      return (
      <>
        <ListSkeleton totalSkeleton={24}/>
      </>
     )      
  }

  const recipeList=data.meals
  const totalRecipes=recipeList.length
  console.log(totalRecipes)
  return (
    <div className='flex flex-col gap-8 sm:gap-10 items-center p-4 sm:p-6'>
      <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-red-700 bg-white rounded-xl shadow py-2 px-3 text-center'>{category} Category </h3>
     {totalRecipes>0 && 
     <List recipeList={recipeList} totalRecipes={totalRecipes}/>
     }
      </div>
  )
}

export default CategoryRecipesList