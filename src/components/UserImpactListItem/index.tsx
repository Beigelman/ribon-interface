import React, { useCallback, useEffect, useState } from "react";

import * as S from "./styles";
import Regular from "./Regular";
import useContract from "../../hooks/useContract";
import useAccount from "../../hooks/useAccount";

export interface Props {
  backgroundColor: string;
  name: string;
  logo: string;
  circleImage: string;
  impactText: string;
  ribons: number;
  impactDays: number;
  nonProfitWallet: string;
}

export default function UserImpactListItem({
  backgroundColor,
  name,
  logo,
  circleImage,
  impactText,
  ribons,
  impactDays,
  nonProfitWallet,
}: Props): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [totalDonated, setTotalDonated] = useState(0);
  const { ribonContract } = useContract();
  const { account } = useAccount();

  const getImpact = useCallback(async () => {
    setIsLoading(true);
    setTotalDonated(
      await ribonContract?.methods
        .getUserImpactByNonProfit(account, nonProfitWallet)
        .call()
    );
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getImpact();
  }, [getImpact]);

  return (
    <S.Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Regular
          backgroundColor={backgroundColor}
          circleImage={circleImage}
          name={name}
          logo={logo}
          progress={100}
          ribons={ribons}
          impactText={impactDays * totalDonated + " " + impactText}
        />
      )}
    </S.Container>
  );
}
