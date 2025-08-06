import '@testing-library/jest-dom'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { Alert } from '~/components/alert'

describe('Alert', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render button when buttonText is provided', async () => {
    const buttonText = 'any-text'
    const text = 'any-alert-text'

    const { findByRole } = render(<Alert text={text} buttonText={buttonText} />)

    const element = await findByRole('button')

    expect(element).toBeInTheDocument()
  })

  it('should be able to click in button when button text is provided and onClick', async () => {
    const buttonText = 'any-text'
    const text = 'any-alert-text'
    const handleClick = jest.fn()

    const { findByRole } = render(
      <Alert text={text} buttonText={buttonText} onClick={handleClick} />,
    )

    const button = await findByRole('button')

    fireEvent.click(button, handleClick)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
