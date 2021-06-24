import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Background from "../../assets/images/background.jpg";
import HeartIcon from "../../assets/icons/heart.svg";
import useContract from "../../hooks/useContract";
import useAccount from "../../hooks/useAccount";

export default function PromoterPage(): JSX.Element {
  const [donationValue, setDonationValue] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [donationPoolValue, setDonationPoolValue] = useState(0);
  const { ribonContract, donationTokenContract } = useContract();

  const { account } = useAccount();

  const RIBON_CONTRACT_ADDRESS = "0x49D7028663D067dE4A62AadF0258B0fAA107Fe23";

  const deposit = async () => {
    setIsLoading(true);
    await donationTokenContract?.methods
      .approve(RIBON_CONTRACT_ADDRESS, parseInt(donationValue))
      .send({ from: account })
      .then(() => {
        ribonContract?.methods
          .deposit(parseInt(donationValue))
          .send({ from: account })
          .then(() => {
            setIsLoading(false);
          });
      });
  };

  useEffect(() => {
    async function getDonationPoolBalance() {
      setDonationPoolValue(
        await ribonContract?.methods.getDonationPoolBalance().call()
      );
    }
    getDonationPoolBalance();
  }, [ribonContract]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <img src={Background} />
      <S.Card>
        <S.InputContainer>
          <FormInput
            name="coin"
            label={"USDc"}
            type={"text"}
            value={donationValue}
            setValue={setDonationValue}
          />
          {true ? (
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
              onClick={() => null}
            />
          )}
        </S.InputContainer>
        <S.InfoContainer>
          <S.InfoItem>
            <h3>{donationPoolValue}</h3>
            <h6>POOL BALANCE</h6>
          </S.InfoItem>
          <S.InfoItem>
            <h3>100.000</h3>
            <h6>TOTAL DONATED</h6>
          </S.InfoItem>
        </S.InfoContainer>
      </S.Card>
    </S.Container>
  );
}
