import {
  type AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { auth } from '../config/firebase'

interface ILoginFormValues {
  email: string
  password: string
}

export const useLoginForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginFormValues>()

  const handleSubmitPress = async (data: ILoginFormValues) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      navigate('/')
    } catch (error) {
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        setError('password', { message: 'Email ou senha inválidos' })
      }
    }
  }

  return { handleSubmitPress, register, handleSubmit, errors }
}
