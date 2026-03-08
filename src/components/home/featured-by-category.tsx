import { useContext } from 'react'
import { LayoutContent } from '../../layout/layout'
import ProductItem from '../common/product-item'
import { CategoriesContext } from '../../contexts/category-context'
import LoaderPage from '../../pages/loader-page'

const FeaturedByCategory = () => {
  const { categories, isLoading } = useContext(CategoriesContext)

  if (isLoading) return <LoaderPage />
  //pega o segundo item de cada categoria
  const secondProducts =
    categories
      ?.filter((category) => category.products?.length >= 2)
      .map((category) => category.products[1]) ?? []

  if (secondProducts.length === 0) return null

  return (
    <section className="mt-32 w-full">
      <LayoutContent className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-pump text-3xl font-bold text-white md:text-4xl">
            Nossas novidades
          </h2>
          <p className="max-w-2xl text-zinc-400">
            Confira os produtos recém chegados na PUMP ZONE
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {secondProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </LayoutContent>
    </section>
  )
}

export default FeaturedByCategory
