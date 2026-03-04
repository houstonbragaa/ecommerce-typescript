import { createContext, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { categoryConverter } from '../converters/firestore.converter'
import { db } from '../config/firebase'
import type { Category } from '../types/category-types'

interface ICategoriesProvider {
  children: React.ReactNode
}

interface ICategoriesContext {
  categories: Category[] | null
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

export const CategoriesContext = createContext<ICategoriesContext>({
  categories: null,
  fetchCategories: async () => {},
  isLoading: false,
})

const CategoriesProvider = ({ children }: ICategoriesProvider) => {
  const [categories, setCategories] = useState<Category[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        const result = doc.data()
        categoriesFromFirestore.push(result)
      })
      setCategories(categoriesFromFirestore)
    } catch {
      throw new Error('Error to load the categories.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContext.Provider
      value={{ categories, fetchCategories, isLoading }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider
