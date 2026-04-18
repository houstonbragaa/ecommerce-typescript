import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import CategoryOverview from '../../components/explore/category-overview'
import type { Product } from '../../types/product-types'

const products: Product[] = [
  {
    id: '1',
    imageUrl: 'Image_url',
    name: 'creatina A',
    price: 100,
  },
  {
    id: '2',
    imageUrl: 'Image_url',
    name: 'creatina B',
    price: 150,
  },
  {
    id: '3',
    imageUrl: 'Image_url',
    name: 'creatina C',
    price: 200,
  },
  {
    id: '4',
    imageUrl: 'Image_url',
    name: 'creatina D',
    price: 300,
  },
  {
    id: '5',
    imageUrl: 'Image_url',
    name: 'creatina E',
    price: 400,
  },
]

describe('category-overview', () => {
  //deve renderizar o componente corretamente
  it('should render category overview component correctly', () => {
    render(
      <CategoryOverview
        categories={[
          {
            id: '123',
            displayName: 'suplemento',
            name: 'suplemento',
            imageUrl: 'img_url',
            products: products,
          },
        ]}
      />
    )

    expect(screen.getByText(/suplemento/i)).toBeInTheDocument()
    expect(screen.getByText('creatina D')).toBeInTheDocument()
    expect(screen.getByText('R$ 100.00')).toBeInTheDocument()
  })

  //deve renderizar apenas 4 produtos de cada categoria
  it('should render only 4 products of each category', () => {
    render(
      <CategoryOverview
        categories={[
          {
            id: '123',
            displayName: 'suplemento',
            name: 'suplemento',
            imageUrl: 'img_url',
            products: products,
          },
        ]}
      />
    )

    expect(screen.getByText('creatina D')).toBeInTheDocument() // quarto produto
    expect(screen.queryByText('creatina E')).not.toBeInTheDocument() //quinto produto
  })
})
