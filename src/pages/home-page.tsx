import Header from '../components/common/header'
import Categories from '../components/home/categories'
import { LayoutContent } from '../layout/layout'

const HomePage = () => {
  return (
    <LayoutContent className="flex w-full flex-col justify-center md:items-center">
      <Header />
      <Categories />
    </LayoutContent>
  )
}

export default HomePage
