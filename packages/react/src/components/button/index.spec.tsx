import '@testing-library/jest-dom'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { Button } from '~/components/button'
import type { ColorSchema } from '~/types'

describe('Button', () => {
  beforeEach(() => {
    cleanup()
  })

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
    const testID = 'any-test-id'

    const { findByTestId } = render(
      <Button>
        <p data-testid={testID}>Example</p>
      </Button>,
    )

    const element = await findByTestId(testID)

    expect(element).toBeInTheDocument()
  })

  it('should be able to be pressed', () => {
    const handleClick = jest.fn()
    const testID = 'any-test-id'

    const { getByTestId } = render(
      <Button onClick={handleClick} data-testid={testID}>
        Text
      </Button>,
    )

    fireEvent.click(getByTestId(testID), handleClick)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should set data-color-schema when has prop', async () => {
    const testID = 'any-test-id'
    const colorSchema: ColorSchema = 'info'

    const { getByTestId } = render(
      <Button data-testid={testID} colorSchema={colorSchema}>
        Text
      </Button>,
    )

    const element = getByTestId(testID)

    expect(element).toHaveAttribute('data-color-schema', colorSchema)
  })
})
