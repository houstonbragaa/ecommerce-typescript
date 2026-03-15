import { create } from 'zustand'

import type { CartProduct } from '../types/cart-types'
import type { Product } from '../types/product-types'

interface ICartStore {
  products: CartProduct[]
  isVisible: boolean
  totalPrice: number
  totalItemsCart: number
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductToCart: (productId: string) => void
  increaseQuantityInCart: (productId: string) => void
  decreaseQuantityInCart: (productId: string) => void
  cleanProducts: () => void
}

const getProductsInit = (): CartProduct[] => {
  try {
    const stored = localStorage.getItem('cartProducts')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export const useCartStore = create<ICartStore>((set, get) => ({
  products: getProductsInit(),
  isVisible: false,

  get totalPrice() {
    return get().products.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    )
  },

  get totalItemsCart() {
    return get().products.reduce((acc, current) => acc + current.quantity, 0)
  },

  toggleCart: () => set((state) => ({ isVisible: !state.isVisible })),

  addProductToCart: (product) => {
    const products = get().products

    const itemAlreadyExistsInCart = products.some(
      (item: CartProduct) => item.id === product.id
    )

    if (itemAlreadyExistsInCart) {
      set({
        products: products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      })
      return
    }
    set({ products: [...products, { ...product, quantity: 1 }] })
  },

  removeProductToCart: (productId) => {
    const products = get().products
    set({ products: products.filter((item) => item.id !== productId) })
  },

  increaseQuantityInCart: (productId) => {
    const products = get().products
    set({
      products: products.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })
  },

  decreaseQuantityInCart: (productId) => {
    const products = get().products
    const product = products.find((item) => item.id === productId)

    if (product?.quantity === 1) {
      set({ products: products.filter((item) => item.id !== productId) })
      return
    }

    set({
      products: products.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ),
    })
  },

  cleanProducts: () => set({ products: [] }),
}))
