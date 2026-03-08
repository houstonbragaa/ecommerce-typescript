import { LayoutContainer } from '../layout/layout'
import Header from '../components/common/header'
import Checkout from '../components/checkout/checkout'
import Footer from '../components/common/footer'
import AuthenticationGuard from '../guards/auth/authentication-guard'

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
