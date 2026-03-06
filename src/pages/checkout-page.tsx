import { useContext } from 'react'
import { LayoutContainer } from '../layout/layout'
import { UserContext } from '../contexts/user-context'
import LoginPage from './login-page'
import Header from '../components/common/header'
import Checkout from '../components/checkout/checkout'

const CheckoutPage = () => {
  const { isAuthenticated } = useContext(UserContext)

  if (!isAuthenticated) return <LoginPage />

  return (
    <LayoutContainer>
      <Header />
      <Checkout />
    </LayoutContainer>
  )
}

export default CheckoutPage
