import React from "react";
import * as S from "./styles";
import DonationPackage from "../../types/DonationPackage";
import theme from "../../styles/theme";

export type Props = {
  donationPackage: DonationPackage;
};

function NgoLogoWithName({ donationPackage }: Props): JSX.Element {
  return (
    <S.DesktopLogoContainer>
      <S.NgoLogo
        src={donationPackage.ngo.logoUrl}
        alt={`${donationPackage.ngo.name}Logo`}
      />
    </S.DesktopLogoContainer>
  );
}

export default NgoLogoWithName;
