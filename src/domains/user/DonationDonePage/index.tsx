import React from "react";
import * as S from "./styles";
import IntegrationNavbar from "../IntegrationNavbar";
import ConectionImage from "./assets/group-34432.svg";
import Heart from "./assets/heart.svg";
import theme from "../../../styles/theme";
import Button from "../../../components/Button";
import DesktopSidebar from "../../../components/DesktopSidebar";
import { windowOrigin } from "../../../lib/windowHelpers";

function DonationDonePage(): JSX.Element {
  function continueUrl() {
    return "string";
  }

  function handleContinueButtonClick() {
    window.open(continueUrl(), "_self");
  }

  function handleGoBackFlowButtonClick() {
    return "string";
  }

  function renderCompanyButton() {
    <Button
      onClick={handleGoBackFlowButtonClick}
      backgroundColor="#fff"
      borderColor={theme.colors.ribonBlue}
      textColor={theme.colors.ribonBlue}
      text="Voltar para empresa"
    />;
  }

  return (
    <S.Container>
      <IntegrationNavbar />
      <S.GridContainer>
        <S.SidebarContainer>
          <DesktopSidebar mainImage={ConectionImage} />
        </S.SidebarContainer>

        <S.BodyContainer>
          <S.Title>
            Espere sua próxima doação gratuita disponibilizada por:
          </S.Title>
          <S.CompanyContainer>
            <S.CompanyImage src={"logo"} alt="partner-logo" />
          </S.CompanyContainer>
          <S.DividerWithText>
            <span>Ou</span>
          </S.DividerWithText>
          <S.Title>
            Conheça o app e continue doando gratuitamente para essa e outras
            causas{" "}
          </S.Title>
          <S.DesktopButtonContainer>
            <Button
              leftIcon={Heart}
              onClick={handleContinueButtonClick}
              backgroundColor={theme.colors.ribonBlue}
              text="Quero continuar ajudando hoje"
            />
            {renderCompanyButton()}
          </S.DesktopButtonContainer>
          <S.Image src={ConectionImage} alt="pessoas-se-conectando" />

          <S.Footer>
            <S.ButtonContainer>
              <Button
                leftIcon={Heart}
                onClick={handleContinueButtonClick}
                backgroundColor={theme.colors.ribonBlue}
                text="Quero continuar ajudando hoje"
              />
              {renderCompanyButton()}
            </S.ButtonContainer>
          </S.Footer>
        </S.BodyContainer>
      </S.GridContainer>
    </S.Container>
  );
}

export default DonationDonePage;
