//import LoaderPage from '../../pages/loader-page'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { ChevronLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { db } from '../../config/firebase'
import { categoryConverter } from '../../converters/firestore.converter'
import { LayoutContent } from '../../layout/layout'
import LoaderPage from '../../pages/loader-page'
import type { Category } from '../../types/category-types'
import ProductItem from '../common/product-item'

interface ICategoryDetailsProps {
  categoryId: string
}

const CategoryDetails = ({ categoryId }: ICategoryDetailsProps) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const onBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )
        const category = querySnapshot.docs[0]?.data()
        setCategory(category)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategory()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <LoaderPage />

  return (
    <LayoutContent className="mt-12 flex items-center justify-center space-y-10">
      <div className="flex flex-col items-start gap-10">
        <div className="flex items-center gap-2">
          <ChevronLeft onClick={onBackClick} className="cursor-pointer" />
          <h1 className="font-pump text-2xl font-semibold">
            {category?.displayName}
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {category?.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </LayoutContent>
  )
}

export default CategoryDetails
