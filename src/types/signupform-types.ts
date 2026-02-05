export interface SignupFormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  userOrigin: 'firebase' | 'google'
}
