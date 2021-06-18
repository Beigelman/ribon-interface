import React, { AnchorHTMLAttributes } from "react";
import * as S from "./styles";

export type onClickType = (e: React.MouseEvent | any) => void;

export type Props = {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  href: string;
  target?: string;
  onClick?: onClickType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

// TODO: Understanding if we can extend our common "Button" class to act like an Anchor (<a></a>)
// https://blog.andrewbran.ch/polymorphic-react-components/#an-alternative-approach

export default function ButtonLink({
  text,
  textColor,
  backgroundColor,
  borderColor,
  href,
  target,
  onClick,
  ...props
}: Props): JSX.Element {
  return (
    <S.Container
      href={href}
      target={target}
      textColor={textColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onClick={onClick}
      {...props}
    >
      {text}
    </S.Container>
  );
}
