import CategoryRecipesList from '@/app/components/categoryRecipesList'
import Modal from '@/app/components/modal'

const CategoryRecipesModal = ({params}) => {
    const {category} = params
    return (
    <>
    <Modal>
      <CategoryRecipesList category={category}/>
    </Modal>             
    </>
  )
}

export default CategoryRecipesModal