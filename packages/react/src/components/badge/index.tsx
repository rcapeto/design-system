import { styled } from '~/styles'
import type { ColorSchema } from '~/types'

export type BadgeProps = {
  children: string
  colorSchema?: ColorSchema
}

const BadgeContainer = styled('div', {
  display: 'inline-block',
  padding: '$2',
  borderRadius: '$xs',
  fontFamily: '$default',
  fontWeight: '$medium',
  border: '1px solid transparent',
  fontSize: '$sm',

  variants: {
    colorSchema: {
      info: {
        backgroundColor: '$primary200',
        color: '$primary400',
        borderColor: '$primary400',
      },
      danger: {
        backgroundColor: '$red200',
        color: '$red400',
        borderColor: '$red400',
      },
      warning: {
        backgroundColor: '$yellow200',
        color: '$yellow400',
        borderColor: '$yellow400',
      },
      success: {
        backgroundColor: '$ignite200',
        color: '$ignite400',
        borderColor: '$ignite400',
      },
      neutral: {
        backgroundColor: '$gray200',
        color: '$gray400',
        borderColor: '$gray400',
      },
    },
  },

  defaultVariants: {
    colorSchema: 'info',
  },
})

export function Badge({ children, colorSchema = 'info' }: BadgeProps) {
  return (
    <BadgeContainer data-color-schema={colorSchema} colorSchema={colorSchema}>
      {children}
    </BadgeContainer>
  )
}

Badge.displayName = 'Badge'
