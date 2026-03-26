import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'

import googleIcon from '../assets/google-icon.png'
import CustomInput from '../components/common/custom-input'
import Header from '../components/common/header'
import { UserContext } from '../contexts/user-context'
import { useLoginForm } from '../hooks/useLoginForm'
import { useLoginWithGoogle } from '../hooks/useLoginWithGoogle'
import { LayoutContent } from '../layout/layout'

const LoginPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, handleSubmitPress, errors } = useLoginForm()
  const handleSignInWithGoogle = useLoginWithGoogle()
  const { isAuthenticated } = useContext(UserContext)

  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
  //google login

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
