import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const HeroSkeleton = () => {
    return (
        <>
          <div className="w-[90%] m-auto">
            <Skeleton height={200} width="100%"/>
          </div>
        </>
    )
}

export const HeadingSkeleton = () =>{
  return(
    <>
     <Skeleton className='mt-3 ml-8 mb-6' height={30} width={150}/>
    </>
  )
}

export const CategoriesSkeleton = () => {
  return (
    <>
         <div className='flex justify-center w-full'>
          <div className="w-[90%] grid grid-cols-4 gap-6" >
            <Skeleton height={75} width="100%" />
            <Skeleton height={75} width="100%" />
            <Skeleton height={75} width="100%" />
            <Skeleton height={75} width="100%" />
          </div>
        </div>
      </>
  )
}

export const ListSkeleton = ({totalSkeleton}) => {
  const elementsArray=[]
  const totalElement = (elements) =>{
    for(let i=0; i<elements; i++)
      {
        elementsArray.push(<div key={i} className='flex flex-col gap-4'>
        <Skeleton height={150} width="100%" />
        <Skeleton width="100%" />
        </div>
        )
      }
      return elementsArray
  }
    return (
      <>
          <div className='flex justify-center w-full pb-8'>
          <div className="w-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {totalElement(totalSkeleton)}
          </div>
          </div>        
        </>
    )
  }

  export const DetailSkeleton = () => {
    return (
      <>
           <div className='w-full h-full mx-10 my-6 flex flex-col gap-8 justify-center'>
           <Skeleton height={50} width="100%" />
           <Skeleton height={180} width="100%"/>
           <Skeleton height={180} width="100%"/>
           <Skeleton height={180} width="100%"/>
          </div>
        </>
    )
  }