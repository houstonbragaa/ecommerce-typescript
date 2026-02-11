import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import HomePage from './pages/home-page'
import { auth } from './config/firebase'
import { Route, Routes, useNavigate } from 'react-router'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login')
      }
      console.log(user)
    })
    return () => unsubscribe()
  }, [navigate])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default App
