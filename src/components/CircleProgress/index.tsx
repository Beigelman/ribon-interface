import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import * as S from "./styles";
import "react-circular-progressbar/dist/styles.css";
import theme from "../../styles/theme";

export type Props = {
  value: number;
  image?: string;
  children?: JSX.Element | null;
};

function CircleProgress({ value, image, children = null }: Props): JSX.Element {
  return (
    <S.Component>
      <CircularProgressbarWithChildren
        value={value}
        styles={buildStyles({
          pathTransition: "none",
          pathColor: theme.colors.ribonBlue,
          trailColor: theme.colors.lightGray,
        })}
        strokeWidth={3}
      >
        {image && <S.CircleProgressImg src={image} alt="circle-progress-img" />}
        {children}
      </CircularProgressbarWithChildren>
    </S.Component>
  );
}

export default CircleProgress;
