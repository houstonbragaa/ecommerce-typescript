import { LayoutContent } from '../../layout/layout'
import Categories from './categories'

const CategoriesSection = () => {
  return (
    <LayoutContent className="mt-18 flex flex-col items-center space-y-24 overflow-x-clip">
      <h2 className="font-pump text-xl">Conheça nossos produtos</h2>
      <div className="w-full max-w-5xl min-w-0">
        <Categories />
      </div>
    </LayoutContent>
  )
}

export default CategoriesSection
