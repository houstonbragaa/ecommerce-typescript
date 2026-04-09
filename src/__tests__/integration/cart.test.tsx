import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import Cart from '../../components/cart/cart'
import {
  selectTotalItems,
  selectTotalPrice,
  useCartStore,
} from '../../stores/cart-store'

const Products = [
  {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    imageUrl: faker.image.url(),
    price: 10,
    quantity: 1,
  },
  {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    imageUrl: faker.image.url(),
    price: 10,
    quantity: 2,
  },
]
//mocks
const mockNavigate = vi.fn()

vi.mock(import('react-router'), async (importOriginal) => {
  const actual = await importOriginal()

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

const renderComponent = () => render(<Cart />)

//render do componente para usar nos testes
const renderComponentWithBrowser = () =>
  render(
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  )

//testes
describe('cart', () => {
  //seta todos os necessarios
  beforeEach(() => {
    useCartStore.setState({
      products: Products,
      isVisible: true,
      toggleCart: vi.fn(),
    })
  })

  //deve calcular o total de produtos no carrinho
  it('should to sum the quantity itens in cart', () => {
    const mockProducts = {
      products: Products,
    } as any

    const totalQuantity = selectTotalItems(mockProducts)
    const totalPrice = selectTotalPrice(mockProducts)

    expect(totalQuantity).toBe(3)
    expect(totalPrice).toBe(30)
  })

  //deve renderizar o cart componente corretamente
  it('should to render the cart component correctly with products', () => {
    renderComponentWithBrowser()
    expect(screen.getByText(/meu carrinho/i)).toBeInTheDocument()
    expect(screen.getByText('X')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /fechar pedido/i })
    ).toBeInTheDocument()
  })

  //deve chamar o useNavigate para redirecionar para outra pagina checkout
  it('should to call useNavigate to click button', async () => {
    renderComponent()

    const buttonCheckout = screen.getByRole('button', {
      name: /fechar pedido/i,
    })

    await userEvent.click(buttonCheckout)
    expect(mockNavigate).toHaveBeenCalledWith('/checkout')
  })

  //deve mostrar mensagem de carrinho vazio e botão ausente
  it('should to show empty message and not show button', () => {
    useCartStore.setState({
      products: [],
    })
    renderComponentWithBrowser()

    expect(screen.getByText(/Seu carrinho está vazio/))
    expect(
      screen.queryByRole('button', { name: /fechar pedido/i })
    ).not.toBeInTheDocument()
  })

  //deve fechar o carrinho ao clicar no X
  it('should close cart to click in the button X', async () => {
    const mockToggleCart = vi.fn()
    useCartStore.setState({
      toggleCart: mockToggleCart,
    })
    renderComponentWithBrowser()

    const button = screen.getByRole('button', { name: 'X' })

    await userEvent.click(button)
    expect(mockToggleCart).toHaveBeenCalled()
  })
})
