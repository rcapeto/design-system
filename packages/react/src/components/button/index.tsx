import { styled } from '~/styles'
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

        '&[data-color-schema="success"]': {
          backgroundColor: '$ignite500',

          '&:not(:disabled):hover': {
            backgroundColor: '$ignite300',
          },
        },

        '&[data-color-schema="danger"]': {
          backgroundColor: '$red500',

          '&:not(:disabled):hover': {
            background: '$red400',
          },
        },

        '&[data-color-schema="info"]': {
          backgroundColor: '$primary500',

          '&:not(:disabled):hover': {
            background: '$primary400',
          },
        },

        '&[data-color-schema="warning"]': {
          backgroundColor: '$yellow500',

          '&:not(:disabled):hover': {
            backgroundColor: '$yellow400',
          },
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        border: '2px solid transparent',

        '&[data-color-schema="success"]': {
          color: '$ignite300',
          borderColor: '$ignite500',

          '&:not(:disabled):hover': {
            backgroundColor: '$ignite500',
            color: '$white',
          },
        },

        '&[data-color-schema="danger"]': {
          color: '$red500',
          borderColor: '$red500',

          '&:not(:disabled):hover': {
            backgroundColor: '$red500',
            color: '$white',
          },
        },

        '&[data-color-schema="info"]': {
          color: '$primary500',
          borderColor: '$primary500',

          '&:not(:disabled):hover': {
            backgroundColor: '$primary500',
            color: '$white',
          },
        },

        '&[data-color-schema="warning"]': {
          color: '$yellow500',
          borderColor: '$yellow500',

          '&:not(:disabled):hover': {
            backgroundColor: '$yellow500',
            color: '$white',
          },
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

export function Button({ colorSchema, ...props }: ButtonProps) {
  return <BaseButton {...props} data-color-schema={colorSchema} />
}

export * from './types'

Button.displayName = 'Button'
