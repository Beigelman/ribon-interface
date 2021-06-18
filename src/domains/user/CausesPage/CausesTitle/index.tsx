import React from "react";
import { useHistory } from "react-router";
import * as S from "../styles";

import WelcomeTextContainer from "../../../../components/WelcomeTextContainer";

export type Props = {
  canDonate?: boolean;
};

function CausesTitle({ canDonate = true }: Props): JSX.Element {
  const history = useHistory();

  function goToOnBoarding() {
    history.push("/onboarding/donation");
  }

  function renderWelcomeDescription() {
    return "Que tal ajudar pessoas com uma doação gratuita?";
  }

  if (canDonate) {
    return (
      <S.Title>
        <WelcomeTextContainer description={renderWelcomeDescription()} />
      </S.Title>
    );
  }

  return (
    <S.Title>
      Continue doando de graça se tornando uma{" "}
      <S.TitleBlue onClick={goToOnBoarding}>doadora Ribon</S.TitleBlue>
    </S.Title>
  );
}

export default CausesTitle;
