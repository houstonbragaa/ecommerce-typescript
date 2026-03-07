export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  photoURL?: string | null
  userOrigin: 'firebase' | 'google'
}
