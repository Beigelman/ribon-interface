import React from "react";
import * as S from "./styles";

export type Props = {
  disabled: boolean;
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

function ArrowLeft({ disabled, onClick }: Props): JSX.Element {
  const setArrowColor = disabled
    ? "rgba(255, 255, 255, 0)"
    : "rgba(255, 255, 255)";
  return (
    <S.ArrowImage
      id="arrow-left"
      onClick={onClick}
      fill={setArrowColor}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </S.ArrowImage>
  );
}

export default ArrowLeft;
