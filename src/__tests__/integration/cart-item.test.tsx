import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import CartItem from '../../components/cart/cart-item'
import { useCartStore } from '../../stores/cart-store'
import type { CartProduct } from '../../types/cart-types'

const Product: CartProduct = {
  id: '3',
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
  beforeEach(() => {
    mockedCartStore.mockReturnValue({
      increaseQuantityInCart: vi.fn(),
      decreaseQuantityInCart: vi.fn(),
      removeProductToCart: vi.fn(),
    })
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
    const mockedIncrease = vi.fn()
    mockedCartStore.mockReturnValue({
      increaseQuantityInCart: mockedIncrease,
    })

    render(<CartItem product={Product} />)
    const buttonIncrease = screen.getByRole('button', { name: 'increase' })
    await userEvent.click(buttonIncrease)
    expect(mockedIncrease).toHaveBeenCalled()
  })

  //deve diminuir a quantidade do produto

  //deve excluir o produto do carrinho
})
