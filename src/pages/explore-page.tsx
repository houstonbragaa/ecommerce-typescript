import Footer from '../components/common/footer'
import Header from '../components/common/header'
import CategoriesOverview from '../components/explore/categories-overview'
import { LayoutContainer } from '../layout/layout'

const ExplorePage = () => {
  return (
    <LayoutContainer>
      <Header />
      <CategoriesOverview />
      <Footer />
    </LayoutContainer>
  )
}
export default ExplorePage
