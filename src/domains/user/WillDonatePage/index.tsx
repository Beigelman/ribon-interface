import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../../components/Modal";
import IntegrationNavbar from "../IntegrationNavbar";
import * as S from "./styles";
import WillDonateContent from "./WillDonateContent";
import DonationPackages from "../../../mock/donationPackages";
import DonationLayout from "../../../layouts/DonationLayout";

type Params = {
  id: string;
};

function WillDonatePage(): JSX.Element {
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const { id: donationPackageId } = useParams<Params>();

  const onErrorModalClose = () => {
    setIsErrorModalVisible(false);
  };

  return (
    <>
      <DonationLayout
        headerProps={{
          color: DonationPackages[0].colorCode,
          onClose: () => null,
        }}
        desktopSidebarProps={{
          image: DonationPackages[0].ngo.willDonateImage,
        }}
        footerButtonProps={{
          onPrimaryButtonClick: () => null,
          onSecondaryButtonClick: () => null,
          primaryButtonText: "Doar!",
          secondaryButtonText: "Cancelar",
        }}
      >
        <WillDonateContent donationPackage={DonationPackages[0]} />
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
