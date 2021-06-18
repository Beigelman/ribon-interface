import React, { useEffect } from "react";
import IntegrationNavbar from "../IntegrationNavbar";
import * as S from "./styles";
import CausesTitle from "./CausesTitle";
import CausesContent from "./CausesContent";
import RibonExplanation from "./RibonExplanation";

function CausesPage(): JSX.Element {
  const donationPackages: any = [];

  return (
    <S.Container>
      <IntegrationNavbar />
      <S.ContentContainer>
        <CausesTitle canDonate={true} />
        <CausesContent donationPackages={donationPackages} hasDonated={false} />
      </S.ContentContainer>
      <RibonExplanation />
    </S.Container>
  );
}

export default CausesPage;
