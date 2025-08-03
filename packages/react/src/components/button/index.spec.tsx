import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { Button } from '~/components/button'

describe('Button', () => {
  it('should find children by text', async () => {
    const buttonText = 'any-text'

    const { findByText } = render(
      <Button>
        <p>{buttonText}</p>
      </Button>,
    )

    const element = await findByText(buttonText)

    expect(element).toBeInTheDocument()
  })

  it('should find children by test ID', async () => {
    const testId = 'any-test-id'

    const { findByTestId } = render(
      <Button>
        <p data-testid={testId}>Example</p>
      </Button>,
    )

    const element = await findByTestId(testId)

    expect(element).toBeInTheDocument()
  })

  it('should be able to be pressed', () => {
    const handleClick = jest.fn()
    const testID = 'testID'

    const { getByTestId } = render(
      <Button onClick={handleClick} data-testid={testID} />,
    )

    fireEvent.click(getByTestId(testID), handleClick)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
