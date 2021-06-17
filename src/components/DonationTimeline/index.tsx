import React from "react";
import * as S from "./styles";
import TimelineSteps from "../TimelineSteps";

export type Props = {
  currentStep?: number;
  steps: string[];
};

function DonationTimeline({ currentStep = 0, steps }: Props): JSX.Element {
  return (
    <S.TimelineContainer>
      <TimelineSteps steps={steps} currentStep={currentStep} />
    </S.TimelineContainer>
  );
}

export default DonationTimeline;
