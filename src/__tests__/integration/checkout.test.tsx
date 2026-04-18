import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import Checkout from '../../components/checkout/checkout'
import { selectTotalPrice, useCartStore } from '../../stores/cart-store'

vi.mock('../../stores/cart-store', () => ({
  useCartStore: vi.fn(),
  selectTotalPrice: vi.fn(),
}))

const mockedCartStore = vi.mocked(useCartStore)

const mockProducts = [
  {
    id: '1',
    name: 'Produto A',
    price: 100,
    imageUrl: 'image_url',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Produto B',
    price: 200,
    imageUrl: 'image_url',
    quantity: 2,
  },
]

describe('checkout', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  //deve renderizar com produtos
  it('should render ckeckout component correctly with products', () => {
    mockedCartStore.mockImplementation((selector) => {
      if (selector === selectTotalPrice) return 500
      return mockProducts
    })

    render(<Checkout />)

    expect(screen.getByText(/checkout/i)).toBeInTheDocument()
    expect(screen.getByTestId('cart-total-price')).toHaveTextContent(
      'R$ 500.00'
    )
  })

  //deve aparecer mensagem de carrinho vazio
  it('should message checkout empty', () => {
    mockedCartStore.mockImplementation((selector) => {
      if (selector === selectTotalPrice) return 0
      return []
    })

    render(<Checkout />)

    expect(screen.getByText('O carrinho está vazio!')).toBeInTheDocument()
  })
})
