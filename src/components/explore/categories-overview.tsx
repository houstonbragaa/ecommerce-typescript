import { useEffect } from 'react'
import { useStore } from 'zustand'

import { LayoutContent } from '../../layout/layout'
import LoaderPage from '../../pages/loader-page'
import { useCategoriesStore } from '../../stores/categories-store'
import CategoryOverview from './category-overview'

const CategoriesOverview = () => {
  const { categories, fetchCategories, isLoading } =
    useStore(useCategoriesStore)

  useEffect(() => {
    fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <LoaderPage />

  return (
    <LayoutContent className="mt-18 flex w-full flex-col items-center space-y-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-pump text-center text-3xl font-semibold">
          Explorar os mais vendidos
        </h1>
      </div>
      <div className="flex w-full flex-wrap gap-6">
        <CategoryOverview categories={categories} />
      </div>
    </LayoutContent>
  )
}

export default CategoriesOverview
