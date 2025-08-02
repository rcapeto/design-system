import type { ComponentProps } from 'react'
import { TextArea as Component } from './styles'

export type TextAreaProps = ComponentProps<typeof Component>

export function TextArea(props: TextAreaProps) {
  return <Component {...props} />
}

TextArea.displayName = 'TextArea'
