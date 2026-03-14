import type { ReactNode } from 'react'

export type DesktopLayout = 'flex' | 'grid'

export interface MobileCarouselProps {
  children: ReactNode

  desktopLayout?: DesktopLayout

  desktopGridCols?: string

  centerPaddingClass?: string

  className?: string
}
