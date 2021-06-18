import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import ribonBlueLogo from "../../../assets/icons/ribonBlue-logo.svg";
import arrow from "../../../assets/icons/arrow.svg";
import useWindowSize from "../../../hooks/useWindowSize";

export type Props = {
  hasBackButton?: boolean;
};

function IntegrationNavbar({ hasBackButton = false }: Props): JSX.Element {
  const history = useHistory();
  const windowSize = useWindowSize();

  function renderCompanyLogo() {
    return null;
  }

  const shouldRenderBackButton = () => {
    return hasBackButton && windowSize.breakpoint === "mobile";
  };

  const renderTopLeft = () => {
    if (shouldRenderBackButton())
      return (
        <S.Arrow onClick={() => history.goBack()}>
          <img src={arrow} alt="Back-Button" />
        </S.Arrow>
      );

    return (
      <S.LogoContainer>
        <img src={ribonBlueLogo} alt="Blue Ribon Logo" />
        {renderCompanyLogo()}
      </S.LogoContainer>
    );
  };

  return (
    <S.Wrapper>
      <S.Container>{renderTopLeft()}</S.Container>
    </S.Wrapper>
  );
}

export default IntegrationNavbar;
