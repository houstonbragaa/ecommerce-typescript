import { collection, getDocs } from 'firebase/firestore'

import { useEffect, useState } from 'react'
import type { Category } from '../types/products-types'
import { db } from '../config/firebase'
import { categoryConverter } from '../converters/firestore.converter'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
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
    }
  }
  useEffect(() => {
    fetchCategories()
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
