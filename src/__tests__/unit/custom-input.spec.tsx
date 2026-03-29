import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import CustomInput from '../../components/common/custom-input'

describe('custom-input', () => {
  it('should type correctly', async () => {
    render(<CustomInput hasError={false} />)

    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'hello world')

    expect(input).toHaveValue('hello world')
  })

  it('should show error message when hasError is true', () => {
    render(<CustomInput hasError={true} errorMessage="lorem ipsum" />)

    expect(screen.getByText('lorem ipsum')).toBeInTheDocument()
  })

  it('should not show error message when hasError is false', () => {
    render(<CustomInput hasError={false} errorMessage="lorem ipsum" />)

    expect(screen.queryByText('lorem ipsum')).not.toBeInTheDocument()
  })

  it('should apply error class when hasError is true', () => {
    render(<CustomInput hasError={true} errorMessage="lorem ipsum" />)

    expect(screen.getByText('lorem ipsum')).toHaveClass('text-red-500/50')
  })
})
