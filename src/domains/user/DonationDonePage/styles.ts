import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    width: 100%;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    text-align: center;
    padding: 0 16px;

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 24px;
    }
  `}
`;

export const BodyContainer = styled.div`
  ${({ theme }) => css`
    padding: 32px 0 92px 0;
    width: 100%;
    margin-top: 60px;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 32px 160px;
    }
  `}
`;

export const CompanyContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px;
  `}
`;

export const CompanyImage = styled.img`
  ${({ theme }) => css`
    width: 130px;
    height: 50px;
    object-fit: contain;
    @media (min-width: ${theme.breakpoints.pad}) {
      width: 260px;
      height: 100px;
      object-fit: contain;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    margin-top: 62px;
    @media (min-width: ${theme.breakpoints.pad}) {
      display: none;
    }
  `}
`;

export const DividerWithText = styled.div`
  ${({ theme }) => css`
    height: 10px;
    border-bottom: 1px solid ${theme.colors.lightGray};
    text-align: center;
    margin: 26px 10px;

    span {
      font-size: 18px;
      color: ${theme.colors.ribonBlue};
      background-color: #fff;
      padding: 0 10px;
    }

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 100%;
    }
  `}
`;

export const Divider = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.ribonBlue};
    margin: 16px;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    width: 100%;
    @media (min-width: ${theme.breakpoints.pad}) {
      display: none;
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px -4px 4px rgba(24, 86, 105, 0.15);
    padding: 20px 16px;
    width: 100%;
    height: 100%;
    background-color: white;
    align-items: center;
    button {
      height: 45px;
      margin-bottom: 7px;
      img {
        width: 20px;
        height: 18px;
      }
    }

    @media (min-width: ${theme.breakpoints.pad}) {
      border-spacing: 22px 0;

      button {
        width: 60%;
      }
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 100vh;
    background-color: #fff;

    @media (min-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: 43fr 57fr;
    }
  `}
`;

export const SidebarContainer = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.desktop}) {
      display: block;
      img {
        max-width: 220%;
        width: 120%;
        height: auto;
      }
      h2 {
        display: none;
      }
    }
  `}
`;

export const DesktopButtonContainer = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: block;
      width: 70%;
      margin-top: 28px;
      button {
        width: 100%;
        height: 50px;
        margin-bottom: 7px;
      }
    }
  `}
`;
