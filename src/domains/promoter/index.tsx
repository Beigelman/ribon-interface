import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Background from "../../assets/images/background.jpg";
import HeartIcon from "../../assets/icons/heart.svg";
import useContract from "../../hooks/useContract";
import useAccount from "../../hooks/useAccount";
import Modal from "../../components/Modal";
import RibonIcon from "../../assets/icons/ribon.svg";
import RibonWhiteLogo from "../../assets/icons/ribonWhite-logo.svg";

declare global {
  interface Window {
    web3: any;
    ethereum: any;
  }
}

export default function PromoterPage(): JSX.Element {
  const [donationValue, setDonationValue] = useState("0");
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] =
    useState(false);
  const [isThanksModalVisible, setIsThanksModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [walletIsConnected, setWalletIsConnected] = useState(false);
  const [donationPoolValue, setDonationPoolValue] = useState(0);
  const [totalDonatedValue, setTotalDonatedValue] = useState(0);
  const { ribonContract, donationTokenContract } = useContract();

  const { account } = useAccount();

  const RIBON_CONTRACT_ADDRESS = "0xE840fEe2D7f1cff4B843F0E57105542eE29D5e73";

  const onErrorModalClose = () => {
    setIsErrorModalVisible(false);
  };

  const onWaitingForConfirmationModalClose = () => {
    setIsWaitingForConfirmation(false);
  };

  const deposit = async () => {
    setIsWaitingForConfirmation(true);
    await donationTokenContract?.methods
      .approve(RIBON_CONTRACT_ADDRESS, parseInt(donationValue))
      .send({ from: account })
      .then(() => {
        ribonContract?.methods
          .deposit(parseInt(donationValue))
          .send({ from: account })
          .then(() => {
            setIsWaitingForConfirmation(false);
          })
          .catch(() => {
            setIsWaitingForConfirmation(false);
            setIsErrorModalVisible(true);
          });
      })
      .catch(() => {
        setIsWaitingForConfirmation(false);
        setIsErrorModalVisible(true);
      });
  };

  const connectWallet = async () => {
    try {
      await window.ethereum.enable();
      setWalletIsConnected(true);
    } catch (error) {
      setWalletIsConnected(false);
    }
  };

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", () => {
      setWalletIsConnected(true);
    });
  }

  useEffect(() => {
    async function getDonationPoolBalance() {
      setDonationPoolValue(
        await ribonContract?.methods.getDonationPoolBalance().call()
      );
      setTotalDonatedValue(
        await ribonContract?.methods.getTotalDonated().call()
      );
    }
    getDonationPoolBalance();
  }, [deposit]);

  return (
    <S.Container>
      <S.BackgroundContainer src={Background} />

      <S.LogoContainer>
        <img src={RibonWhiteLogo} />
      </S.LogoContainer>

      <S.Card>
        <S.InputContainer>
          <FormInput
            name="coin"
            label={"Amount"}
            type={"text"}
            value={donationValue}
            setValue={setDonationValue}
          />
          {account ? (
            <Button
              text="Donate"
              leftIcon={HeartIcon}
              onClick={() => deposit()}
            />
          ) : (
            <Button
              text="Connect wallet"
              backgroundColor="white"
              textColor="black"
              borderColor="red"
              onClick={() => connectWallet()}
            />
          )}
        </S.InputContainer>
        <S.InfoContainer>
          <S.InfoItem>
            <h3>{donationPoolValue}</h3>
            <h6>POOL BALANCE</h6>
          </S.InfoItem>
          <S.InfoItem>
            <h3>{totalDonatedValue}</h3>
            <h6>TOTAL DONATED</h6>
          </S.InfoItem>
        </S.InfoContainer>
      </S.Card>

      <Modal
        visible={isErrorModalVisible}
        onClose={onErrorModalClose}
        type="error"
        title="Transaction rejected"
      />

      <Modal
        visible={isWaitingForConfirmation}
        type="icon"
        icon={RibonIcon}
        title="Waiting for confirmation"
        body="Confirm this transaction in your wallet"
      />

      <Modal
        visible={isThanksModalVisible}
        type="icon"
        icon={RibonIcon}
        title="Donation Successful!"
        body="Thank you for your donation, now your money will be distributed so that many people can donate as well."
      />
    </S.Container>
  );
}
