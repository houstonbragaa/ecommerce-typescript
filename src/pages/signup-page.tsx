import { UserPlusIcon } from 'lucide-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'

import CustomInput from '../components/common/custom-input'
import Header from '../components/common/header'
import { UserContext } from '../contexts/user-context'
import { useSignupForm } from '../hooks/useSignupForm'
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
  const { isAuthenticated } = useContext(UserContext)
  const { errors, handleSubmit, handleSubmitPress, register } = useSignupForm()

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

  //console.log(errors)

  return (
    <LayoutContent className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="flex w-full max-w-[340px] flex-col items-center gap-6 bg-transparent">
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
