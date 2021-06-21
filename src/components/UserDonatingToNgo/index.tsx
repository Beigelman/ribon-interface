import React from "react";
import Lottie from "react-lottie";
import animationData from "./assets/hearts-animation.json";
import * as S from "./styles";
import defaultPhoto from "./assets/profilePhoto.png";
import heartLaceImage from "./assets/heart-lace.svg";

export type Props = {
  logoUrl: string;
  withAnimation?: boolean;
};

function UserDonatingToNgo({
  logoUrl,
  withAnimation = false,
}: Props): JSX.Element {
  function userPicture() {
    return defaultPhoto;
  }

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function renderHeartImage(): JSX.Element {
    return (
      <S.HeartImage src={heartLaceImage} alt="heart-image" id="heart-img" />
    );
  }

  return (
    <S.Container>
      {withAnimation && (
        <S.AnimationUser>
          <Lottie options={animationOptions} width={64} height={60} />
        </S.AnimationUser>
      )}
      <S.UserImage
        src={userPicture()}
        alt="user-image"
        id="donation-user-img"
      />
      {renderHeartImage()}
      {withAnimation && (
        <S.AnimationLogo>
          <Lottie options={animationOptions} width={64} height={60} />
        </S.AnimationLogo>
      )}
      <S.LogoImage src={logoUrl} alt="ngo-image" id="donation-ngo-img" />
    </S.Container>
  );
}
export default UserDonatingToNgo;
