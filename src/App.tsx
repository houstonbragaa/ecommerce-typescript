import { Route, Routes } from 'react-router'

import Cart from './components/cart/cart'
import { useAuth } from './hooks/useAuth'
import CategoryDetailsPage from './pages/category-details-page'
import CheckoutPage from './pages/checkout-page'
import ExplorePage from './pages/explore-page'
import HomePage from './pages/home-page'
import LoaderPage from './pages/loader-page'
import LoginPage from './pages/login-page'
import PaymentConfirmPage from './pages/payment-confirm-page'
import SignupPage from './pages/signup-page'

const App = () => {
  const { isInitialize } = useAuth()

  if (isInitialize) return <LoaderPage />

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmPage />} />
      </Routes>
      <Cart />
    </>
  )
}

export default App
