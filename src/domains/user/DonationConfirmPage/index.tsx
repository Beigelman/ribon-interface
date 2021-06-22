import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserDonatingToNgo from "../../../components/UserDonatingToNgo";
import Button from "../../../components/Button";
import DonationPackage from "../../../types/DonationPackage";
import ImageWithLogo from "../../../components/ImageWithLogo";

import * as S from "./styles";
import { ReactComponent as Heart } from "./assets/heart.svg";
import theme from "../../../styles/theme";
import DonationLayout from "../../../layouts/DonationLayout";
import { INTEGRATION_STEPS } from "../WelcomePage";
import ImpactSection from "../../../components/ImpactSection";
import Donation from "../../../types/Donation";
import useNavigation from "../../../hooks/useNavigation";
import SocialShare from "../../../components/SocialShare";
import InstagramShareParams from "../../../types/InstagramShareParams";
import DonationPackages from "../../../mock/donationPackages";

type LocationState = {
  donationPackage: DonationPackage;
  donatedRibons: number;
  donation: Donation;
};

type Params = {
  id: string;
};

function DonationConfirmPage(): JSX.Element {
  const location = useLocation<LocationState>();
  const { id: donationPackageId } = useParams<Params>();
  const { navigateTo } = useNavigation();

  const donationPackage = DonationPackages[parseInt(donationPackageId)];
  const { ngo } = donationPackage;
  const pageColor = theme.colors.ribonBlue;

  function onDonationFinish() {
    navigateTo({
      pathname: "/user/donation-done",
      state: { from: location.pathname },
    });
  }

  function goToSubscribePage() {
    navigateTo({
      pathname: "/promoter/payments",
      search: location.search,
    });
  }

  function tweetText() {
    return "Twitter";
  }

  function wppText() {
    return "Zap";
  }

  function instagramProps(): InstagramShareParams | undefined {
    return { title: "Title", description: "Desk", image: "string" };
  }

  return (
    <>
      <S.Container>
        <DonationLayout
          headerProps={{
            color: theme.colors.ribonBlue,
            onClose: () => {},
            hide: true,
          }}
          currentStep={3}
          desktopSidebarProps={{
            image: donationPackage.ngo.willDonateImage,
          }}
          footerButtonProps={{
            primaryButtonText: "Continue",
            onPrimaryButtonClick: onDonationFinish,
          }}
          timelineSteps={INTEGRATION_STEPS}
        >
          <>
            <S.DonationInfoContainer>
              <S.UserDonationContainer>
                <UserDonatingToNgo
                  logoUrl={donationPackage.ngo.logoUrl}
                  withAnimation
                />
              </S.UserDonationContainer>

              <S.ImpactText color={pageColor}>
                Thanks for the donation!
              </S.ImpactText>

              <S.ImpactContainer>
                <ImpactSection
                  image={donationPackage.ngo.donationDoneImage}
                  impactPercentage={2}
                  impactDescription={"donationImpactMessage"}
                  nextGoalMessage={"nextGoalMessage"}
                >
                  <SocialShare
                    tweetText={tweetText()}
                    wppText={wppText()}
                    onTweetClick={() => "twitter"}
                    onWppClick={() => "whatsapp"}
                    instagramProps={instagramProps()}
                    onInstagramClick={() => "instagram"}
                  />
                </ImpactSection>
              </S.ImpactContainer>

              <S.DonatedRibonsContainer>
                <S.HrNgo />
              </S.DonatedRibonsContainer>
            </S.DonationInfoContainer>

            <S.CauseImageContainer>
              <ImageWithLogo
                image={ngo.willDonateImage}
                imageAlt={`${ngo.name}BgImage`}
              />
            </S.CauseImageContainer>

            <S.ContinueDonatingContainer>
              <Heart />

              <S.ContinueDonatingText>
                Quer ajudar ainda mais?
              </S.ContinueDonatingText>

              <S.ContinueDonatingDescription>
                Doe 20 reais e cause muito mais impacto com a sua doação!
              </S.ContinueDonatingDescription>

              <S.ButtonContainer>
                <Button
                  onClick={goToSubscribePage}
                  backgroundColor={pageColor}
                  text="Quero ajudar ainda mais!"
                />
              </S.ButtonContainer>
            </S.ContinueDonatingContainer>
          </>
        </DonationLayout>
      </S.Container>
    </>
  );
}

export default DonationConfirmPage;
