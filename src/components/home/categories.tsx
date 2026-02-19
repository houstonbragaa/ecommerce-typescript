import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/category-context'
import CategoryCard from './category-card'

const Categories = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <>
      <div className="flex w-full flex-wrap justify-center gap-6">
        {categories?.map((category) => (
          <CategoryCard
            displayName={category.displayName}
            imageUrl={category.imageUrl}
            key={category.id}
          />
        ))}
      </div>
    </>
  )
}

export default Categories
