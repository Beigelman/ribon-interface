import React from "react";
import { useHistory } from "react-router-dom";
import ribonIcon from "./assets/ribon-icon.svg";
import Modal from "../Modal";
import theme from "../../styles/theme";

export type Props = {
  isModalVisible: boolean;
  handleModalClose(): void;
};

function LockLayer(props: Props): JSX.Element {
  const { isModalVisible = false, handleModalClose } = props;
  const history = useHistory();

  return (
    <Modal
      type="icon"
      visible={isModalVisible}
      icon={ribonIcon}
      onClose={handleModalClose}
      title="Causa exclusiva para assinante"
      body="Deseja ajudar a esta causa? Basta ser assinante Ribon que você terá vários benefícios além desse!"
      primaryButtonText="Continue"
      primaryButtonCallback={() => {
        history.push("/payments");
      }}
      primaryButtonColor={theme.colors.ribonBlue}
      primaryButtonBorderColor={theme.colors.ribonBlue}
      primaryButtonTextColor="white"
      contentLabel="LockLayerModal"
      zIndex={5}
    />
  );
}

export default LockLayer;
