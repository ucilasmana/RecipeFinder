import CategoryRecipesList from '@/app/components/categoryRecipesList'
import BackButton from '@/app/components/backButton'

const CategoryRecipesPage = ({params}) => {
  const {category} = params
  return (
    <div className=' w-full h-full px-4 sm:px-6 md:px-8'>
        <BackButton/>
        <div className='bg-zinc-200/40 p-5 sm:p-8 shadow-inner rounded-3xl sm:m-6 m-2 my-4 border border-gray-50'> 
            <CategoryRecipesList category={category}/>   
        </div>
    </div>
  )
}

export default CategoryRecipesPage