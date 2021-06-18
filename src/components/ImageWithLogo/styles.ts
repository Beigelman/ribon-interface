import styled, { css } from "styled-components";

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: none;
    }
  `}
`;

export const NgoBackgroundImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 210px;
    object-fit: cover;

    @media (min-width: ${theme.breakpoints.pad}) {
      height: 450px;
      border-radius: 0 0 16px 16px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      height: 550px;
      border-radius: 0 16px 16px 0;
    }
  `}
`;

export const NgoLogo = styled.img`
  width: 96px;
  height: 96px;
  display: block;
  margin: 0 auto;
  margin-top: -48px;
`;
