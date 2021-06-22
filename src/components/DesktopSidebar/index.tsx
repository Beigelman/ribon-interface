import React from "react";
import * as S from "./styles";
import useBreakpoint from "../../hooks/useBreakpoint";
import theme from "../../styles/theme";

export type Props = {
  mainImage: string;
  disabledSponsorClick?: boolean;
};

function DesktopSidebar({
  mainImage,
  disabledSponsorClick = false,
}: Props): JSX.Element {
  const { isDesktop } = useBreakpoint();
  return (
    <S.DesktopImageContainer>
      <S.Title>You are donating to:</S.Title>
      <S.NgoBackgroundImage src={mainImage} alt="mainImage" />
    </S.DesktopImageContainer>
  );
}

export default DesktopSidebar;
