import Checkout from '../components/checkout/checkout'
import Footer from '../components/common/footer'
import Header from '../components/common/header'
import AuthenticationGuard from '../guards/auth/authentication-guard'
import { LayoutContainer } from '../layout/layout'

const CheckoutPage = () => {
  return (
    <AuthenticationGuard>
      <LayoutContainer>
        <Header />
        <Checkout />
        <Footer />
      </LayoutContainer>
    </AuthenticationGuard>
  )
}

export default CheckoutPage
