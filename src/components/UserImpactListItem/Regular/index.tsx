import React from "react";

import * as S from "./styles";
import CircleProgress from "../../CircleProgress";

export interface Props {
  backgroundColor: string;
  name: string;
  logo: string;
  circleImage: string;
  impactText: string;
  progress: number;
  ribons: number;
}

export default function Regular({
  backgroundColor,
  name,
  logo,
  circleImage,
  progress,
  ribons,
  impactText,
}: Props): JSX.Element {
  return (
    <>
      <S.ImpactIcon
        backgroundColor={backgroundColor}
        aria-label={name}
        role="img"
      >
        <S.ImpactIconLogo src={logo} />
      </S.ImpactIcon>
      <S.Content>
        <S.CircleProgressContainer>
          <CircleProgress value={progress} image={circleImage} />
        </S.CircleProgressContainer>
        <S.Text>{impactText}</S.Text>
        <S.Text>{ribons} ribons</S.Text>
      </S.Content>
    </>
  );
}
