import type { ElementType, ReactNode } from 'react'
import { styled } from '~/styles'

export type BoxProps = {
  children: ReactNode
  as?: ElementType
}

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})
