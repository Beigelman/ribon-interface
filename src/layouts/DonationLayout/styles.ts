import styled, { css } from "styled-components";
import Button from "../../components/Button";

export const Container = styled.div`
  ${() => css``}
`;

export const BodyContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 80px;
    margin-top: 62px;
    width: 100%;
    overflow-y: scroll;
    background-color: white;

    @media (min-width: ${theme.breakpoints.pad}) {
      margin-top: 0;
      font-size: 20px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 32px;
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    height: 100vh;
    background-color: #fff;

    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: 43fr 57fr;
    }
  `}
`;

export const LeftContainer = styled.div`
  ${({ theme }) => css`
    z-index: 3;

    @media (min-width: ${theme.breakpoints.pad}) {
      box-shadow: 16px 0px 36px rgba(24, 86, 105, 0.3);
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      margin-top: 100px;
      padding: 32px;
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px -4px 4px rgba(24, 86, 105, 0.15);
    height: 80px;
    padding: 20px 16px;
    z-index: 5;
    width: 100%;
    bottom: 0;
    display: table;
    table-layout: fixed;
    background-color: white;

    button {
      height: 56px;
    }

    @media (min-width: ${theme.breakpoints.pad}) {
      border-spacing: 22px 0;

      button {
        width: 60%;
      }
    }
  `}
`;

export const CancelButton = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      justify-content: flex-end;
    }
  `}
`;

export const Footer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
  `}
`;

export const ButtonCell = styled.div`
  ${() => css`
    display: table-cell;
  `}
`;

export const FinishButton = styled(Button)`
  margin: 0 auto;
`;
