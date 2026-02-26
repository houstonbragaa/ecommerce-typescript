import { createContext, useState } from 'react'
import type { CartProduct } from '../types/cart-types'

interface ICartProvider {
  children: React.ReactNode
}

interface ICartContext {
  product: CartProduct[]
  isVisible: boolean
  toggleCart: () => void
}

export const CartContext = createContext<ICartContext>({
  product: [],
  isVisible: false,
  toggleCart: () => {},
})

const CartProvider = ({ children }: ICartProvider) => {
  const [product] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  //criar funcao para adicionar ao carrinho o produto

  return (
    <CartContext.Provider value={{ product, isVisible, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
