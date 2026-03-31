import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import CategoryCard from '../../components/home/category-card'

const renderComponent = () => {
  const categoryItem = {
    id: 'teste',
    name: 'teste',
    displayName: 'teste',
    imageUrl: 'teste',
    products: [],
  }
  render(
    <BrowserRouter>
      <CategoryCard category={categoryItem} />
    </BrowserRouter>
  )
}

describe('category-card', () => {
  it('should render the category item component correctly', () => {
    renderComponent()

    expect(screen.getByText('Ver coleção')).toBeInTheDocument()
  })
})
