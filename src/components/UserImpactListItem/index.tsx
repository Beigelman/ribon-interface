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
  impactDays: number;
  nonProfitWallet: string;
}

export default function UserImpactListItem({
  backgroundColor,
  name,
  logo,
  circleImage,
  impactText,
  impactDays,
  nonProfitWallet,
}: Props): JSX.Element {
  const [totalDonated, setTotalDonated] = useState<number>(0);
  const { ribonContract } = useContract();
  const { account } = useAccount();

  const getImpact = useCallback(async () => {
    try {
      const total = await ribonContract?.methods
        .getUserImpactByNonProfit(account, nonProfitWallet)
        .call();
      setTotalDonated(total);
    } catch (error) {
      console.log(error);
    }
  }, [account, ribonContract]);

  useEffect(() => {
    getImpact();
  }, [getImpact]);

  return (
    <S.Container>
      <Regular
        backgroundColor={backgroundColor}
        circleImage={circleImage}
        name={name}
        logo={logo}
        progress={100}
        ribons={totalDonated}
        impactText={impactDays * totalDonated + " " + impactText}
      />
    </S.Container>
  );
}
