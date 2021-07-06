import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import Background from "../../assets/images/background.jpg";
import useContract from "../../hooks/useContract";
import Modal from "../../components/Modal";
import RibonIcon from "../../assets/icons/ribon.svg";
import RibonWhiteLogo from "../../assets/icons/ribonWhite-logo.svg";
import USDcLogo from "../../assets/icons/usdc-logo.svg";
import theme from "../../styles/theme";

declare global {
  interface Window {
    web3: any;
    ethereum: any;
  }
}

export default function PromoterPage(): JSX.Element {
  const [donationValue, setDonationValue] = useState("");
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] =
    useState(false);
  const [isThanksModalVisible, setIsThanksModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [walletIsConnected, setWalletIsConnected] = useState(false);
  const [donationPoolValue, setDonationPoolValue] = useState(0);
  const [totalDonatedValue, setTotalDonatedValue] = useState(0);
  const [userWallet, setUserWallet] = useState("");

  const { ribonContract, donationTokenContract } = useContract();

  const RIBON_CONTRACT_ADDRESS = "0xbdd84418006C7C0C7aF0f57fdFDa55F7e6827a9C";

  const onErrorModalClose = () => {
    setIsErrorModalVisible(false);
  };

  const onWaitingForConfirmationModalClose = () => {
    setIsWaitingForConfirmation(false);
  };

  const onThanksModalClose = () => {
    setIsThanksModalVisible(false);
  };

  const deposit = async () => {
    setIsWaitingForConfirmation(true);
    await donationTokenContract?.methods
      .approve(RIBON_CONTRACT_ADDRESS, parseInt(donationValue))
      .send({ from: userWallet })
      .then(() => {
        ribonContract?.methods
          .deposit(parseInt(donationValue))
          .send({ from: userWallet })
          .then(() => {
            setIsWaitingForConfirmation(false);
            setIsThanksModalVisible(true);
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
    window.ethereum.on("accountsChanged", (accounts: Array<string>) => {
      setUserWallet(accounts[0]);
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

    if (window.ethereum?.selectedAddress) {
      setWalletIsConnected(true);
      setUserWallet(window.ethereum?.selectedAddress);
    } else {
      setWalletIsConnected(false);
    }
  }, [deposit, connectWallet]);

  return (
    <S.Container>
      <S.BackgroundContainer src={Background} />

      <S.LogoContainer>
        <img src={RibonWhiteLogo} />
      </S.LogoContainer>

      <S.Card>
        <S.FormContainer>
          <S.InputContainer>
            <S.TokenContainer>
              <S.Token src={USDcLogo} />
              <span> USDc</span>
            </S.TokenContainer>

            <S.Input
              name="coin"
              type={"text"}
              value={donationValue}
              onChange={(e) => setDonationValue(e.target.value)}
              placeholder={"0.0"}
            />
          </S.InputContainer>
          {walletIsConnected ? (
            <Button text="Donate" onClick={() => deposit()} />
          ) : (
            <Button
              text="Connect wallet"
              backgroundColor="white"
              textColor={theme.colors.ribonBlack}
              borderColor={theme.colors.ribonBlue}
              onClick={() => connectWallet()}
            />
          )}
        </S.FormContainer>
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
        primaryButtonCallback={onWaitingForConfirmationModalClose}
        primaryButtonText={"Cancel"}
      />

      <Modal
        visible={isThanksModalVisible}
        type="icon"
        icon={RibonIcon}
        title="Donation Successful!"
        body="Thank you for your donation, now your money will be distributed so that many people can donate as well."
        primaryButtonCallback={onThanksModalClose}
        primaryButtonText={"Ok"}
      />
    </S.Container>
  );
}
