import styled, { css } from "styled-components";
import texture from "./assets/textura.svg";

export const DesktopImageContainer = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: ${theme.colors.ribonBlue};
      height: 100%;
      background-image: url(${texture});
      background-size: cover;
    }
  `}
`;

export const BrandContainer = styled.div`
  ${({ theme }) => css`
    padding: 16px 0;
    border-radius: 22px;

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 256px;
      display: flex;
      align-items: center;
      background-color: ${theme.colors.bgGray};
      margin-top: 14px;
      padding: 14px;
      box-shadow: 0px -2px 2px rgba(24, 86, 105, 0.15);
    }
  `}
`;

export const NgoBackgroundImage = styled.img`
  ${() => css`
    width: 256px;
    height: 256px;
    object-fit: cover;

    border-radius: 22px;
  `}
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 400;
  margin-bottom: 12px;
`;
