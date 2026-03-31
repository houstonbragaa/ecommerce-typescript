import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CarouselItem, MobileCarousel } from '../../helpers/mobile-carousel'

describe('carousel-item', () => {
  it('should to render the carousel-item component correctly', () => {
    render(<CarouselItem>Hello world</CarouselItem>)

    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })
})

//carousel mobile

describe('carousel-mobile', () => {
  it('should to render the carousel-mobile component correctly', () => {
    render(<MobileCarousel>Hello world</MobileCarousel>)

    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('should to have mobile layout by props', () => {
    render(<MobileCarousel>Hello world</MobileCarousel>)

    expect(screen.getByTestId('mobile-carousel')).toHaveClass('overflow-x-auto')
  })
})
