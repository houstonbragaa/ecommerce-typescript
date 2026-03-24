//hook para inicialização e authenticação de usuário

import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'

import { auth, db } from '../config/firebase'
import { UserContext } from '../contexts/user-context'
import { userConverter } from '../converters/firestore.converter'

export const useAuth = () => {
  const [isInitialize, setIsInitialize] = useState(true)
  const { loginUser, isAuthenticated, logoutUser } = useContext(UserContext)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
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
    return () => unsubscribe()
  }, [isAuthenticated, logoutUser, loginUser])
  return { isInitialize }
}
