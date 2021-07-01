import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: 28px;
    margin-top: 16px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 0px;
    }
  `}
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      max-width: 344px;
    }
  `}
`;

export const NonProfitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 8px;
`;

export const NonProfitLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
  object-fit: contain;
`;
