import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import IntegrationNavbar from "../IntegrationNavbar";
import ConectionImage from "./assets/group-34432.svg";
import Heart from "./assets/heart.svg";
import theme from "../../../styles/theme";
import Button from "../../../components/Button";
import DesktopSidebar from "../../../components/DesktopSidebar";

function DonationDonePage(): JSX.Element {
  const history = useHistory();
  const { location } = history;

  function handleContinueButtonClick() {
    history.push({ pathname: "/promoter", search: location.search });
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
          <S.Title>Await your next free donation available for:</S.Title>
          <S.CompanyContainer>
            <S.CompanyImage src={"logo"} alt="partner-logo" />
          </S.CompanyContainer>
          <S.DividerWithText>
            <span>Ou</span>
          </S.DividerWithText>
          <S.Title>
            Discover the app and keep donating for free to this and others
            causes{" "}
          </S.Title>
          <S.DesktopButtonContainer>
            <Button
              leftIcon={Heart}
              onClick={handleContinueButtonClick}
              backgroundColor={theme.colors.ribonBlue}
              text="Become a promoter"
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
                text="Become a promoter"
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
