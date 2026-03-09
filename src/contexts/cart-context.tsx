import { createContext, useEffect, useMemo, useState } from 'react'

import type { CartProduct } from '../types/cart-types'
import type { Product } from '../types/product-types'

interface ICartProvider {
  children: React.ReactNode
}

interface ICartContext {
  products: CartProduct[]
  isVisible: boolean
  totalPrice: number
  totalItemsCart: number
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductToCart: (productId: string) => void
  increaseQuantityInCart: (productId: string) => void
  decreaseQuantityInCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  isVisible: false,
  totalPrice: 0,
  totalItemsCart: 0,
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductToCart: () => {},
  increaseQuantityInCart: () => {},
  decreaseQuantityInCart: () => {},
})

const CartProvider = ({ children }: ICartProvider) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>(() => {
    try {
      const stored = localStorage.getItem('cartProducts')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // persistir items no localstorage
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  //abrir e fechar carrinho

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  //adicionar o produto ao carrinho

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

  //pegar o total do valor da compra

  const totalPrice: number = useMemo(() => {
    const resultTotalPrice = products.reduce(
      (acc, currentProduct) =>
        acc + currentProduct.price * currentProduct.quantity,
      0
    )
    return resultTotalPrice
  }, [products])

  //pegar o total de items no carrinho

  const totalItemsCart: number = useMemo(() => {
    const resultTotalItems = products.reduce(
      (acc, currentItem) => acc + currentItem.quantity,
      0
    )
    return resultTotalItems
  }, [products])

  //remover item do carrinho

  const removeProductToCart = (productId: string) => {
    const filtedProducts = products.filter((item) => item.id !== productId)
    return setProducts(filtedProducts)
  }

  //aumentar item do carrinho

  const increaseQuantityInCart = (productId: string) => {
    const increaseQuantity = products.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
    setProducts(increaseQuantity)
  }

  //diminuir item do carrinho

  const decreaseQuantityInCart = (productId: string) => {
    const decreaseQuantity = products
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
    setProducts(decreaseQuantity)
  }

  return (
    <CartContext.Provider
      value={{
        products,
        isVisible,
        totalPrice,
        totalItemsCart,
        toggleCart,
        addProductToCart,
        removeProductToCart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
