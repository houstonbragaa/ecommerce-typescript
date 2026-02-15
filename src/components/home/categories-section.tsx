import { LayoutContent } from '../../layout/layout'
import Categories from './categories'

const CategoriesSection = () => {
  return (
    <LayoutContent className="mt-16 flex flex-col items-center space-y-24">
      <h2 className="font-pump text-xl">Conheça nossos produtos</h2>
      <Categories />
    </LayoutContent>
  )
}

export default CategoriesSection
