import { forwardRef, type ComponentProps, type ForwardedRef } from 'react'
import { TextInputContainer, Prefix, Input } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export function InputComponent(
  { prefix, ...props }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} ref={ref} />
    </TextInputContainer>
  )
}

export const TextInput = forwardRef(InputComponent)

TextInput.displayName = 'TextInput'
