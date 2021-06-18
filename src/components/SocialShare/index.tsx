import React from "react";
import * as S from "./styles";
import WhatsappLogo from "./assets/whatsapp-logo.svg";
import TwitterLogo from "./assets/twitter-logo.svg";
import InstagramLogo from "./assets/instagram-logo.svg";
import useNavigation from "../../hooks/useNavigation";
import InstagramShareParams from "../../types/InstagramShareParams";

export type Props = {
  tweetText?: string;
  onTweetClick?(): void;
  wppText?: string;
  onWppClick?(): void;
  instagramProps?: InstagramShareParams;
  onInstagramClick?(): void;
};

function SocialShare({
  tweetText,
  wppText,
  onTweetClick,
  onWppClick,
  instagramProps,
  onInstagramClick,
}: Props): JSX.Element {
  const { navigateTo } = useNavigation();

  function shareWithTwitter() {
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, "_blank");
    if (onTweetClick) onTweetClick();
  }

  function shareWithWhatsapp() {
    window.open(`https://wa.me/?text=${wppText}`, "_blank");
    if (onWppClick) onWppClick();
  }

  function shareWithInstagram() {
    if (onInstagramClick) onInstagramClick();
    navigateTo({ pathname: "/story-share", state: instagramProps });
  }

  return (
    <S.Container>
      <S.CenterContainer>
        <S.ShareText>Compartilhar nas redes</S.ShareText>
        <S.SocialsSection>
          {wppText && (
            <S.SocialsImage
              src={WhatsappLogo}
              alt="whatsapp-logo"
              onClick={shareWithWhatsapp}
            />
          )}
          {tweetText && (
            <S.SocialsImage
              src={TwitterLogo}
              alt="twitter-logo"
              onClick={shareWithTwitter}
            />
          )}
          {instagramProps && (
            <S.SocialsImage
              src={InstagramLogo}
              alt="instagram-logo"
              onClick={shareWithInstagram}
            />
          )}
        </S.SocialsSection>
      </S.CenterContainer>
    </S.Container>
  );
}

export default SocialShare;
