import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router'

import Cart from './components/cart/cart'
import { auth, db } from './config/firebase'
import { UserContext } from './contexts/user-context'
import { userConverter } from './converters/firestore.converter'
import CategoryDetailsPage from './pages/category-details-page'
import CheckoutPage from './pages/checkout-page'
import ExplorePage from './pages/explore-page'
import HomePage from './pages/home-page'
import LoaderPage from './pages/loader-page'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'

const App = () => {
  const [isInitialize, setIsInitialize] = useState(true)
  const { loginUser, isAuthenticated, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    if (isAuthenticated && !user) {
      logoutUser()
      return setIsInitialize(false)
    }

    if (!isAuthenticated && user) {
      const userSnapShot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      )
      const userFromFirestore = userSnapShot.docs[0]?.data()

      loginUser({
        ...userFromFirestore,
        photoURL: user.photoURL,
      })
      return setIsInitialize(false)
    }
    setIsInitialize(false)
  })

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
      </Routes>
      <Cart />
    </>
  )
}

export default App
