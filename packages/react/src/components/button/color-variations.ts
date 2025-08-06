import { colors } from '@rcapeto-ui/tokens'
import type { ColorSchema } from '~/types'

type ButtonColorVariation = {
  primary: {
    bgColor: string
    hoverBgColor: string
  }
  secondary: {
    borderColor: string
    textColor: string
  }
}

type CreateValidationParams = {
  borderColor: string
  textColor: string
  bgColor: string
  hoverBgColor: string
}

export const colorsVariations: Record<ColorSchema, ButtonColorVariation> = {
  info: createVariationColor({
    bgColor: colors.primary500,
    hoverBgColor: colors.primary400,
    borderColor: colors.primary400,
    textColor: colors.primary500,
  }),
  danger: createVariationColor({
    bgColor: colors.red500,
    hoverBgColor: colors.red400,
    borderColor: colors.red400,
    textColor: colors.red500,
  }),
  success: createVariationColor({
    bgColor: colors.ignite500,
    hoverBgColor: colors.ignite300,
    borderColor: colors.ignite500,
    textColor: colors.ignite500,
  }),
  warning: createVariationColor({
    bgColor: colors.yellow500,
    hoverBgColor: colors.yellow400,
    borderColor: colors.yellow400,
    textColor: colors.yellow500,
  }),
  neutral: createVariationColor({
    bgColor: colors.gray500,
    hoverBgColor: colors.gray400,
    borderColor: colors.gray400,
    textColor: colors.gray500,
  }),
}

function createVariationColor(
  params: CreateValidationParams,
): ButtonColorVariation {
  const { bgColor, borderColor, hoverBgColor, textColor } = params

  return {
    primary: {
      bgColor,
      hoverBgColor,
    },
    secondary: {
      borderColor,
      textColor,
    },
  }
}
