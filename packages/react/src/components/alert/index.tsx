import { Info } from 'phosphor-react'
import { Button } from '~/components/button'
import { Text } from '~/components/text'
import { AlertContainer, IconContainer, LeftContent } from './styles'
import { AlertProps } from './types'

export function Alert({
  text,
  colorSchema = 'info',
  onClick,
  buttonText,
}: AlertProps) {
  return (
    <AlertContainer colorSchema={colorSchema}>
      <LeftContent>
        <IconContainer>
          <Info />
        </IconContainer>

        <Text size="sm">{text}</Text>
      </LeftContent>

      {buttonText && (
        <Button colorSchema={colorSchema} onClick={onClick} size="sm">
          {buttonText}
        </Button>
      )}
    </AlertContainer>
  )
}

Alert.displayName = 'Alert'

export * from './types'
