import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import CartItem from '../../components/cart/cart-item'
import { useCartStore } from '../../stores/cart-store'
import type { CartProduct } from '../../types/cart-types'

const Product: CartProduct = {
  id: '123',
  imageUrl: 'image_url',
  name: 'lorem',
  price: 12,
  quantity: 2,
}

vi.mock('../../stores/cart-store', () => ({
  useCartStore: vi.fn(),
}))

const mockedCartStore = vi.mocked(useCartStore)

describe('cart-item', () => {
  let cartState: { products: CartProduct[] }

  beforeEach(() => {
    cartState = {
      products: [{ ...Product }],
    }

    mockedCartStore.mockImplementation(() => ({
      increaseQuantityInCart: vi.fn((id: string) => {
        const product = cartState.products.find((p) => p.id === id)
        if (product) product.quantity += 1
      }),

      decreaseQuantityInCart: vi.fn((id: string) => {
        const product = cartState.products.find((p) => p.id === id)
        if (product) product.quantity -= 1
      }),

      removeProductToCart: vi.fn((id: string) => {
        cartState.products = cartState.products.filter((p) => p.id !== id)
      }),
    }))
  })

  //deve renderizar de forma correta
  it('should render cart item component correctly', () => {
    render(<CartItem product={Product} />)

    expect(screen.getByText('R$ 24,00')).toBeInTheDocument()
    expect(screen.getByText('lorem')).toBeInTheDocument()
    expect(screen.getByAltText('lorem')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  //deve aumentar a quantidade do produto
  it('should increase product quantity', async () => {
    render(<CartItem product={cartState.products[0]} />)

    const buttonIncrease = screen.getByLabelText('increase lorem')
    await userEvent.click(buttonIncrease)

    expect(cartState.products[0].quantity).toBe(3)
  })

  //deve diminuir a quantidade do produto
  it('should descrease product quantity', async () => {
    render(<CartItem product={cartState.products[0]} />)

    const buttonDecrease = screen.getByLabelText('decrease lorem')
    await userEvent.click(buttonDecrease)

    expect(cartState.products[0].quantity).toBe(1)
  })

  //deve excluir o produto do carrinho
  it('should remove product from cart', async () => {
    render(<CartItem product={cartState.products[0]} />)

    const buttonRemove = screen.getByLabelText('remove lorem')
    await userEvent.click(buttonRemove)

    expect(cartState.products).toHaveLength(0)
    expect(cartState.products.find((p) => p.id === Product.id)).toBeUndefined()
  })
})
