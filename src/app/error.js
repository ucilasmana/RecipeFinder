'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
    useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
     
    <div className='absolute w-full h-full p-6 bg-gray-100 z-50'>
        
      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <div className='flex flex-col gap-12 w-full h-full text-center justify-center items-center'>
        <h2 className='text-6xl sm:text-7xl md:text-8xl text-zinc-500 font-jost font-semibold'>Something went wrong!</h2>
            <button className='border-2 border-zinc-200 rounded-md w-32 md:w-40 p-2 md:p-3 font-jost font-bold text-base sm:text-lg shadow-lg text-zinc-600 bg-white hover:text-white hover:bg-red-600'
                onClick={// Attempt to recover by trying to re-render the segment
                () => reset()}>Try again
            </button>
        </div>
      </div>
    </div>
  )
}