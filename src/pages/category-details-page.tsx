import { useParams } from 'react-router'

import CategoryDetails from '../components/category-details/category-details'
import Footer from '../components/common/footer'
import Header from '../components/common/header'
import PurpleLights from '../components/common/light'
import { LayoutContainer } from '../layout/layout'

const CategoryDetailsPage = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <LayoutContainer className="relative">
      <PurpleLights />
      <Header />
      <CategoryDetails categoryId={id} />
      <Footer />
    </LayoutContainer>
  )
}

export default CategoryDetailsPage
