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
    return "How about helping people with a free donation?";
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
      Keep donating for free becoming a{" "}
      <S.TitleBlue onClick={goToOnBoarding}>Ribon donor</S.TitleBlue>
    </S.Title>
  );
}

export default CausesTitle;
