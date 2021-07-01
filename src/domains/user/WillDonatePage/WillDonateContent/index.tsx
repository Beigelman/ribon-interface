import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DonationPackage from "../../../../types/DonationPackage";
import * as S from "./styles";
import NgoLogoWithName from "../../../../components/NgoLogoWithName";
import FooterNavigationButtons from "../../../../components/FooterNavigationButtons";
import ImageWithLogo from "../../../../components/ImageWithLogo";
import DonationInProgress from "../../../../components/DonationInProgress";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
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

  function navigateToCausesPage() {
    history.goBack();
  }

  const onErrorModalClose = () => {
    setIsErrorModalVisible(false);
  };

  function goToConfirmDonationPage() {
    history.push({
      pathname: `/user/donation-confirm/${donationPackage.id}`,
      state: {
        donationPackage,
        donatedRibons: donationPackage.requiredRibons * defaultPackagesQuantity,
      },
      search: history.location.search,
    });
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
            image={ngo.cardBackgroundImage}
            imageAlt={`${ngo.name}BgImage`}
            logoAlt={`${ngo.name}Logo`}
            logoImage={ngo.logoUrl}
          />
        </S.ImageNoMarginContainer>

        <S.Section>
          <NgoLogoWithName donationPackage={donationPackage} />
          <S.ImpactDescription>
            {`Your donation will help with ${donationPackage.impactDays} ${donationPackage.impactDescription} for one person`}
          </S.ImpactDescription>
          <S.HrSponsor />
          <S.NonProfitInfo>
            <S.NonProfitText>{donationPackage.ngo.description}</S.NonProfitText>
            <Button
              onClick={() => {
                window.open(donationPackage.ngo.link);
              }}
              text="Learn more"
            />
          </S.NonProfitInfo>
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
        onContinueText={"DONATE!"}
      />
    </>
  );
}

export default WillDonateContent;
