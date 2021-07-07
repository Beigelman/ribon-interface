import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import Background from "../../assets/images/background.jpg";

import useContract from "../../hooks/useContract";
import useAccount from "../../hooks/useAccount";

export default function PromoterPage(): JSX.Element {
  const [donationPoolValue, setDonationPoolValue] = useState(0);
  const [integrationPoolValue, setIntegrationPoolValue] = useState(0);
  const { ribonContract } = useContract();
  const { account } = useAccount();

  const INTEGRATION_ADDRESS = "0xD6D7CA65a8f20C26Eeaef98E5CFB55Fa5085Bf20";

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getDonationPoolBalance() {
      setDonationPoolValue(
        await ribonContract?.methods.getDonationPoolBalance().call()
      );
      setIntegrationPoolValue(
        await ribonContract?.methods
          .getIntegrationBalance(INTEGRATION_ADDRESS)
          .call()
      );
    }
    getDonationPoolBalance();
  }, [ribonContract]);

  function sendToIntegration() {
    setIsLoading(true);
    ribonContract?.methods
      .allowIntegrationDistribute(INTEGRATION_ADDRESS, 1000)
      .send({ from: account })
      .then(() => {
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <img src={Background} />
      <S.Card>
        <h2>Donation Pool Balance</h2>
        {donationPoolValue}
        <h2>Integration Balance</h2>
        {integrationPoolValue}
        <Button text="Send" onClick={() => sendToIntegration()} />
      </S.Card>
    </S.Container>
  );
}
