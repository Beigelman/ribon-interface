import React from "react";
import * as S from "./styles";

export type Props = {
  disabled: boolean;
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

function ArrowRight({ disabled, onClick }: Props): JSX.Element {
  const setArrowColor = disabled
    ? "rgba(255, 255, 255, 0)"
    : "rgba(255, 255, 255)";
  return (
    <S.ArrowImage
      id="arrow-right"
      onClick={onClick}
      fill={setArrowColor}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </S.ArrowImage>
  );
}

export default ArrowRight;
