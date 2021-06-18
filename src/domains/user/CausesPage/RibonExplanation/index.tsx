import React from "react";
import ribonBlueLogo from "../../../../assets/icons/ribonBlue-logo.svg";
import * as S from "./styles";

function RibonExplanation(): JSX.Element {
  return (
    <S.RibonDescriptionContainer>
      <S.ContentSection>
        <S.Title>Você conhece a Ribon?</S.Title>
        <S.Text>
          Somos uma startup brasileira que estimula doações para projetos
          incríveis
        </S.Text>
        <S.Text>
          Com a gente é fácil doar! Doe com um clique, e sem gastar seu próprio
          dinheiro
        </S.Text>
        <S.Text>
          Aqui suas doações são pagas por parceiros da Ribon, que financiam suas
          doações
        </S.Text>
        <img src={ribonBlueLogo} alt="ribon" />
      </S.ContentSection>
    </S.RibonDescriptionContainer>
  );
}

export default RibonExplanation;
