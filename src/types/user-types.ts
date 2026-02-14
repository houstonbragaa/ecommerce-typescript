export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  userOrigin: 'firebase' | 'google'
}
