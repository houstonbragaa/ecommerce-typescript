import { LayoutContent } from '../../layout/layout'
import ArrowDown from '../../assets/arrow-down.png'
import { useContext, useEffect } from 'react'
import { CategoriesContext } from '../../contexts/category-context'
import CategoryOverview from './category-overview'
import LoaderPage from '../../pages/loader-page'

const CategoriesOverview = () => {
  const { categories, fetchCategories, isLoading } =
    useContext(CategoriesContext)

  useEffect(() => {
    fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <LoaderPage />

  return (
    <LayoutContent className="mt-18 flex w-full flex-col items-center space-y-10">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-pump text-3xl font-semibold">
          Explorar os mais vendidos
        </h1>
        <img src={ArrowDown} alt="arrow-down" className="animate-bounce" />
      </div>
      <div className="flex w-full flex-wrap gap-6">
        <CategoryOverview categories={categories} />
      </div>
    </LayoutContent>
  )
}

export default CategoriesOverview
