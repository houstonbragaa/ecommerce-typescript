import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { collection, getDocs } from 'firebase/firestore'
import { describe, expect, it, vi } from 'vitest'

import CategoryDetails from '../../components/category-details/category-details'

const mockCategory = {
  id: '1',
  displayName: 'creatina',
  name: 'suplementos',
  imageUrl: 'image_url',
  products: [],
}

const mockNavigate = vi.fn()
vi.mock('react-router', () => ({ useNavigate: () => mockNavigate }))

vi.mock('firebase/firestore', () => ({
  getDocs: vi.fn(),
  query: vi.fn(),
  collection: vi.fn(),
  where: vi.fn(),
}))

vi.mock('../../config/firebase', () => ({ db: {} }))

vi.mock('../../converters/firestore.converter', () => ({
  categoryConverter: {},
}))

vi.mock('../../pages/loader-page', () => ({
  default: () => <div data-testid="loader-test" />,
}))

const mockFirestoreWithCategory = () => {
  vi.mocked(collection).mockImplementation(
    () =>
      ({
        withConverter: () => {},
      }) as any
  )
  //query.docs[0].data()
  vi.mocked(getDocs).mockResolvedValue({
    docs: [
      {
        data: () => mockCategory,
      },
    ],
  } as any)
}

describe('category-details', () => {
  it('should render component correctly', async () => {
    mockFirestoreWithCategory()

    render(<CategoryDetails categoryId={mockCategory.id} />)

    const displayName = await screen.findByText('creatina')

    expect(displayName).toBeInTheDocument()
  })

  it('should render loading component when to wait loader category', () => {
    vi.mocked(collection).mockImplementation(
      () =>
        ({
          withConverter: () => {},
        }) as any
    )

    vi.mocked(getDocs).mockImplementation(() => new Promise(() => {}))

    render(<CategoryDetails categoryId={mockCategory.id} />)

    expect(screen.getByTestId('loader-test')).toBeInTheDocument()
  })

  it('should back the page when the ChevronLeft is called', async () => {
    mockFirestoreWithCategory()

    render(<CategoryDetails categoryId={mockCategory.id} />)

    await screen.findByText('creatina')
    const buttonBack = screen.getByTestId('back')
    await userEvent.click(buttonBack)
    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })
})
