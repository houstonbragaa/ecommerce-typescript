import Checkout from '../components/checkout/checkout'
import Header from '../components/common/header'
import PurpleLights from '../components/common/light'
import AuthenticationGuard from '../guards/auth/authentication-guard'
import { LayoutContainer } from '../layout/layout'

const CheckoutPage = () => {
  return (
    <AuthenticationGuard>
      <LayoutContainer className="relative">
        <PurpleLights />
        <Header />
        <Checkout />
      </LayoutContainer>
    </AuthenticationGuard>
  )
}

export default CheckoutPage
