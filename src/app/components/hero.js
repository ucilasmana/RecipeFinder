import { useState, useEffect} from "react";
import {Salad } from "../../../public/icons/svg";
import { HeroSkeleton } from "./skeleton";

const Hero= () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    // Simulate fetching data or any other async operation
    setTimeout(() => {
      setShowSkeleton(false); // Hide the skeleton after 2 seconds
    }, 75);
  }, []);
  
  return (  
    <>
    {showSkeleton ? 
    (<HeroSkeleton/>):(
    <div className="w-full px-6 sm:px-8 ">
        <div className="relative w-full h-40 xs:h-48 xs-1:h-36 sm-2:h-40 md:h-44 md-2:h-48 lg:h-56 xl:h-60 bg-yellow-200/90 rounded-2xl shadow p-4 flex flex-col text-center xs-1:text-left xs-1:flex-row xs-1:justify-evenly  items-center">
            <div className='flex flex-col gap-1 xs-1:gap-2 xl:gap-4'>
                <h1 className='font-jost text-xxs xs:text-sm xs-2:text-base sm-2:text-lg md:text-xl lg:text-2xl text-amber-800'>Let’s Embark on Your Culinary Journey</h1>     
                <span className='font-jost font-bold text-red-600 text-base xs:text-lg xs-1:text-xl sm-1:text-2xl sm-2:text-3xl md:text-4xl md:text-4xl-1 lg:text-5xl xl:text-5xl-1'>Discover Your  Favorite <br/> Recipes Here</span>         
              </div>
              <Salad className="absolute bottom-0 xs-1:relative w-20 h-20 xs:w-24 xs:h-24 sm-1:h-28 sm-1:w-28 sm-2:h-32 sm-2:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-60 xl:w-60 sm:mb-2"/>
        </div> 
    </div> 
  )} </>
  )
}

export default Hero