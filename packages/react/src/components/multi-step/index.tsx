import { Label, MultiStepsContainer, Step, Steps } from './styles'

export type MultiStepsProps = {
  size: number
  currentStep?: number
}

export function MultiSteps({ size, currentStep = 1 }: MultiStepsProps) {
  return (
    <MultiStepsContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => (
          <Step key={step.toString()} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepsContainer>
  )
}

MultiSteps.displayName = 'MultiSteps'
