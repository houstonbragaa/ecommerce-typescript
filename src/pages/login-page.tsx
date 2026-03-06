import { useForm } from 'react-hook-form'
import CustomInput from '../components/common/custom-input'
import googleIcon from '../assets/google-icon.png'
import {
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
  type AuthError,
} from 'firebase/auth'
import { auth, db, googleProvider } from '../config/firebase'
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/user-context'
import Header from '../components/common/header'
import { LayoutContent } from '../layout/layout'

interface ILoginFormValues {
  email: string
  password: string
  userOrigin?: 'firebase' | 'google'
}

const LoginPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginFormValues>()

  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  const { isAuthenticated } = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

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

  const handleSignInWithGoogle = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider)
      const queryRef = collection(db, 'users')
      const querySnap = await getDocs(
        query(queryRef, where('id', '==', userCredentials.user.uid))
      )
      const user = querySnap.docs[0]?.data()
      console.log({ userCredentials })
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
      navigate('/')
      alert(`Ola ${userCredentials.user.displayName}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LayoutContent className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="flex w-full max-w-[450px] flex-col items-center gap-6 bg-transparent px-4">
          <h2 className="text-xl">Faça login para continuar</h2>
          <form
            onSubmit={handleSubmit(handleSubmitPress)}
            className="flex w-full flex-col items-center space-y-3"
          >
            <CustomInput
              placeholder="Email"
              hasError={!!emailError}
              errorMessage={emailError}
              {...register('email', { required: 'Email obrigatório' })}
            />
            <CustomInput
              placeholder="Senha"
              type="password"
              hasError={!!passwordError}
              errorMessage={passwordError}
              {...register('password', {
                required: 'Senha obrigatória',
              })}
            />
            <button
              type="submit"
              className="w-full cursor-pointer rounded-3xl bg-purple-950 px-4 py-2 hover:bg-purple-950/80"
            >
              Entrar
            </button>
            <a
              href="/signup"
              className="text-xs text-zinc-400 hover:text-purple-900"
            >
              Não tem uma conta? Crie uma
            </a>
            <div className="mt-8 h-px w-full bg-zinc-700"></div>
            <p className="text-zinc-600">Ou entre com o google</p>
            <button
              onClick={handleSignInWithGoogle}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/50 px-4 py-2"
            >
              Entrar com o google{' '}
              <img src={googleIcon} alt="google icon" className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
    </LayoutContent>
  )
}

export default LoginPage
