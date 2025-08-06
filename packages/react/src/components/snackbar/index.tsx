import { X } from 'phosphor-react'
import { Button } from '~/components/button'
import { Text } from '~/components/text'
import {
  ButtonClose,
  ButtonCloseContainer,
  IconContainer,
  SnackbarContainer,
  SnackbarLeftContent,
  SnackbarRightContent,
  TextContainer,
} from './styles'
import type { SnackbarProps } from './types'

export function Snackbar({
  colorSchema = 'info',
  icon,
  title,
  message,
  onClick,
  onClose,
}: SnackbarProps) {
  const viewButtonTestID = 'snackbar:view-button'
  const closeButtonTestID = 'snackbar:close-button'
  const iconTestID = 'snackbar:icon-container'

  return (
    <SnackbarContainer
      data-color-schema={colorSchema}
      colorSchema={colorSchema}
    >
      <SnackbarLeftContent>
        {icon && <IconContainer data-testid={iconTestID}>{icon}</IconContainer>}

        <TextContainer>
          <Text size="lg" css={{ color: '$white', fontWeight: '$medium' }}>
            {title}
          </Text>
          {!!message && (
            <Text size="sm" css={{ color: '$white' }}>
              {message}
            </Text>
          )}
        </TextContainer>
      </SnackbarLeftContent>

      <SnackbarRightContent>
        {!!onClick && (
          <Button
            size="sm"
            variant="tertiary"
            onClick={onClick}
            data-testid={viewButtonTestID}
          >
            View
          </Button>
        )}

        {!!onClose && (
          <ButtonCloseContainer>
            <ButtonClose onClick={onClose} data-testid={closeButtonTestID}>
              <X />
            </ButtonClose>
          </ButtonCloseContainer>
        )}
      </SnackbarRightContent>
    </SnackbarContainer>
  )
}

Snackbar.displayName = 'Snackbar'

export * from './types'
