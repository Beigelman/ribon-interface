import React, { useState } from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import * as S from "./styles";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Background from "../../assets/images/background.jpg";
import HeartIcon from "../../assets/icons/heart.svg";

import { newContextComponents } from "@drizzle/react-components";
const { AccountData, ContractData, ContractForm } = newContextComponents;

export default function PromoterPage(): JSX.Element {
  return (
    <DrizzleContext.Consumer>
      {(drizzleContext: any) => {
        const { drizzle, drizzleState, initialized } = drizzleContext;
        if (!initialized) {
          return "Loading...";
        }
        return (
          <S.Container>
            <img src={Background} />
            <S.Card>
              <h2>Integration Balance</h2>
              <ContractData
                contract="Ribon"
                method="getIntegrationBalance"
                methodArgs={["0x4494a548Ba664aaf70c3E820E18A50d7f0Bc0bfc"]}
                drizzle={drizzle}
                drizzleState={drizzleState}
              />

              <h2>Allow donations</h2>
              <ContractForm
                contract="Ribon"
                method="allowUserDonate"
                drizzle={drizzle}
                drizzleState={drizzleState}
              />
            </S.Card>
          </S.Container>
        );
      }}
    </DrizzleContext.Consumer>
  );
}
