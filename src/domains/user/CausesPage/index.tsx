import React, { useEffect } from "react";
import IntegrationNavbar from "../IntegrationNavbar";
import * as S from "./styles";
import CausesTitle from "./CausesTitle";
import CausesContent from "./CausesContent";
import RibonExplanation from "./RibonExplanation";
import DonationPackages from "../../../mock/donationPackages";

function CausesPage(): JSX.Element {
  return (
    <S.Container>
      <IntegrationNavbar />
      <S.ContentContainer>
        <CausesTitle canDonate={true} />
        <CausesContent donationPackages={DonationPackages} hasDonated={false} />
      </S.ContentContainer>
      <RibonExplanation />
    </S.Container>
  );
}

export default CausesPage;
