import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { Button } from '~/components/button'
import type { ColorSchema } from '~/types'

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
      <Button onClick={handleClick} data-testid={testID}>
        Text
      </Button>,
    )

    fireEvent.click(getByTestId(testID), handleClick)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should set data-color-schema when has prop', async () => {
    const testID = 'colorSchemaBtn'
    const colorSchema: ColorSchema = 'info'

    const { getByTestId } = render(
      <Button data-testid={testID} colorSchema={colorSchema}>
        Text
      </Button>,
    )

    const element = getByTestId(testID)

    console.log('@@ element', element)

    expect(element).toHaveAttribute('data-color-schema', colorSchema)
  })
})
