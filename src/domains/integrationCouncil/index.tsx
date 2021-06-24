import React from "react";
import * as S from "./styles";
import Background from "../../assets/images/background.jpg";

export default function PromoterPage(): JSX.Element {
  return (
    <S.Container>
      <img src={Background} />
      <S.Card>
        <h2>Ribon Pool</h2>
      </S.Card>
    </S.Container>
  );
}
