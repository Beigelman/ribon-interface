import React, { useState } from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import * as S from "./styles";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Background from "../../assets/images/background.jpg";
import HeartIcon from "../../assets/icons/heart.svg";

import { newContextComponents } from "@drizzle/react-components";
const { ContractData, ContractForm } = newContextComponents;

export default function PromoterPage(): JSX.Element {
  const [donationValue, setDonationValue] = useState("0.0");

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
                    onClick={() => null}
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
                  <h3>
                    <ContractData
                      contract="RibonGov"
                      method="balanceOf"
                      methodArgs={[
                        "0x49D7028663D067dE4A62AadF0258B0fAA107Fe23",
                      ]}
                      drizzle={drizzle}
                      drizzleState={drizzleState}
                    />
                  </h3>
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
      }}
    </DrizzleContext.Consumer>
  );
}
