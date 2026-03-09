import { BallTriangle } from 'react-loader-spinner'

import { LayoutContent } from '../layout/layout'

const LoaderPage = () => {
  return (
    <LayoutContent className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950/50">
      <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#a78bfa"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LayoutContent>
  )
}

export default LoaderPage
