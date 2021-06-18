import styled, { css } from "styled-components";
import * as ButtonStyles from "../Button/styles";

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px -4px 4px rgba(24, 86, 105, 0.15);
    height: 80px;
    width: 100%;
    padding: 20px 16px;
    position: fixed;
    bottom: 0;
    background-color: white;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      ${ButtonStyles.Container} {
        width: 150px;
        margin-left: 16px;
      }
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      ${ButtonStyles.Container} {
        width: 150px;
        margin-left: 16px;
      }
    }
  `}
`;

export const CancelButton = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: block;
    }
  `}
`;
