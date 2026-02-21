import type { Category } from '../../types/products-types'
import CategoryItem from './category-item'

interface ICategoryOverview {
  categories: Category[] | null
}

const CategoryOverview = ({ categories }: ICategoryOverview) => {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      {categories?.map((category) => (
        <section key={category.id} className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-semibold text-purple-500">
            {category.displayName}
          </h2>
          <div className="flex gap-4 overflow-x-auto">
            {category.products.slice(0, 4).map((product) => (
              <CategoryItem
                key={product.id}
                name={product.name}
                price={product.price}
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
