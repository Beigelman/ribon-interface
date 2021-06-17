import React from "react";
import * as S from "./styles";

export interface Props {
  title?: string;
  description: string;
}

function WelcomeTextContainer({ title, description }: Props): JSX.Element {
  return (
    <S.TextContainer>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.TextContainer>
  );
}

export default WelcomeTextContainer;
