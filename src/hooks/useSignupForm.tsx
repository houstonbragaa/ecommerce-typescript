import {
  type AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { auth, db } from '../config/firebase'

export interface ISignupFormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  userOrigin: 'firebase' | 'google'
}

export const useSignupForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ISignupFormValues>()

  const handleSubmitPress = async (data: ISignupFormValues) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName,
        userOrigin: 'firebase',
      })
      navigate('/')
    } catch (error) {
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError('email', { message: 'Email existente' })
      }

      if (_error.code === AuthErrorCodes.INVALID_EMAIL) {
        setError('email', { message: 'Email inválido' })
      }
    }
  }

  return {
    handleSubmitPress,
    register,
    handleSubmit,
    errors,
  }
}
