import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import Cart from '../../components/cart/cart'
import { selectTotalItems } from '../../stores/cart-store'

describe('cart', () => {
  //deve calcular o total de produtos no carrinho
  it('should to sum the quantity itens in cart', () => {
    const mockProducts = {
      products: [
        {
          id: faker.string.uuid(),
          name: faker.person.firstName(),
          imageUrl: faker.image.url(),
          price: faker.number.float(),
          quantity: 4,
        },
        {
          id: faker.string.uuid(),
          name: faker.person.firstName(),
          imageUrl: faker.image.url(),
          price: faker.number.float(),
          quantity: 7,
        },
      ],
    } as any

    const totalQuantity = selectTotalItems(mockProducts)

    expect(totalQuantity).toBe(11)
  })

  //deve renderizar o cart componente corretamente
  it('should to render the cart component correctly', () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    )
    expect(screen.getByText(/meu carrinho/i)).toBeInTheDocument()
  })
})
