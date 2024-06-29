import {  Beef, Chicken, Dessert, Lamb, Miscellaneous, Pasta, Pork, Seafood, Side, Starter, Vegan, Vegetarian, Breakfast, Goat } from '../../../public/icons/svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useSWR from 'swr'
import {fetcher } from "../lib/fetcher";
import {CategoriesSkeleton, HeadingSkeleton} from '../components/skeleton';
import Link from 'next/link';

const Icons = {
  Beef: Beef,
  Chicken: Chicken,
  Dessert: Dessert,
  Lamb: Lamb,
  Miscellaneous: Miscellaneous,
  Pasta: Pasta,
  Pork: Pork,
  Seafood: Seafood,
  Side: Side,
  Starter: Starter,
  Vegan: Vegan,
  Vegetarian: Vegetarian,
  Breakfast: Breakfast, 
  Goat: Goat 
};


const CategoriesList = () => {
  const { data, isLoading} = useSWR(`categories.php`, fetcher)
  if (isLoading)  {
      return (
      <>
        <HeadingSkeleton/>
        <CategoriesSkeleton/>
      </>
     )      
  }

  const categories=data.categories
  
  return (
    <div className='z-0 mt-3 flex flex-col gap-6'>
      <span className='ml-6 sm:ml-8 font-jost font-semibold text-gray-800 text-base md:text-lg'>Categories</span>
      <Swiper className='font-catamaran text-center w-full'
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        300:{
          slidesPerView: 4,
          spaceBetween:15
        },
        540:{
          slidesPerView: 5,
          spaceBetween:20
        },
        // when window width is >= 640px
        700: {
          slidesPerView: 6,
          spaceBetween:30
        },
        980: {
          slidesPerView: 8,
          spaceBetween:30
        },
      }}
    >
  {categories.map((category) => {
  const Icon = Icons[category.strCategory]; // select the icon component based on the category name
  return (
    <SwiperSlide className="first:ml-6 first:sm:ml-8 mb-4 w-full  cursor-pointer font-medium" key={category.idCategory}>
      <Link href={`/categories/${category.strCategory}`} className='flex flex-col justify-center items-center gap-2 bg-white  py-2  rounded-lg  shadow-md'>
        <Icon className="h-6 w-6 xs-1:h-8 md:h-10 lg:h-12 xs-1:w-8 md:w-10 lg:w-12"/> 
        <span className='text-xxs sm:text-xs md:text-sm text-zinc-700'>{isLoading ? "loading" : category.strCategory} </span>    
      </Link>
    </SwiperSlide>
  );
})}

        <SwiperSlide/>
    </Swiper>

</div>
  )
  
  
  
}

export default CategoriesList