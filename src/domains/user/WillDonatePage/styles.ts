import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
    }
  `}
`;

export const ContentSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      align-items: center;
    }
  `}
`;
