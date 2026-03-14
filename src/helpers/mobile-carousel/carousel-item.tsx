import type { ReactNode } from 'react'

interface CarouselItemProps {
  children: ReactNode
  /** Classe para min-width no mobile (ex: 'min-w-[260px]' ou 'min-w-[85vw]') */
  minWidth?: string
  /** Classes adicionais */
  className?: string
}

const CarouselItem = ({
  children,
  minWidth = 'max-md:min-w-[260px]',
  className = '',
}: CarouselItemProps) => {
  return (
    <div
      className={`flex max-md:shrink-0 max-md:snap-center ${minWidth} ${className}`.trim()}
    >
      {children}
    </div>
  )
}

export default CarouselItem
