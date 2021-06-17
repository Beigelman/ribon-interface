import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      flex-direction: row;
      padding: 0px;
    }
  `}
`;

export const LogoContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: flex;
      position: absolute;
      top: 8px;
      left: 24px;
    }
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .ngo-image {
    margin-top: 40px;
    width: 136px;
    height: 168px;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: none;
    }
  `}
`;

export const RoundImageContainer = styled.div`
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
    margin-bottom: 14px;
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
    @media (max-width: ${theme.breakpoints.mobile}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 50%;
      padding: 0px 24px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 60%;
      padding: 0px 140px;
    }
  `}
`;

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  > .user-image {
    border-radius: 50px;
    height: 88px;
    width: 88px;
    object-fit: cover;
    margin-right: 18px;
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-top: 16px;
  padding: 0 16px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      text-align: start;
      padding: 0;
    }

    @media (min-width: ${theme.breakpoints.mobile}) {
      padding: 0;
    }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  padding: 0px 16px;

  button {
    margin-top: 8px;
    box-shadow: 0px 2px 4px rgba(24, 86, 105, 0.15);
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      padding: 0px;
      width: 60%;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      margin-top: 40px;
      padding: 0px;
      width: 55%;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      font-size: 36px;
      margin-bottom: 0;
      text-align: center;
    }
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    font-weight: bold;
    line-height: 160%;
    margin-bottom: 16px;
  `}
`;

export const Description = styled.h3`
  ${({ theme }) => css`
    font-weight: bold;
    text-align: center;
    color: ${theme.colors.ribonBlack};
    line-height: 160%;

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 100%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) {
      width: 100%;
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
