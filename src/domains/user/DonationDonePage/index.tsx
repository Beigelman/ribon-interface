import React, { useState } from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import IntegrationNavbar from "../IntegrationNavbar";
import ConectionImage from "./assets/group-34432.svg";
import Heart from "./assets/heart.svg";
import theme from "../../../styles/theme";
import Button from "../../../components/Button";
import DesktopSidebar from "../../../components/DesktopSidebar";
import DonationPackages from "../../../mock/donationPackages";
import UserImpactListItem from "../../../components/UserImpactListItem";

function DonationDonePage(): JSX.Element {
  const history = useHistory();
  const { location } = history;

  function handleContinueButtonClick() {
    history.push({ pathname: "/promoter", search: location.search });
  }

  function renderImpact() {
    return (
      <S.ImpactList>
        {DonationPackages.map((item) => (
          <UserImpactListItem
            name={item.ngo.name}
            logo={item.ngo.logoUrl}
            backgroundColor={item.colorCode}
            circleImage={item.ngo.impactCardImage}
            impactText={item.impactDescription}
            impactDays={item.impactDays}
            nonProfitWallet={item.wallet}
            key={item.wallet}
          />
        ))}
      </S.ImpactList>
    );
  }

  return (
    <S.Container>
      <IntegrationNavbar />
      <S.GridContainer>
        <S.SidebarContainer>
          <DesktopSidebar mainImage={ConectionImage} />
        </S.SidebarContainer>

        <S.BodyContainer>
          <S.Title>see how much impact you made:</S.Title>
          {renderImpact()}
          <S.DividerWithText>
            <span>-</span>
          </S.DividerWithText>
          <S.Title>Increase your impact and enable others to donate</S.Title>
          <S.DesktopButtonContainer>
            <Button
              leftIcon={Heart}
              onClick={handleContinueButtonClick}
              backgroundColor={theme.colors.ribonBlue}
              text="Become a promoter"
            />
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
            </S.ButtonContainer>
          </S.Footer>
        </S.BodyContainer>
      </S.GridContainer>
    </S.Container>
  );
}

export default DonationDonePage;
