'use client'
import BackButton from '@/app/components/backButton'
import { DetailSkeleton, ListSkeleton } from '@/app/components/skeleton'
import { fetcher } from '@/app/lib/fetcher'
import Loading from '../../../../public/loading.gif'
import Image from "next/image";
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const Details = ({params}) => {
  const {id} = params
  const {data, isLoading} = useSWR(`lookup.php?i=${id}`, fetcher)
  const [ingredients, setIngredients] = useState([])

  useEffect(()=>{
    if(!isLoading)
      {
        const ingredientsValue=[]
           for(let i = 1; i<=20;i++)
           {
              const ingredientName=details[`strIngredient${i}`]
              const ingredientMeasure = details[`strMeasure${i}`];
               if(ingredientName)
               {
                
                ingredientsValue.push([ingredientName, ingredientMeasure]);
               }
               

           }
           setIngredients(ingredientsValue)
      console.log(details)
      }
  }, [isLoading])

  if (isLoading)  {
    return (
      <div className="flex justify-center w-full">
          <DetailSkeleton/>
        </div>
   )      
}
const [details]=data.meals

  return (
  <>
  <BackButton/>
  <div className='w-full h-full px-6 md:px-8 flex justify-center items-center '>
    <div className=' w-[95%] lg:w-full flex flex-col gap-8'>
      <h4 className=' font-jost lg:w-fit text-center px-3 py-2 bg-white text-lg sm:text-xl md:text-2xl lg:text-3xl shadow rounded-xl capitalize text-red-700 font-bold'>{details.strMeal}</h4>
      <div className='flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-8'>
        <div className="relative h-86 w-full md:h-100 lg:w-120 lg:h-120 border border-gray-50 bg-white rounded-lg shadow">
              <Image
                  src={details.strMealThumb} 
                  alt={details.strMeal}
                  fill={true}
                  sizes="30vw"
                  style={{
                  objectFit: 'cover',
                  padding:'10px',}}
              />
        </div> 
        <div className='flex flex-col gap-8 w-full lg:w-[90%]'>
          <div className='w-full p-4 shadow bg-white rounded-lg'>
            <h4 className=' font-catamaran font-medium text-zinc-500 text-lg md:text-xl lg:text-2xl  border-b pb-2'>Ingredients:</h4>
            <ul className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 text-base lg:text-lg font-jost'>
                {ingredients.map((ingredient, index)=>(
                  <li key={index} >
                  {ingredient[1]}  {ingredient[0]} 
                  </li>
                ))}
            </ul>
          </div>
          <div className='w-full p-4 shadow bg-white rounded-lg'>
            <h4 className=' font-catamaran font-medium text-zinc-500 text-lg md:text-xl lg:text-2xl  border-b pb-2'>Instructions:</h4>
            <ul className='p-4 flex flex-col gap-2 text-gray-700 text-base lg:text-lg font-jost'>
                {details.strInstructions.split('.') // Split instructions by newline
                .map((step, index) => {
                    // Remove leading digits and tabs
                    const normalizedStep = step.trim()
                    if (normalizedStep.trim()!== '') { // Check if the step value is not empty and not only whitespace characters
                      return (
                        <li key={index}>
                          {normalizedStep}
                        </li>
                      );
                    } else {
                      return null; // Return null if the step value is empty or only whitespace characters
                    }
                })}
            </ul>
          </div>
        </div>
      </div> 
      </div>             
    </div>

  </>
  )}

export default Details