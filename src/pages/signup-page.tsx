import { useForm } from 'react-hook-form'
import CustomInput from '../components/common/custom-input'
import {
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  type AuthError,
} from 'firebase/auth'
import { auth, db } from '../config/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { UserPlusIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/user-context'
import Header from '../components/common/header'
import { LayoutContent } from '../layout/layout'

export interface ISignupFormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  userOrigin: 'firebase' | 'google'
}

const SignupPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ISignupFormValues>()

  const { isAuthenticated } = useContext(UserContext)

  const firstnameError = errors.firstName?.message
  const lastnameError = errors.lastName?.message
  const emailError = errors.email?.message
  const passwordError = errors.password?.message
  const passwordConfirmationError = errors.passwordConfirmation?.message

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

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

  //console.log(errors)

  return (
    <LayoutContent className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="flex w-full max-w-[450px] flex-col items-center gap-6 bg-transparent px-4">
          <h2 className="text-xl">Crie uma conta</h2>
          <form
            onSubmit={handleSubmit(handleSubmitPress)}
            className="flex w-full flex-col items-center space-y-3"
          >
            <CustomInput
              placeholder="Nome"
              hasError={!!firstnameError}
              errorMessage={firstnameError}
              {...register('firstName', {
                required: 'Nome obrigatório',
                minLength: {
                  value: 4,
                  message: 'Nome precisa ter ao mínimo 4 caracteres',
                },
                maxLength: { value: 14, message: 'Máximo 14 caracteres' },
              })}
            />
            <CustomInput
              placeholder="Sobrenome"
              hasError={!!lastnameError}
              errorMessage={lastnameError}
              {...register('lastName', {
                required: 'Sobrenome obrigatório',
                minLength: {
                  value: 4,
                  message: 'Sobrenome precisa ter ao mínimo 4 caracteres',
                },
                maxLength: { value: 14, message: 'Máximo 14 caracteres' },
              })}
            />
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
            <CustomInput
              placeholder="Confirme sua senha"
              type="password"
              hasError={!!passwordConfirmationError}
              errorMessage={passwordConfirmationError}
              {...register('passwordConfirmation', {
                required: 'Confirme sua senha',
                validate: (value, formValues) =>
                  value === formValues.password ||
                  'As senhas precisam ser idênticas',
              })}
            />
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-3xl bg-purple-950 px-4 py-2 hover:bg-purple-950/80"
            >
              <UserPlusIcon className="h-4 w-4" />
              Cadastre-se
            </button>
            <a
              href="/login"
              className="text-xs text-zinc-400 hover:text-purple-900"
            >
              Já tenho uma conta
            </a>
          </form>
        </div>
      </div>
    </LayoutContent>
  )
}

export default SignupPage
