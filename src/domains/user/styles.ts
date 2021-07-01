import styled, { css } from "styled-components";
import * as ButtonStyles from "../../components/Button/styles";

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

export const BodyContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 80px;
    padding: 0 16px;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 32px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      flex: 1;
      padding-bottom: 32px;
    }
  `}
`;

export const ImageContainer = styled.div`
  margin: 0 4px;
`;

export const ImageNoMarginContainer = styled.div`
  margin: 0 -20px;
`;

export const DesktopImageContainer = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 100%;
      max-width: 707px;
      display: block;
      padding-right: 24px;
      padding-left: 24px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 50%;
      max-width: 707px;
      display: block;
      padding-right: 0;
      padding-left: 0;
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

export const DesktopLogoContainer = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${NgoLogo} {
        margin-top: 36px;
      }
    }
  `}
`;

type NgoNameProps = {
  color: string;
};

export const NgoName = styled.h2<NgoNameProps>`
  ${({ color }) => css`
    color: ${color};
  `}
`;

export const NgoBackgroundImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 180px;
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

export const Section = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: white;
    padding-bottom: 28px;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 16px;
      margin-left: 24px;
      margin-top: -100px;
      padding: 0 48px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      flex-direction: column;
      margin-top: 0;
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

export const RibonsContainer = styled.span`
  ${({ theme, color }) => css`
    color: ${color};
    font-size: 20px;
    font-weight: bold;

    @media (min-width: ${theme.breakpoints.pad}) {
      font-size: 24px;
    }
  `}
`;

export const Hr = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.lightGray};
    margin: 28px 0px;
  `}
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h4`
  text-align: center;
  margin-top: 12px;
  margin-bottom: 20px;
  font-weight: bold;
  line-height: 25px;
`;

export const Description = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    margin-top: 12px;
    margin-bottom: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
  `}
`;
