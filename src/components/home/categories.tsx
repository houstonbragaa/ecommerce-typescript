import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/category-context'
import { CarouselItem, MobileCarousel } from '../../helpers/mobile-carousel'
import CategoryCard from './category-card'

const Categories = () => {
  const { categories } = useContext(CategoriesContext)

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
