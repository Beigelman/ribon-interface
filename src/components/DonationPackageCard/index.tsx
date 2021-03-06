import React, { useState } from "react";
import DonationImageSlider from "../DonationImageSlider";
import Button from "../Button";
import * as S from "./styles";

export type Props = {
  onDonateButtonText?: string;
  onDonateButtonPress(): void;
  color: string;
  mainNgoImage: string;
  sliderImages: Array<Record<any, string>>;
  goalId?: number;
  goalAchieved?: boolean;
  goalStopDonations?: boolean;
  goalPercentageProgress?: string;
  goalValue?: number;
  requiredRibons: number;
  ngoLink: string;
  exclusiveForSubscriber: boolean;
  cardTitle: string;
  impactDays: number;
};

function DonationPackageCard({
  onDonateButtonText,
  onDonateButtonPress,
  color,
  mainNgoImage,
  sliderImages,
  cardTitle,
  impactDays,
}: Props): JSX.Element {
  function donationButtonText() {
    if (onDonateButtonText) {
      return onDonateButtonText;
    }
    return "DONATE";
  }

  return (
    <S.Container color={color} aria-label="DonationCard">
      <DonationImageSlider
        mainNgoImage={mainNgoImage}
        sliderImages={sliderImages}
      />

      <S.Info>
        <S.DonateSection>
          <S.TitleContainer>
            <S.Title>{`Donate ${impactDays} ${cardTitle}`}</S.Title>
          </S.TitleContainer>

          <S.ButtonContainer>
            <Button
              text={donationButtonText()}
              textColor="white"
              backgroundColor={color}
              onClick={onDonateButtonPress}
            />
          </S.ButtonContainer>
        </S.DonateSection>
      </S.Info>
    </S.Container>
  );
}

export default DonationPackageCard;
