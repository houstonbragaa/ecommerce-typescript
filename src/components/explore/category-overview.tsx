import type { Category } from '../../types/products-types'

interface ICategoryOverview {
  categories: Category[] | null
}

const CategoryOverview = ({ categories }: ICategoryOverview) => {
  return (
    <div className="flex flex-wrap">
      {categories?.map((category) => (
        <p>{category.displayName}</p>
      ))}
    </div>
  )
}

export default CategoryOverview
