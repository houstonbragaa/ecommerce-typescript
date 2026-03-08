import { useContext, useEffect, type ReactNode } from 'react'
import { UserContext } from '../../contexts/user-context'
import { useNavigate } from 'react-router'

//Uma forma de guardar uma rota, é como se este componente fosse um cadeado que priva tal pãgina
//caso esteja em volta de alguma pagina ou componente

interface IAuthenticationGuardProp {
  children: ReactNode
}

const AuthenticationGuard = ({ children }: IAuthenticationGuardProp) => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return <>{children}</>
}

export default AuthenticationGuard
