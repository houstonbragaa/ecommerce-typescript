import type { Category } from '../../types/products-types'
import CategoryItem from './category-item'

interface ICategoryOverview {
  categories: Category[] | null
}

const CategoryOverview = ({ categories }: ICategoryOverview) => {
  return (
    <div className="flex w-full flex-col gap-10">
      {categories?.map((category) => (
        <section key={category.id} className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">{category.displayName}</h2>
          <div className="flex gap-4 overflow-x-auto">
            {category.products.slice(0, 4).map((product) => (
              <CategoryItem
                key={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default CategoryOverview
