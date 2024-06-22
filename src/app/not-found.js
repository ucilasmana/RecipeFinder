'use client'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router=useRouter()
  const handleBack = () => router.back()

  return (
    <div className='w-full h-full p-6'>   
    <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
      <div className='flex flex-col gap-6 sm:gap-8 w-full h-full text-center justify-center items-center'>
      <h2 className='text-6xl sm:text-7xl md:text-8xl text-zinc-500 font-jost font-semibold'>Not Found</h2>
      <h4 className='text-2xl sm:text-3xl md:text-4xl text-zinc-500 font-jost font-semibold'>Could not find requested resource</h4>
       <div onClick={handleBack}>
          <button className='border-2 border-zinc-200 rounded-md w-32 md:w-40 p-2 md:p-3 font-jost font-bold text-base sm:text-lg shadow-lg text-zinc-600 bg-white hover:text-white hover:bg-red-600'> Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}