import { useForm } from 'react-hook-form'
import CustomInput from '../components/common/custom-input'
import googleIcon from '../assets/google-icon.png'
import type { LoginFormValues } from '../types/loginform-types'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  const handleSubmitPress = async (data: LoginFormValues) => {
    try {
      const userCredentials = signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log(userCredentials)
    } catch (error) {
      console.log(error)
    }
  }

  //console.log(errors)

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-[300px] w-[450px] flex-col items-center gap-6 bg-transparent">
        <h2 className="text-xl">Faça login para continuar</h2>
        <form
          onSubmit={handleSubmit(handleSubmitPress)}
          className="flex flex-col items-center space-y-3"
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
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/50 px-4 py-2">
            Entrar com o google{' '}
            <img src={googleIcon} alt="google icon" className="h-6 w-6" />
          </button>
        </form>
        <div>
          <h1>Email do usuario</h1>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
