'use server'
import List from '@/app/components/recipeList'
import { fetcher } from '@/app/lib/fetcher'

const CategoryRecipesList = async({category}) => {
  let recipeList=[]
  let totalRecipes=0

  const data = await fetcher(`filter.php?c=${category}`)

  if(data){
    recipeList=data.meals
    totalRecipes=recipeList.length
  }
 


  return (
    <div className='flex flex-col gap-8 sm:gap-10 items-center p-4 sm:p-6'>
      <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-red-700 bg-white rounded-xl shadow py-2 px-3 text-center'>{category} Category </h3>
      {totalRecipes>0 && 
      <List recipeList={recipeList} totalRecipes={totalRecipes}/>}
    
      </div>
  )
}

export default CategoryRecipesList