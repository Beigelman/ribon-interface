import React from "react";
import { easeLinear } from "d3-ease";
import * as S from "./styles";
import CircleProgress from "../CircleProgress";
import AnimatedProgressProvider from "../AnimatedProgressProvider";

export type Props = {
  image: string;
  impactPercentage: number;
  impactDescription: string;
  impactDays?: number;
  children?: JSX.Element;
};

function ImpactSection({
  image,
  impactPercentage,
  impactDescription,
  impactDays,
  children,
}: Props): JSX.Element {
  return (
    <S.Container>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={impactPercentage}
        duration={1.0}
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
                <S.ImpactText>{`${impactDays} ${impactDescription}`}</S.ImpactText>
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
