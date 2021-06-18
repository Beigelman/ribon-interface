import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.bgGray};
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0px;
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
    padding: 0 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 70%;
      padding: 0 40px;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-weight: bold;
    line-height: 160%;
    margin: 16px 0;
    text-align: center;

    @media (min-width: ${theme.breakpoints.pad}) {
      font-size: 24px;
      width: 70%;
    }
  `}
`;

export const TitleBlue = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    font-size: 20px;
    font-weight: bold;
    line-height: 160%;
    margin-bottom: 16px;

    @media (min-width: ${theme.breakpoints.pad}) {
      font-size: 24px;
    }
  `}
`;

export const Description = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    line-height: 110%;
    margin-bottom: 8px;
    text-align: center;
  `}
`;

export const TextBlue = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    line-height: 110%;
    margin-bottom: 6px;
    cursor: pointer;
    text-align: center;
  `}
`;
