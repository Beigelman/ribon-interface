import styled, { css } from "styled-components";

export * from "../styles";

export const ImpactDescription = styled.h2`
  ${({ theme }) => css`
    margin-top: 12px;
    margin-bottom: 20px;
    color: ${theme.colors.darkGray};
  `}
`;

export const BrandContainer = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 100%;
      height: 100%;
      display: flex;

      h3 {
        margin-top: 0;
      }
    }
  `}
`;

export const CompanyContainer = styled(BrandContainer)``;

export const RibonAmountContainer = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 160%;
    margin-bottom: 16px;

    @media (min-width: ${theme.breakpoints.pad}) {
      font-size: 24px;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
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

export const SponsorContainer = styled.div`
  ${({ theme }) => css`
    padding: 32px 16px 0 16px;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.lightGray};
  `}
`;

export const Section = styled.div`
  ${({ theme }) => css`
    padding: 20px 16px;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.lightGray};
  `}
`;

export const SubscriptionContainer = styled.div`
  ${({ theme }) => css`
    padding-bottom: 32px;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.lightGray};
    margin-bottom: 40px;
  `}
`;

export const ButtonContainer = styled.div`
  margin: 20px 0 28px 0;
  width: 100%;
`;

export const DonationInfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 25px 0px;
    align-items: center;

    @media (min-width: ${theme.breakpoints.pad}) {
      padding: 25px 0 0 0;
    }
  `}
`;

type ImpactTextProps = {
  color: string;
};

export const ImpactText = styled.h2<ImpactTextProps>`
  ${({ color }) => css`
    color: ${color};
    text-align: center;
    margin-top: 28px;
  `}
`;

export const DonatedRibonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: block;
      width: 100%;
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

export const ContinueDonatingContainer = styled.div`
  ${({ theme }) => css`
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${theme.breakpoints.pad}) {
      padding: 32px 28px;
    }
  `}
`;

export const ContinueDonatingText = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    text-align: center;
    margin-top: 28px;
  `}
`;

export const ContinueDonatingDescription = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    text-align: center;
    margin-top: 8px;
  `}
`;

export const UserDonationContainer = styled.div`
  margin-top: 15px;
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.mobileMedium}) {
      #donation-user-img,
      #donation-ngo-img {
        height: 75px;
        width: 75px;
        border-radius: 80px;
        object-fit: cover;
      }

      #heart-img {
        height: 58px;
        margin-top: 8px;
      }
    }
  `}
`;

export const HrNgo = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.lightGray};
    margin-top: 28px;
  `}
`;

type BoxShadowProps = {
  color?: string;
};

export const BoxShadow = styled.div<BoxShadowProps>`
  ${({ color = "rgba(24, 86, 105, 0.15)" }) => css`
    width: 100%;
    height: 2px;
    border: 1px solid ${color};
    margin: 8px 0 8px 0;
  `}
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

export const DesktopSpacer = styled.div`
  ${({ theme }) => css`
    display: none;
    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 50%;
      max-width: 707px;
      display: block;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 16px;
    margin-bottom: 120px;

    @media (min-width: ${theme.breakpoints.pad}) {
      background-color: white;
      align-self: center;
      width: 70%;
      max-width: 566px;
      display: flex;
      align-items: center;
      flex-direction: column;
      border: 1px solid ${theme.colors.lightGray};
      border-radius: 16px;
      margin-left: 24px;
      margin-top: -100px;
      margin-bottom: 32px;
      max-height: 1044px;
      padding: 0 70px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 48%;
      margin-top: 0;
      margin-bottom: 80px;
    }
  `}
`;

export const CauseImageContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;
    img {
      width: calc(100% + 20px);
      margin-left: -20px;
    }

    @media (min-width: ${theme.breakpoints.pad}) {
      display: none;
    }
  `}
`;

export const ImpactContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 16px;
    @media (min-width: ${theme.breakpoints.pad}) {
      padding: 0 35px;
    }
  `}
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
