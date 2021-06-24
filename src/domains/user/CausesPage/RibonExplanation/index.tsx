import React from "react";
import ribonBlueLogo from "../../../../assets/icons/ribonBlue-logo.svg";
import * as S from "./styles";

function RibonExplanation(): JSX.Element {
  return (
    <S.RibonDescriptionContainer>
      <S.ContentSection>
        <S.Title>Do you know Ribon?</S.Title>
        <S.Text>
          We are a Brazilian startup that encourages donations to projects
          incredible
        </S.Text>
        <S.Text>
          With us it is easy to donate! Donate with one click, and without
          spending your own cash
        </S.Text>
        <S.Text>
          Here your donations are paid by Ribon promoters, who fund your
          donations
        </S.Text>
        <img src={ribonBlueLogo} alt="ribon" />
      </S.ContentSection>
    </S.RibonDescriptionContainer>
  );
}

export default RibonExplanation;
