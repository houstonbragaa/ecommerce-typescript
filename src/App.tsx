import { useContext, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import HomePage from './pages/home-page'
import { auth, db } from './config/firebase'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import { UserContext } from './contexts/user-context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converter'
import LoaderPage from './pages/loader'

const App = () => {
  const [isInitialize, setIsInitialize] = useState(true)
  //const [isLoading, setIsLoading] = useState(false)
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

      loginUser(userFromFirestore)
      return setIsInitialize(false)
    }
    setIsInitialize(false)
  })

  if (isInitialize) return <LoaderPage />

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default App
