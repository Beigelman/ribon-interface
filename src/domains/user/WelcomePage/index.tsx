import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ribonBlueLogo from "../../../assets/icons/ribonBlue-logo.svg";
import Button from "../../../components/Button";
import heartIcon from "./assets/heart-white.svg";
import * as S from "./styles";
import WelcomeTextContainer from "../../../components/WelcomeTextContainer";
import desktopImage from "./assets/wfp-welcome-page.png";

export const INTEGRATION_STEPS = [
  "Qual causa?",
  "Segurança",
  "Doação",
  "Confirmação",
];

function WelcomePage(): JSX.Element {
  const history = useHistory();
  const { location } = history;

  function renderWelcomeTitle() {
    return "Bem vinda(o) à Ribon!";
  }

  function renderWelcomeDescription() {
    return "Que tal ajudar pessoas com uma doação gratuita?";
  }

  function onDonate() {
    history.push({ pathname: "/users/causes", search: location.search });
  }

  function renderCompanyLogo() {
    return null;
  }

  return (
    <S.Container>
      <S.ImageContainer>
        <img src={ribonBlueLogo} alt="Logo Ribon" className="logo-image" />
        {renderCompanyLogo()}
      </S.ImageContainer>

      <S.ContentContainer>
        <S.LogoContainer>
          <img src={ribonBlueLogo} alt="Blue Ribon Logo" />
          {renderCompanyLogo()}
        </S.LogoContainer>

        <WelcomeTextContainer
          title={renderWelcomeTitle()}
          description={renderWelcomeDescription()}
        />

        <S.ButtonContainer>
          <Button
            onClick={onDonate}
            text="DOAR"
            leftIcon={heartIcon}
            className="btn-heart"
          />
        </S.ButtonContainer>
      </S.ContentContainer>
      <S.DesktopImageContainer>
        <S.DesktopImage src={desktopImage} alt="Desktop Ribon WFP" />
      </S.DesktopImageContainer>
    </S.Container>
  );
}

export default WelcomePage;
