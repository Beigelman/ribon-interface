import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;
export const ShareText = styled.h5`
  ${({ theme }) => css`
    margin-top: 12px;
    color: ${theme.colors.darkGray};
  `}
`;

export const CenterContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: block;
      text-align: left;
    }
  `}
`;

export const SocialsSection = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const SocialsImage = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;

  :not(:first-child) {
    margin-left: 16px;
  }
`;
