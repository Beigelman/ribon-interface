import styled, { css } from "styled-components";

interface StepProps {
  animation: string;
}

export const Container = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
  border-spacing: 7px;
  text-align: center;
  margin: 7px -7px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      border-spacing: 30px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      margin-top: 0;
    }
  `}
`;

export const StepContainer = styled.div`
  display: table-cell;
`;

export const Text = styled.h5`
  ${({ theme, color }) => css`
    margin-top: 8px;
    color: ${color};
    font-weight: bold;
    line-height: 20px;
    overflow-wrap: break-word;

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 18px;
    }
  `}
`;

export const Step = styled.div<StepProps>`
  ${({ color }) => css`
    background-color: ${color};
    border-radius: 5px;
    width: 100%;
    height: 5px;
    position: relative;
  `}

  ${({ animation }) =>
    animation &&
    css`
      &:before {
        width: 5px;
        height: 5px;
        display: inline-block;
        position: absolute;
        left: 0;
        content: "";
        border-radius: 50%;
        animation: ${animation};
        animation-fill-mode: both;
        background-color: white;

        @keyframes progressBar {
          0% {
            left: 0;
          }
          100% {
            left: 100%;
          }
        }
      }
    `}
`;
