import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { CartProduct } from '../types/cart-types'
import type { Product } from '../types/product-types'

interface ICartStore {
  products: CartProduct[]
  isVisible: boolean
  toggleCart: () => void
  cleanProducts: () => void
  addProductToCart: (product: Product) => void
  removeProductToCart: (productId: string) => void
  increaseQuantityInCart: (productId: string) => void
  decreaseQuantityInCart: (productId: string) => void
}

export const selectTotalPrice = (state: ICartStore) =>
  state.products.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  )

export const selectTotalItems = (state: ICartStore) =>
  state.products.reduce((acc, current) => acc + current.quantity, 0)

export const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      products: [],
      isVisible: false,
      toggleCart: () => set((state) => ({ isVisible: !state.isVisible })),
      cleanProducts: () => set({ products: [] }),
      addProductToCart: (product) => {
        const { products } = get()
        const alreadyInCart = products.some((item) => item.id === product.id)

        if (alreadyInCart) {
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
        const { products } = get()
        set({ products: products.filter((item) => item.id !== productId) })
      },
      increaseQuantityInCart: (productId) => {
        const { products } = get()
        set({
          products: products.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })
      },
      decreaseQuantityInCart: (productId) => {
        const { products } = get()

        set({
          products: products
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })
      },
    }),
    {
      name: 'cart-products',
      partialize: (state) => ({ products: state.products }),
    }
  )
)
