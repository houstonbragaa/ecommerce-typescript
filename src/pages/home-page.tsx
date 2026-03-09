import Footer from '../components/common/footer'
import Header from '../components/common/header'
import About from '../components/home/about'
import CategoriesSection from '../components/home/categories-section'
import FeaturedByCategory from '../components/home/featured-by-category'
import Hero from '../components/home/hero'
import Slide from '../components/home/slide'
import Testimonials from '../components/home/testimonials'
import { LayoutContainer } from '../layout/layout'

const HomePage = () => {
  return (
    <LayoutContainer className="relative flex w-full flex-col overflow-x-hidden md:items-center">
      {/* Luzes estáticas roxas - vários pontos da página */}
      <div
        className="purple-light-orb absolute top-[15%] -left-40 h-[350px] w-[350px] bg-violet-600/25"
        aria-hidden
      />
      <div
        className="purple-light-orb absolute top-[35%] -right-40 h-[300px] w-[300px] bg-purple-600/20"
        aria-hidden
      />
      <div
        className="purple-light-orb absolute top-[55%] left-1/2 h-[280px] w-[450px] -translate-x-1/2 bg-fuchsia-500/12"
        aria-hidden
      />
      <div
        className="purple-light-orb absolute top-[75%] right-[5%] h-[220px] w-[220px] bg-violet-500/18"
        aria-hidden
      />
      <div
        className="purple-light-orb absolute top-[65%] left-[8%] h-[180px] w-[180px] bg-purple-400/15"
        aria-hidden
      />
      <div
        className="purple-light-orb absolute top-[95%] -left-32 h-[250px] w-[250px] bg-violet-700/20"
        aria-hidden
      />
      <div
        className="purple-light-orb absolute top-[115%] -right-32 h-[200px] w-[200px] bg-purple-500/15"
        aria-hidden
      />
      <div
        className="purple-light-orb absolute top-[140%] left-[20%] h-[220px] w-[220px] bg-violet-400/12"
        aria-hidden
      />
      <div
        className="purple-light-orb absolute top-[165%] right-[25%] h-[190px] w-[190px] bg-purple-600/15"
        aria-hidden
      />

      <Header />

      {/* Margem negativa puxa a hero para cima, ficando atrás do header sticky */}
      <div className="relative -mt-[100px] min-h-screen w-full">
        <Hero />
      </div>
      <Slide />
      <CategoriesSection />
      <About />
      <FeaturedByCategory />
      <Testimonials />
      <Footer />
    </LayoutContainer>
  )
}

export default HomePage
