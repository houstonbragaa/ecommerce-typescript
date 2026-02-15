import Header from '../components/common/header'
import Categories from '../components/home/categories'
import Hero from '../components/home/hero'
import { LayoutContent } from '../layout/layout'

const HomePage = () => {
  return (
    <LayoutContent className="relative flex w-full flex-col md:items-center">
      <Header />

      {/* Margem negativa puxa a hero para cima, ficando atrás do header sticky */}
      <div className="relative -mt-[100px] min-h-screen w-full">
        <Hero />
      </div>
      <Categories />
    </LayoutContent>
  )
}

export default HomePage
