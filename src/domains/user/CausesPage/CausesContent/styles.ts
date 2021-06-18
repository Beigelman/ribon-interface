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

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      max-width: 344px;
    }
  `}
`;
