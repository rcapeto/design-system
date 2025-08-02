import type { ElementType, ReactNode } from 'react'
import { styled } from '~/styles'

const sizes = {
  xxs: { fontSize: '$xxs' },
  xs: { fontSize: '$xs' },
  sm: { fontSize: '$sm' },
  md: { fontSize: '$md' },
  lg: { fontSize: '$lg' },
  xl: { fontSize: '$xl' },
  '2xl': { fontSize: '$2xl' },
  '4xl': { fontSize: '$4xl' },
  '5xl': { fontSize: '$5xl' },
  '6xl': { fontSize: '$6xl' },
  '7xl': { fontSize: '$7xl' },
  '8xl': { fontSize: '$8xl' },
  '9xl': { fontSize: '$9xl' },
}

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      ...sizes,
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = {
  children: ReactNode
  size?: keyof typeof sizes
  as?: ElementType
}

Text.displayName = 'Typography'
