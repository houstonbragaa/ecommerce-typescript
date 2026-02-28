import type { Category } from '../../types/category-types'
import ProductItem from '../common/product-item'

interface ICategoryOverview {
  categories: Category[] | null
}

const CategoryOverview = ({ categories }: ICategoryOverview) => {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      {categories?.map((category) => (
        <section
          key={category.id}
          className="flex flex-col items-center gap-2 space-y-4 sm:items-start"
        >
          <h2 className="text-xl font-semibold text-purple-500">
            {category.displayName}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 overflow-x-auto">
            {category.products.slice(0, 4).map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default CategoryOverview
