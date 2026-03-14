import { useEffect } from 'react'
import { useStore } from 'zustand'

import { CarouselItem, MobileCarousel } from '../../helpers/mobile-carousel'
import { useCategoriesStore } from '../../stores/categories-store'
import CategoryCard from './category-card'

const Categories = () => {
  const { categories, fetchCategories } = useStore(useCategoriesStore)

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return (
    <MobileCarousel
      desktopLayout="flex"
      centerPaddingClass="max-md:pl-[10vw] max-md:pr-[10vw]"
    >
      {categories?.map((category) => (
        <CarouselItem
          key={category.id}
          minWidth="max-md:min-w-[80vw] max-md:max-w-[280px]"
        >
          <CategoryCard category={category} />
        </CarouselItem>
      ))}
    </MobileCarousel>
  )
}

export default Categories
