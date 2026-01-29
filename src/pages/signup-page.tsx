import { useForm } from 'react-hook-form'
import CustomInput from '../components/common/custom-input'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../config/firebase'
import { addDoc, collection } from 'firebase/firestore'

interface SignupForm {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>()

  const firstnameError = errors.firstName?.message
  const lastnameError = errors.lastName?.message
  const emailError = errors.email?.message
  const passwordError = errors.password?.message
  const passwordConfirmationError = errors.passwordConfirmation?.message

  const handleSubmitPress = async (data: SignupForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      const userCreated = addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName,
      })
      console.log(userCreated)
    } catch (error) {
      console.log(error)
    }
  }

  //console.log(errors)

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-[300px] w-[450px] flex-col items-center justify-center gap-6 bg-transparent">
        <h2 className="text-xl">Crie uma conta</h2>
        <form
          onSubmit={handleSubmit(handleSubmitPress)}
          className="flex flex-col items-center space-y-3"
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
            className="w-full cursor-pointer rounded-3xl bg-purple-950 px-4 py-2 hover:bg-purple-950/80"
          >
            Entrar
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
  )
}

export default SignupPage
