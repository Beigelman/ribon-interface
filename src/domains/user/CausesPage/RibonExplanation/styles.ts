import styled, { css } from "styled-components";

export const RibonDescriptionContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      margin-top: 60px;
      height: 100vh;
      width: 20%;
    }
  `}
`;

export const ContentSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 0 16px;
    border-left: 2px solid ${theme.colors.lightGray};
  `}
`;

export const Title = styled.h2`
  margin-bottom: 28px;
  line-height: 32px;
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    margin-bottom: 16px;
    line-height: 22px;
  `}
`;
