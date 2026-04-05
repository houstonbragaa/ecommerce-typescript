import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import Header from '../../components/common/header'
import { UserContext } from '../../contexts/user-context'
import { useCartStore } from '../../stores/cart-store'

const mockNavigate = vi.fn()

vi.mock('react-router', () => ({ useNavigate: () => mockNavigate }))
vi.mock('../../config/firebase', () => ({ auth: {} as any }))
vi.mock('firebase/auth', () => ({ signOut: vi.fn() }))
vi.mock('../../stores/cart-store', () => ({
  useCartStore: vi.fn(),
  selectTotalItems: vi.fn(),
}))

const mockedUserCartStore = vi.mocked(useCartStore)

const renderWithContext = (
  isAuthenticated = false,
  currentUser = null,
  toggleCart = vi.fn()
) => {
  mockedUserCartStore.mockImplementation((selector?: unknown) =>
    selector ? 3 : { toggleCart }
  )

  render(
    <UserContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        loginUser: vi.fn(),
        logoutUser: vi.fn(),
      }}
    >
      <Header />
    </UserContext.Provider>
  )
}

describe('header', () => {
  it('should to render the component correctly', () => {
    renderWithContext(false)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should to show the link login when is not authenticated', () => {
    renderWithContext(false)

    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
    expect(screen.queryByText('sair')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'open cart' })
    ).not.toBeInTheDocument()
  })

  it('should to show the button sair when is authenticated', () => {
    renderWithContext(true)

    expect(screen.getByRole('button', { name: 'Sair' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'open cart' }))
  })

  it('should to toggle cart with the cart shopping icon button', async () => {
    const mockToggleCart = vi.fn()

    mockedUserCartStore.mockImplementation((selector?: unknown) =>
      selector ? 3 : { toggleCart: mockToggleCart }
    )

    renderWithContext(true, null, mockToggleCart())
    await userEvent.click(screen.getByRole('button', { name: 'open cart' }))

    expect(mockToggleCart).toHaveBeenCalled()
  })
})
