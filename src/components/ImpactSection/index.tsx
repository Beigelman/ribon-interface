import React from "react";
import { easeLinear } from "d3-ease";
import * as S from "./styles";
import CircleProgress from "../CircleProgress";
import AnimatedProgressProvider from "../AnimatedProgressProvider";

export type Props = {
  image: string;
  impactPercentage: number;
  impactDescription: string;
  nextGoalMessage?: string;
  children?: JSX.Element;
};

function ImpactSection({
  image,
  impactPercentage,
  impactDescription,
  nextGoalMessage,
  children,
}: Props): JSX.Element {
  function descriptionWithProgress(impactValue: number) {
    return impactDescription
      .replace(/\d./, `${impactValue} `)
      .replace("$IMPACT", `${impactValue} `);
  }

  return (
    <S.Container>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={impactPercentage}
        duration={5.0}
        easingFunction={easeLinear}
        repeat={false}
      >
        {(value: number) => {
          const roundedValue = Math.round(value);
          const impactCount = Math.floor(roundedValue / 100);

          return (
            <S.ImpactContainer>
              <CircleProgress image={image} value={value} />
              <div>
                {impactCount > 0 && (
                  <S.ImpactText>
                    {descriptionWithProgress(impactCount)}
                  </S.ImpactText>
                )}
                {nextGoalMessage && impactPercentage < 100 && (
                  <S.ImpactText>{nextGoalMessage}</S.ImpactText>
                )}
                {children}
              </div>
            </S.ImpactContainer>
          );
        }}
      </AnimatedProgressProvider>
    </S.Container>
  );
}

export default ImpactSection;
