import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../../components/Modal";
import WillDonateContent from "./WillDonateContent";
import DonationPackages from "../../../mock/donationPackages";
import DonationLayout from "../../../layouts/DonationLayout";
import useNavigation from "../../../hooks/useNavigation";
import integrationApi from "../../../services/api/integrationApi";
import useAccount from "../../../hooks/useAccount";
import theme from "../../../styles/theme";
import IntegrationNavbar from "../IntegrationNavbar";

type Params = {
  id: string;
};

function WillDonatePage(): JSX.Element {
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const { id: donationPackageId } = useParams<Params>();
  const { navigateTo, navigateBack } = useNavigation();
  const { account } = useAccount();

  const onErrorModalClose = () => {
    setIsErrorModalVisible(false);
  };

  const donate = async () => {
    try {
      const { data } = await integrationApi.donateThoughtIntegration(
        DonationPackages[parseInt(donationPackageId)].wallet,
        account,
        100
      );
      console.log(data);
      navigateTo("/user/donation-confirm/" + donationPackageId);
    } catch (error) {
      setIsErrorModalVisible(true);
    }
  };

  return (
    <>
      <IntegrationNavbar />
      <DonationLayout
        headerProps={{
          color: theme.colors.ribonBlue,
          onClose: () => navigateBack(),
          hide: true,
        }}
        desktopSidebarProps={{
          image: DonationPackages[0].ngo.willDonateImage,
        }}
        footerButtonProps={{
          onPrimaryButtonClick: () => donate(),
          onSecondaryButtonClick: () => navigateBack(),
          primaryButtonText: "Donate!",
          secondaryButtonText: "Cancel",
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
