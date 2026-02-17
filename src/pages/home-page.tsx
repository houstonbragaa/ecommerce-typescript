import Header from '../components/common/header'
import CategoriesSection from '../components/home/categories-section'

import Hero from '../components/home/hero'
import Slide from '../components/home/slide'
import { LayoutContainer } from '../layout/layout'

const HomePage = () => {
  return (
    <LayoutContainer className="relative flex w-full flex-col md:items-center">
      <Header />

      {/* Margem negativa puxa a hero para cima, ficando atrás do header sticky */}
      <div className="relative -mt-[100px] min-h-screen w-full">
        <Hero />
      </div>
      <Slide />
      <CategoriesSection />
    </LayoutContainer>
  )
}

export default HomePage
