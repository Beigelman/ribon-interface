import React from "react";
import Lottie from "react-lottie";
import * as S from "./styles";
import animationData from "./assets/donation-loading-animation.json";

export type Props = {
  visible: boolean;
  backgroundImage?: string;
};

function DonationInProgress({ visible, backgroundImage }: Props): JSX.Element {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function renderDonatingShimmer() {
    return (
      <S.ImageContainer>
        <S.NgoImage src={backgroundImage} alt="ngoImage" />
        <S.Gradient />
      </S.ImageContainer>
    );
  }

  function renderLoadingAnimation() {
    return (
      <S.AnimationContainer>
        <Lottie options={animationOptions} width={120} height={120} />
        <S.AnimationText>Doando...</S.AnimationText>
      </S.AnimationContainer>
    );
  }

  return (
    <>
      {visible ? (
        <S.Container>
          <S.CenterDiv>
            {renderDonatingShimmer()}
            {renderLoadingAnimation()}
          </S.CenterDiv>
        </S.Container>
      ) : null}
    </>
  );
}

export default DonationInProgress;
