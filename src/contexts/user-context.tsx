import { createContext, useState } from 'react'
import type { User } from '../types/user-types'

interface IUserProvider {
  children: React.ReactNode
}

interface IUserContext {
  currentUser: User | null
  loginUser: (user: any) => void
  logoutUser: () => void
  isAuthenticated: boolean
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  loginUser: () => {},
  logoutUser: () => {},
  isAuthenticated: false,
})

export const UserProvider = ({ children }: IUserProvider) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthenticated = currentUser !== null

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, loginUser, logoutUser, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  )
}
