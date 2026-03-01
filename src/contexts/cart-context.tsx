import { createContext, useState } from 'react'
import type { CartProduct } from '../types/cart-types'
import type { Product } from '../types/product-types'

interface ICartProvider {
  children: React.ReactNode
}

interface ICartContext {
  products: CartProduct[]
  isVisible: boolean
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductToCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  isVisible: false,
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductToCart: () => {},
})

const CartProvider = ({ children }: ICartProvider) => {
  const [products, setProducts] = useState<CartProduct[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: Product) => {
    const itemAlreadyExistsInCart = products.some(
      (item: CartProduct) => item.id === product.id
    )

    if (itemAlreadyExistsInCart) {
      const productItem = products.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      return setProducts(productItem)
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductToCart = (productId: string) => {
    const filtedProducts = products.filter((item) => item.id !== productId)
    return setProducts(filtedProducts)
  }

  return (
    <CartContext.Provider
      value={{
        products,
        isVisible,
        toggleCart,
        addProductToCart,
        removeProductToCart,
      }}
    >
      {children}x
    </CartContext.Provider>
  )
}

export default CartProvider
