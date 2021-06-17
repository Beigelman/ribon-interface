import React from "react";
import * as S from "./styles";
import theme from "../../styles/theme";

export type Props = {
  children?: React.ReactNode;
  color?: string;
  boxShadow?: string;
  icon?: React.ReactNode;
};

function DonationHeader({
  children,
  color = theme.colors.ribonBlue,
  icon,
  boxShadow = "0px 2px 4px rgba(24, 86, 105, 0.15)",
}: Props): JSX.Element {
  return (
    <S.Header color={color} boxShadow={boxShadow}>
      {icon}
      <S.Text>{children}</S.Text>
    </S.Header>
  );
}

export default DonationHeader;
