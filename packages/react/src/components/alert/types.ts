import type { ColorSchema } from '~/types'

export type AlertProps = {
  colorSchema?: ColorSchema
  onClick?: VoidFunction
  buttonText?: string
  text: string
}
