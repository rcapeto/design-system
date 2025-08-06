import { Text } from '~/components/text'
import { styled } from '~/styles'

export const AlertContainer = styled('div', {
  padding: '$6 $4',
  border: '1px solid transparent',
  borderRadius: '$md',
  color: '$red200',
  maxWidth: '510px',
  gap: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media(max-width: 725px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '$4',

    '> button': {
      width: '100%',
    },
  },

  variants: {
    colorSchema: {
      info: {
        backgroundColor: '$primary100',
        borderColor: '$primary300',
        color: '$primary500',
      },
      danger: {
        backgroundColor: '$red100',
        borderColor: '$red300',
        color: '$red500',
      },
      success: {
        backgroundColor: '$ignite100',
        borderColor: '$ignite500',
        color: '$ignite500',
      },

      warning: {
        backgroundColor: '$yellow100',
        borderColor: '$yellow300',
        color: '$yellow500',
      },

      neutral: {
        backgroundColor: '$gray100',
        borderColor: '$gray300',
        color: '$gray500',
      },
    },
  },

  defaultVariants: {
    colorSchema: 'info',
  },
})

export const LeftContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '25px 1fr',
  alignItems: 'center',
  gap: '$2',

  [`> ${Text}`]: {
    color: '$black',
    fontWeight: '$regular',
    lineBreak: 'anywhere',

    '@media(max-width: 725px)': {
      fontSize: '$xs',
    },
  },

  svg: {
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
  },
})

export const IconContainer = styled('div', {
  width: '$5',
  height: '$5',
})
