import { signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { auth, db, googleProvider } from '../config/firebase'
import { UserContext } from '../contexts/user-context'

export const useLoginWithGoogle = () => {
  const { loginUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSignInWithGoogle = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider)
      const queryRef = collection(db, 'users')
      const querySnap = await getDocs(
        query(queryRef, where('id', '==', userCredentials.user.uid))
      )
      const user = querySnap.docs[0]?.data()
      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]
        await addDoc(queryRef, {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          userOrigin: 'google',
        })
      }

      loginUser({
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: userCredentials.user.displayName?.split(' ')[0],
        lastName: userCredentials.user.displayName?.split(' ')[0],
        photoURL: userCredentials.user.photoURL,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return handleSignInWithGoogle
}
