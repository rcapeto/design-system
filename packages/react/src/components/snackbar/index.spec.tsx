import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { Info } from 'phosphor-react'
import { Snackbar } from '~/components/snackbar'

describe('Snackbar', () => {
  const viewButtonTestID = 'snackbar:view-button'
  const closeButtonTestID = 'snackbar:close-button'
  const iconTestID = 'snackbar:icon-container'
  const snackbarTitle = 'any-title'
  const snackbarMessage = 'any-message'

  beforeEach(() => {
    cleanup()
  })

  it('should render IconContainer when icon is provided', async () => {
    const { findByTestId } = render(
      <Snackbar
        icon={<Info />}
        title={snackbarTitle}
        message={snackbarMessage}
      />,
    )

    const iconContainer = await findByTestId(iconTestID)

    expect(iconContainer).toBeInTheDocument()
  })

  it('should render view button when onClick is provided', async () => {
    const handler = jest.fn()

    const { findByTestId } = render(
      <Snackbar
        icon={<Info />}
        title={snackbarTitle}
        message={snackbarMessage}
        onClick={handler}
      />,
    )

    const viewButton = await findByTestId(viewButtonTestID)

    expect(viewButton).toBeInTheDocument()
  })

  it('should render close button when onClose is provided', async () => {
    const handler = jest.fn()

    const { findByTestId } = render(
      <Snackbar
        icon={<Info />}
        title={snackbarTitle}
        message={snackbarMessage}
        onClose={handler}
      />,
    )

    const closeButton = await findByTestId(closeButtonTestID)

    expect(closeButton).toBeInTheDocument()
  })
})
