import type { ElementType, ReactNode } from 'react'
import { styled } from '~/styles'

const textSizes = {
  sm: { fontSize: '$xl' },
  md: { fontSize: '$2xl' },
  lg: { fontSize: '$4xl' },
  '2xl': { fontSize: '$5xl' },
  '3xl': { fontSize: '$6xl' },
  '4xl': { fontSize: '$7xl' },
  '5xl': { fontSize: '$8xl' },
  '6xl': { fontSize: '$9xl' },
}

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      ...textSizes,
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = {
  children: ReactNode
  size?: keyof typeof textSizes
  as?: ElementType
}

Heading.displayName = 'Heading'
