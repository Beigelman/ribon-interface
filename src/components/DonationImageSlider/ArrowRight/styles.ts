import styled, { css } from "styled-components";

export const ArrowImage = styled.svg`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
  left: auto;
  right: 5px;

  ${({ fill }) => css`
    fill: ${fill};
  `}
`;
