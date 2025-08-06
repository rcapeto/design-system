import type { ElementType, ReactNode } from 'react'
import type { ColorSchema } from '~/types'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'md' | 'sm'

export type ButtonProps = {
  children: ReactNode
  as?: ElementType
  size?: ButtonSize
  variant?: ButtonVariant
  disabled?: boolean
  onClick?: VoidFunction
  colorSchema?: ColorSchema
}
