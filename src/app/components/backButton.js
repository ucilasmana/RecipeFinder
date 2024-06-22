'use client'
import React from 'react'
import { ArrowLeft } from '../../../public/icons/svg'
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const router=useRouter()
    const handleBack = () => router.back()

  return (
    <div onClick={handleBack} className="ml-4 sm:ml-6 md:ml-8 cursor-pointer hover:shadow bg-white flex gap-1 justify-center items-center rounded-lg hover:border-white border border-gray-100 py-0.5 px-2 w-fit" href='/'>
        <ArrowLeft className="h-5 w-5 cursor-pointer stroke-gray-700"/>
        <span className='font-jost font-semibold text-xs sm:text-sm md:text-base text-gray-700 '>Back</span>
    </div> 
  )
}

export default BackButton