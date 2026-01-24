interface Category {
  id?: string
  name: string
  displayName: string
  imageUrl: string
  products: Product[]
}

interface Product {
  id?: string
  name: string
  price: number
  imageUrl: string
}

export type { Category, Product }
