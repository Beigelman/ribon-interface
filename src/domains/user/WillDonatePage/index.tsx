import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../../components/Modal";
import IntegrationNavbar from "../IntegrationNavbar";
import * as S from "./styles";
import WillDonateContent from "./WillDonateContent";
import DonationPackages from "../../../mock/donationPackages";
import DonationLayout from "../../../layouts/DonationLayout";
import useNavigation from "../../../hooks/useNavigation";

type Params = {
  id: string;
};

function WillDonatePage(): JSX.Element {
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const { id: donationPackageId } = useParams<Params>();
  const { navigateTo } = useNavigation();

  const onErrorModalClose = () => {
    setIsErrorModalVisible(false);
  };

  return (
    <>
      <DonationLayout
        headerProps={{
          color: DonationPackages[parseInt(donationPackageId)].colorCode,
          onClose: () => null,
        }}
        desktopSidebarProps={{
          image: DonationPackages[0].ngo.willDonateImage,
        }}
        footerButtonProps={{
          onPrimaryButtonClick: () =>
            navigateTo("/user/donation-confirm/" + donationPackageId),
          onSecondaryButtonClick: () => null,
          primaryButtonText: "Doar!",
          secondaryButtonText: "Cancelar",
        }}
      >
        <WillDonateContent
          donationPackage={DonationPackages[parseInt(donationPackageId)]}
        />
      </DonationLayout>
      <Modal
        visible={isErrorModalVisible}
        onClose={onErrorModalClose}
        type="error"
      />
    </>
  );
}

export default WillDonatePage;
