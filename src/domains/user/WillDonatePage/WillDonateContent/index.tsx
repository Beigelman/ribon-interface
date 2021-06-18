import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DonationPackage from "../../../../types/DonationPackage";
import * as S from "./styles";
import NgoLogoWithName from "../../../../components/NgoLogoWithName";
import FooterNavigationButtons from "../../../../components/FooterNavigationButtons";
import ImageWithLogo from "../../../../components/ImageWithLogo";
import DonationInProgress from "../../../../components/DonationInProgress";
import Modal from "../../../../components/Modal";
import theme from "../../../../styles/theme";

export interface Props {
  donationPackage: DonationPackage;
}

function WillDonateContent({ donationPackage }: Props): JSX.Element {
  const history = useHistory();
  const { ngo } = donationPackage;
  const defaultPackagesQuantity = 1;
  const [donationInProgress, setDonationInProgress] = useState<boolean>(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const DEFAULT_QULTURE_ROCKS_EMAIL = "ribon-integration@qulture.rocks";

  function navigateToCausesPage() {
    history.goBack();
  }

  function navigateToEmailConfirmPage() {
    history.push({
      pathname: `/integrations/email-confirm/${donationPackage.id}`,
      search: history.location.search,
    });
  }

  const onErrorModalClose = () => {
    setIsErrorModalVisible(false);
  };

  function goToConfirmDonationPage() {
    history.push({
      pathname: `/integrations/donation-confirm/${donationPackage.id}`,
      state: {
        donationPackage,
        donatedRibons: donationPackage.requiredRibons * defaultPackagesQuantity,
      },
      search: history.location.search,
    });
  }

  function defaultEmail(): string {
    return "null";
  }

  async function makeDonation() {
    setDonationInProgress(true);
    try {
      goToConfirmDonationPage();
      setDonationInProgress(false);
    } catch (error) {
      setDonationInProgress(false);
      setIsErrorModalVisible(true);
    }
  }

  function onContinuePress() {
    makeDonation();
  }

  return (
    <>
      <S.BodyContainer>
        <S.ImageNoMarginContainer>
          <ImageWithLogo
            image={ngo.willDonateImage}
            imageAlt={`${ngo.name}BgImage`}
            logoAlt={`${ngo.name}Logo`}
            logoImage={ngo.logoUrl}
          />
        </S.ImageNoMarginContainer>

        <S.DesktopImageContainer>
          <S.NgoBackgroundImage
            src={donationPackage.ngo.willDonateImage}
            alt={`${donationPackage.ngo.name}BgImage`}
          />
        </S.DesktopImageContainer>

        <S.Section>
          <NgoLogoWithName donationPackage={donationPackage} />
          <S.ImpactDescription>
            {donationPackage.impactDescription}
          </S.ImpactDescription>
          <S.HrSponsor />
        </S.Section>
      </S.BodyContainer>
      <Modal
        visible={isErrorModalVisible}
        onClose={onErrorModalClose}
        type="error"
      />

      <DonationInProgress
        visible={donationInProgress}
        backgroundImage={donationPackage.ngo.willDonateImage}
      />

      <FooterNavigationButtons
        onCancel={navigateToCausesPage}
        onContinue={onContinuePress}
        onContinueDisabled={false}
        onContinueBackgroundColor={theme.colors.ribonBlue}
        onContinueText={"Doar!"}
      />
    </>
  );
}

export default WillDonateContent;
