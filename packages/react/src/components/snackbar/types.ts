import type { ReactNode } from 'react'
import type { ColorSchema } from '~/types'

export type SnackbarProps = {
  title: string
  icon: ReactNode
  message?: string
  onClose?: VoidFunction
  onClick?: VoidFunction
  colorSchema?: ColorSchema
}
