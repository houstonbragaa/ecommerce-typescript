import type React from 'react'

import { type DesktopLayout, type MobileCarouselProps } from './types'

const BASE_CLASSES =
  'flex w-full min-w-0 gap-8 overflow-x-auto scrollbar-hide max-md:snap-x max-md:snap-mandatory max-md:px-4'

const DESKTOP_LAYOUT_CLASSES: Record<DesktopLayout, string> = {
  flex: 'md:flex-wrap md:justify-center',
  grid: 'md:grid md:gap-8',
}

export const CAROUSEL_STYLE = {
  WebkitOverflowScrolling: 'touch',
} as React.CSSProperties

const MobileCarousel = ({
  children,
  desktopLayout = 'flex',
  desktopGridCols = 'md:grid-cols-2 lg:grid-cols-3',
  centerPaddingClass = 'max-md:pl-[calc(50vw-130px)] max-md:pr-[calc(50vw-130px)]',
  className = '',
}: MobileCarouselProps) => {
  const layoutClasses =
    desktopLayout === 'grid'
      ? `md:grid ${desktopGridCols}`
      : DESKTOP_LAYOUT_CLASSES.flex

  return (
    <div
      data-testid="mobile-carousel"
      className={`${BASE_CLASSES} ${layoutClasses} ${centerPaddingClass} ${className}`.trim()}
      style={CAROUSEL_STYLE}
    >
      {children}
    </div>
  )
}

export default MobileCarousel
