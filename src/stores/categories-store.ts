import { collection, getDocs } from 'firebase/firestore'
import { create } from 'zustand'

import { db } from '../config/firebase'
import { categoryConverter } from '../converters/firestore.converter'
import type { Category } from '../types/category-types'

interface ICategoriesStore {
  categories: Category[] | null
  isLoading: boolean
  fetchCategories: () => Promise<void>
}

export const useCategoriesStore = create<ICategoriesStore>((set) => ({
  categories: [],
  isLoading: false,
  fetchCategories: async () => {
    try {
      set({ isLoading: true })
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        const result = doc.data()
        categoriesFromFirestore.push(result)
      })
      set({ categories: categoriesFromFirestore })
    } catch {
      throw new Error('Error to load the categories.')
    } finally {
      set({ isLoading: false })
    }
  },
}))
