import { collection, getDocs } from 'firebase/firestore'

import { useEffect, useState } from 'react'
import type { Category } from '../types/products-types'
import { db } from '../config/firebase'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(collection(db, 'categories'))
      querySnapshot.forEach((doc) => {
        const result: any = doc.data()
        categoriesFromFirestore.push(result)
      })
      setCategories(categoriesFromFirestore)
    } catch {
      throw new Error('Error to loading the categories.')
    }
  }
  useEffect(() => {
    const loadCategories = async () => {
      await fetchCategories()
    }
    loadCategories()
  }, [])
  return (
    <div className="w-full">
      {categories.map((category) => (
        <h1 key={category.id}>{category.displayName}</h1>
      ))}
    </div>
  )
}

export default Categories
