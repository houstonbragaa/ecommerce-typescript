import { useContext } from 'react'
import { LayoutContainer } from '../layout/layout'
import { UserContext } from '../contexts/user-context'
import LoginPage from './login-page'

const CheckoutPage = () => {
  const { isAuthenticated } = useContext(UserContext)

  if (!isAuthenticated) return <LoginPage />

  return (
    <LayoutContainer>
      <h1>checkout page</h1>
    </LayoutContainer>
  )
}

export default CheckoutPage
