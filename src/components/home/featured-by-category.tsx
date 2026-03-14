import { useStore } from 'zustand'

import { CarouselItem, MobileCarousel } from '../../helpers/mobile-carousel'
import { LayoutContent } from '../../layout/layout'
import LoaderPage from '../../pages/loader-page'
import { useCategoriesStore } from '../../stores/categories-store'
import ProductItem from '../common/product-item'

const FeaturedByCategory = () => {
  const { categories, isLoading } = useStore(useCategoriesStore)

  if (isLoading) return <LoaderPage />
  //pega o segundo item de cada categoria
  const secondProducts =
    categories
      ?.filter((category) => category.products?.length >= 2)
      .map((category) => category.products[1]) ?? []

  if (secondProducts.length === 0) return null

  return (
    <section className="relative mt-32 w-full">
      {/* Luz de destaque suave */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[150px] w-[80%] max-w-2xl -translate-x-1/2 rounded-full bg-purple-500/10 blur-[80px]"
        aria-hidden
      />
      <LayoutContent className="relative flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-pump text-3xl font-bold text-white md:text-4xl">
            Fique por dentro das novidades
          </h2>
          <p className="max-w-2xl text-zinc-400">
            Confira os produtos recém chegados e que estão em alta
          </p>
        </div>
        <MobileCarousel
          desktopLayout="flex"
          centerPaddingClass="max-md:pl-[calc(50vw-130px)] max-md:pr-[calc(50vw-130px)]"
        >
          {secondProducts.map((product) => (
            <CarouselItem key={product.id} minWidth="max-md:min-w-[260px]">
              <ProductItem product={product} />
            </CarouselItem>
          ))}
        </MobileCarousel>
      </LayoutContent>
    </section>
  )
}

export default FeaturedByCategory
