import useSWR from 'swr'
import {fetchWithAreas} from "../lib/fetcher";
import { HeadingSkeleton, ListSkeleton } from '../components/skeleton';
import List from './recipeList';
import { useEffect, useState,} from 'react';

const Recipes= () => {

  const { data, isLoading } = useSWR('filter.php?a', fetchWithAreas)

  const [recipeList, setRecipeList]=useState([])

  useEffect(()=>{
    if(!isLoading)
    {
      setRecipeList(data)
    }
  },[isLoading])

  if(isLoading)
    {
      return (
        <>
          <HeadingSkeleton/>
          <ListSkeleton totalSkeleton={12} />
        </>
      );
    }

  const totalRecipes= recipeList.length
  return (
    <div className='mx-6 sm:mx-8 flex flex-col gap-6'>
      <div className='flex gap-2'>
        <span className='font-jost font-semibold text-gray-800 text-base md:text-lg '>Recipe Collection</span>        
      </div>
      {totalRecipes>0 && 
      <List recipeList={recipeList} totalRecipes={totalRecipes}/>
      }</div>
  )

}
export default Recipes