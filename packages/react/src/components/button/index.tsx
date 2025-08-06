import { styled } from '~/styles'
import { colorsVariations } from './color-variations'
import type { ButtonProps } from './types'

const BaseButton = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  padding: '0 $4',
  border: '2px solid transparent',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    // boxShadow: '0 0 0 2px $colors$gray100',
    borderColor: '$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',

        backgroundColor: 'var(--bg-color)',

        '&:not(:disabled):hover': {
          backgroundColor: 'var(--hover-bg-color)',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        border: '2px solid transparent',

        color: 'var(--text-color)',
        borderColor: 'var(--border-color)',

        '&:not(:disabled):hover': {
          backgroundColor: 'var(--bg-color)',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      md: {
        height: 46,
      },
      sm: {
        height: 38,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export function Button({ colorSchema = 'success', ...props }: ButtonProps) {
  const {
    primary: { bgColor, hoverBgColor },
    secondary: { borderColor, textColor },
  } = colorsVariations[colorSchema]

  return (
    <BaseButton
      {...props}
      data-color-schema={colorSchema}
      css={{
        '--bg-color': bgColor,
        '--hover-bg-color': hoverBgColor,
        '--text-color': textColor,
        '--border-color': borderColor,
      }}
    />
  )
}

export * from './types'

Button.displayName = 'Button'
