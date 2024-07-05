'use client'
import Link from 'next/link';
import Loading from '../../../public/loading.gif'
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

const itemsPerLoad=24

const List= ({recipeList, totalRecipes}) => {

  const { ref, inView} = useInView();
  const [recipes, setRecipes] = useState([])
  const [hasMoreRecipes, setHasMoreRecipes] = useState(true);
  const timeoutId=useRef(null)

  useEffect(() => {
    if(inView){
      if(totalRecipes<itemsPerLoad)   {
        setRecipes(recipeList)
        setHasMoreRecipes(false)
      }
      else{
        if (timeoutId.current) {
          clearTimeout(timeoutId);
        }
        timeoutId.current = setTimeout(() => {
            const startIndex = recipes.length;
            const nextRecipes = recipeList.slice(startIndex, startIndex + itemsPerLoad);
            setRecipes((prevRecipes) => [...prevRecipes, ...nextRecipes]);        
          }, 1000);

        if(recipes.length===totalRecipes){
          setHasMoreRecipes(false)
        }
      }
    }
  },[inView]);

  return (
  <>
  <div className='grid xs:grid-cols-2 md:grid-cols-3 xl-1:grid-cols-4 content-center gap-x-4 md:gap-x-6 lg:gap-x-9 gap-y-6 md:gap-y-9 w-full justify-items-stretch'> 
  {recipes.map((recipe, key) => (
    <div key={key}>
        <Link href={`/recipes/${recipe.idMeal}`} key={key}>        
        <div className='w-full flex flex-col justify-center  items-center gap-4  sm:gap-6 text-center h-fit cursor-pointer'>                  
            <div className="relative h-44 md:h-52 w-full lg:h-56 border border-gray-50 bg-white rounded-md shadow">
            <Image
                src={recipe.strMealThumb} 
                alt={recipe.strMeal}
                fill={true}
                sizes="25vw"
                style={{
                objectFit: 'cover',
                padding:'7px',}}
            />
            </div>
            <div className='h-1/4 font-medium font-catamaran text-sm md:text-base  text-gray-700 capitalize'>{recipe.strMeal}</div>
        </div>
        </Link>
    </div>    
        ))}
      </div> 
      <div className='pt-8 pb-3 flex flex-col gap-4'>
        {hasMoreRecipes&&
        (<div className="flex justify-center" ref={ref}>
          <Image src={Loading} alt="loading" height={70} sizes={70} />
        </div>)}
        <p className='text-center text-zinc-500 font-jost font-medium'>
          -------- Showing {recipes.length} Recipes -------
        </p>
      </div>
  </>
  )

}
export default List