import { CheckCheck, OctagonX } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

import Header from '../components/common/header'
import { LayoutContainer, LayoutContent } from '../layout/layout'

const PaymentConfirmPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const status = searchParams.get('success')
  const canceled = searchParams.get('canceled') === 'true'

  useEffect(() => {
    if (canceled) {
      navigate('/')
    }
  }, [navigate, canceled])

  return (
    <LayoutContainer>
      <LayoutContent>
        <Header />

        {status === 'true' && (
          <>
            <div className="flex h-[600px] w-full items-center justify-center">
              <div className="flex flex-col items-center gap-5">
                <CheckCheck size={78} color="green" />
                <p className="text-xl">
                  Boaa, sua compra foi efetuada com sucesso!
                </p>
              </div>
            </div>
          </>
        )}

        {status === 'false' && (
          <>
            <div className="flex h-[600px] w-full items-center justify-center">
              <div className="flex flex-col items-center gap-5">
                <OctagonX size={78} color="red" />
                <p className="text-xl">
                  Ops! Deu algo errado na sua tentativa de pagamento, tente
                  novamente!
                </p>
              </div>
            </div>
          </>
        )}
      </LayoutContent>
    </LayoutContainer>
  )
}

export default PaymentConfirmPage
