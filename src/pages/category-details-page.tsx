import { useParams } from 'react-router'
import CategoryDetails from '../components/category-details/category-details'
import Header from '../components/common/header'
import { LayoutContainer } from '../layout/layout'
import Footer from '../components/common/footer'

const CategoryDetailsPage = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <LayoutContainer>
      <Header />
      <CategoryDetails categoryId={id} />
      <Footer />
    </LayoutContainer>
  )
}

export default CategoryDetailsPage
