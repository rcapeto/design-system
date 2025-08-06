import { styled } from '~/styles'

export const SnackbarContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  justifyContent: 'space-between',
  color: '$white',
  padding: '$5',
  borderRadius: '$md',
  position: 'relative',

  '@media(max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '$3',
  },

  variants: {
    colorSchema: {
      info: {
        backgroundColor: '$primary500',
      },
      danger: {
        backgroundColor: '$red500',
      },
      warning: {
        backgroundColor: '$yellow500',
      },
      success: {
        backgroundColor: '$ignite500',
      },
      neutral: {
        backgroundColor: '$gray500',
      },
    },
  },

  defaultVariants: {
    colorSchema: 'info',
  },
})

export const SnackbarLeftContent = styled('div', {
  flex: 1,
  gap: '$2',
  display: 'flex',
  alignItems: 'flex-start',
})

export const IconContainer = styled('div', {
  width: '$7',
  height: '$7',

  svg: {
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})

export const SnackbarRightContent = styled('div', {
  display: 'flex',

  '@media (max-width: 600px)': {
    width: '100%',

    '> button': {
      backgroundColor: '$gray100',
      color: '$black',
      width: '100%',
    },
  },
})

export const ButtonCloseContainer = styled('div', {
  position: 'absolute',
  unset: '0',
  top: '$2',
  right: '$2',
})

export const ButtonClose = styled('button', {
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '$white',
  border: 0,
  fontSize: '$lg',

  '&:hover': {
    color: '$gray100',
  },
})
