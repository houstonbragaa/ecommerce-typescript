import { useParams } from 'react-router'
import CategoryDetails from '../components/category-details/category-details'
import Header from '../components/common/header'
import { LayoutContainer } from '../layout/layout'

const CategoryDetailsPage = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <LayoutContainer>
      <Header />
      <CategoryDetails categoryId={id} />
    </LayoutContainer>
  )
}

export default CategoryDetailsPage
