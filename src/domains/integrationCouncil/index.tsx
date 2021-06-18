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
              <h2>Ribon Pool</h2>
              <ContractData
                contract="RibonGov"
                method="balanceOf"
                methodArgs={["0x49D7028663D067dE4A62AadF0258B0fAA107Fe23"]}
                drizzle={drizzle}
                drizzleState={drizzleState}
              />

              <h2>Allow integrations</h2>
              <ContractForm
                contract="Ribon"
                method="allowIntegrationDistribute"
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
