import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import ProductItem from '../../components/common/product-item'
import { useCartStore } from '../../stores/cart-store'
import type { Product } from '../../types/product-types'

const product: Product = {
  id: '123',
  imageUrl: 'image_url',
  name: 'lorem',
  price: 120,
}

vi.mock('../../stores/cart-store', () => ({
  useCartStore: vi.fn(),
}))

const mockedCartStore = vi.mocked(useCartStore)

describe('product-item', () => {
  beforeEach(() => {
    mockedCartStore.mockImplementation((selector) =>
      selector({ addProductToCart: vi.fn() } as any)
    )
  })

  it('should to show product item correctly', () => {
    render(<ProductItem product={product} />)

    expect(screen.getByText('lorem')).toBeInTheDocument()
    expect(screen.getByText('R$ 120.00'))
    expect(screen.getByAltText('lorem')).toHaveAttribute('src', 'image_url')
    expect(
      screen.getByRole('button', { name: 'Adicionar ao carrinho' })
    ).toBeInTheDocument()
  })

  it('should add product to cart', async () => {
    const mockAddProduct = vi.fn()

    mockedCartStore.mockImplementation((selector) =>
      selector({ addProductToCart: mockAddProduct } as any)
    )

    render(<ProductItem product={product} />)

    const btnAddProduct = screen.getByRole('button', {
      name: 'Adicionar ao carrinho',
    })
    await userEvent.click(btnAddProduct)

    expect(mockAddProduct).toHaveBeenCalled()
  })
})
