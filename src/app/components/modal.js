'use client'
import React, { useEffect } from 'react'
import { CloseIcon } from '../../../public/icons/svg';
import { useRouter } from 'next/navigation'

const Modal = ({children}) => {
    const router=useRouter()
    const handleClose = () => {
      document.body.style.overflow='auto'
      router.back()
    }
  useEffect(() => {
    document.body.style.overflow ='hidden'
  },[]); 
     

  return (
    <div className='w-full h-full fixed top-0 left-0 bg-black/30 flex flex-col z-10'>
       <CloseIcon className="z-20 absolute rounded-lg bg-white shadow fill-red-500 hover:fill-red-700 top-2 p-0.5 right-2  h-7 w-7 cursor-pointer" onClick={handleClose}/>
      <div className='h-[93%] w-[93%] absolute bottom-0 left-1/2  -translate-x-1/2 font-jost'>
        <div className='relative w-full h-full bg-gray-50 py-8 px-3 sm:px-5 rounded-t-3xl shadow-md'>
          <div className='overflow-y-auto w-full h-full'>
            {children}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Modal