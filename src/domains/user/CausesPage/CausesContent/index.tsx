import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import DonationPackage from "../../../../types/DonationPackage";
import DonationPackageCard from "../../../../components/DonationPackageCard";
import * as S from "./styles";
import Modal from "../../../../components/Modal";
import clockImage from "../../../../assets/icons/clock.svg";
import theme from "../../../../styles/theme";

export interface Props {
  donationPackages: DonationPackage[] | undefined;
  hasDonated?: boolean;
}

function CausesContent({
  donationPackages,
  hasDonated = false,
}: Props): JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const [isVisibleHasDonatedModal, setIsVisibleHasDonatedModal] =
    useState<boolean>(false);

  function navigateToWillDonatePage(donationPackage: DonationPackage) {
    const pathname = `/user/will-donate/${donationPackage.id}`;

    history.push({
      pathname,
      state: { donationPackage },
      search: location.search,
    });
  }

  function hasDonatedPress() {
    setIsVisibleHasDonatedModal(true);
  }

  function handleOnDonateButtonPress(donationPackage: DonationPackage) {
    if (hasDonated) {
      hasDonatedPress();
    } else {
      navigateToWillDonatePage(donationPackage);
    }
  }

  function onDonateButtonText(): string {
    if (hasDonated) return "Doação já feita";
    return "DONATE";
  }

  function onCloseModal() {
    setIsVisibleHasDonatedModal(false);
  }

  function renderCards(): JSX.Element[] | undefined {
    return donationPackages?.map((donationPackage) => (
      <S.CardContainer key={donationPackage.id}>
        <DonationPackageCard
          onDonateButtonText={onDonateButtonText()}
          onDonateButtonPress={() => handleOnDonateButtonPress(donationPackage)}
          color={theme.colors.ribonBlue}
          mainNgoImage={donationPackage.ngo.cardBackgroundImage}
          sliderImages={donationPackage.ngo.sliderImages}
          requiredRibons={donationPackage.requiredRibons}
          ngoLink={donationPackage.ngo.link}
          exclusiveForSubscriber={donationPackage.exclusiveForSubscriber}
          cardTitle={donationPackage?.impactDescription}
          impactDays={donationPackage.impactDays}
        />
        <S.NonProfitContainer>
          <S.NonProfitLogo src={donationPackage.ngo.logoUrl} />
          <p>{donationPackage.shortDescription}</p>
        </S.NonProfitContainer>
      </S.CardContainer>
    ));
  }

  return (
    <S.Container>
      <Modal
        visible={isVisibleHasDonatedModal}
        title="You already made a donation"
        onClose={onCloseModal}
        type="icon"
        icon={clockImage}
        primaryButtonCallback={() => null}
        primaryButtonText="Start!"
        body="Become a promoter"
        secondaryButtonText="Close"
        secondaryButtonCallback={onCloseModal}
      />
      {renderCards()}
    </S.Container>
  );
}

export default CausesContent;
