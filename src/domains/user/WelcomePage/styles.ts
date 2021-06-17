import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 42px 16px;
    max-height: 100vh;
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0px;
    }
  `}
`;

export const LogoContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;

      img {
        position: fixed;
        width: 120px;
        height: 120px;
        top: 20px;
      }

      > .partner-logo {
        object-fit: contain;
        margin-left: 140px;
      }
    }
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > .user-image {
    margin-top: 78px;
    margin-bottom: 14px;
    width: 124px;
    height: 124px;
    border-radius: 250px;
    object-fit: cover;
  }

  > .ngo-image {
    margin-top: 28px;
    width: 196px;
    height: 238px;
  }

  > .logo-image {
    width: 110px;
    height: 80px;
  }

  > .partner-logo {
    width: 110px;
    height: 80px;
    object-fit: contain;
    margin-left: 20px;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: none;
    }
    @media (max-width: ${theme.breakpoints.mobileMedium}) {
      > .ngo-image {
        margin-top: 28px;
        width: 152px;
        height: 178px;
      }

      > .logo-image {
        width: 80px;
        height: 60px;
      }
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 50%;
      height: 100%;
      padding: 0px 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 60%;
      height: 100%;
      padding: 0px 140px;
    }
  `}
`;

export const DonationSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: ${theme.breakpoints.pad}) {
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
    }
  `}
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-top: 16px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      text-align: start;
    }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  width: 100%;

  > .btn-heart {
    width: auto;
    padding: 0px 20px;
    height: 42px;
    margin-top: 8px;
    box-shadow: 0px 2px 4px rgba(24, 86, 105, 0.15);

    #left-icon {
      position: static;
      margin-right: 6px;
      height: 20px;
      width: 20px;
    }
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      padding: 0px;
      width: 100%;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      margin-top: 40px;
      padding: 0px;
      width: 100%;
      align-items: flex-start;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    font-size: 36px;
    font-weight: bold;
    line-height: 160%;
    margin-bottom: 16px;
  `}
`;

export const Description = styled.h3`
  ${({ theme }) => css`
    font-weight: bold;
    color: ${theme.colors.darkGray};
    line-height: 160%;
    margin-bottom: 32px;

    @media (min-width: ${theme.breakpoints.pad}) {
      font-size: 20px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 32px;
    }
  `}
`;

// Desktop

export const DesktopImageContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      width: 50%;
      height: 100%;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      width: 40%;
      height: 100%;
    }
  `}
`;

export const DesktopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
