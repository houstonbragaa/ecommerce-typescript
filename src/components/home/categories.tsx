import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/category-context'
import CategoryCard from './category-card'

const Categories = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <>
      <div className="flex w-full max-w-5xl flex-wrap justify-center gap-6">
        {categories?.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </>
  )
}

export default Categories
