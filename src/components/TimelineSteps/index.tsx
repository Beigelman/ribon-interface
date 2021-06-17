import React from "react";
import * as S from "./styles";
import theme from "../../styles/theme";

export type Props = {
  steps: string[];
  currentStep?: number;
};

function TimelineSteps({ steps, currentStep = 0 }: Props): JSX.Element {
  function colorByIndex(index: number) {
    return index <= currentStep
      ? theme.colors.ribonBlue
      : theme.colors.lightGray;
  }

  function animationByIndex(index: number) {
    return index === currentStep ? "" : "";
  }

  return (
    <S.Container>
      {steps.map((step, index) => (
        <S.StepContainer key={index.toString()}>
          <S.Step
            color={colorByIndex(index)}
            animation={animationByIndex(index)}
          />
          <S.Text color={colorByIndex(index)}>{step}</S.Text>
        </S.StepContainer>
      ))}
    </S.Container>
  );
}

export default TimelineSteps;
