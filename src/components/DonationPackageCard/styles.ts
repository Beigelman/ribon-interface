import styled, { css } from "styled-components";

type ContainerProps = {
  color: string;
};

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 16px;
    margin-bottom: 16px;
    border: 1px solid ${theme.colors.lightGray};
    box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.15);

    @media (min-width: ${theme.breakpoints.pad}) {
      margin-right: 8px;
      margin-left: 8px;
    }
  `}
`;

type GoalProps = {
  hasGoal: boolean;
  percentageProgress?: string;
  color?: string;
};

export const Goal = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  height: 10px;
  visibility: ${(props: GoalProps) => (props.hasGoal ? "visible" : "hidden")};

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `}

  > .percentage {
    ${({ theme }) => css`
      width: 20px;
      margin: 0;
      color: ${theme.colors.ribonBlue};

      @media (min-width: ${theme.breakpoints.pad}) {
        display: none;
      }
    `}
  }

  .desktopPercentage {
    display: none;
    color: white;
    margin: 6px 0px 0px 0px;

    ${({ theme }) => css`
      @media (min-width: ${theme.breakpoints.pad}) {
        display: block;
      }
    `}
  }

  .bar {
    ${({ theme }) => css`
      height: 100%;
      background-color: ${theme.colors.ribonBlue};
      width: ${(props: GoalProps) =>
        props?.percentageProgress ? `${props.percentageProgress}` : "0%"};
      border-radius: 16px;
      z-index: 2;
    `}
  }
`;

export const BarSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > .containerBar {
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.ribonBlue};
      background-color: "white";
      width: 100%;
      height: 4px;
      border-radius: 16px;
      z-index: 1;
      display: flex;
      flex-direction: row;
      margin-top: 8px;

      @media (min-width: ${theme.breakpoints.pad}) {
        margin-left: 0px;
      }
    `}
  }
`;

export const Bar = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.ribonBlue};
    width: ${(props: GoalProps) =>
      props?.percentageProgress ? `${props.percentageProgress}` : "0%"};
    border-radius: 16px;
    z-index: 2;
  `}
`;

export const BarValue = styled.h5`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.ribonBlue};
    margin-left: 3px;
  `}
`;

export const ContainerBar = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.ribonBlue};
    background-color: "white";
    width: 100%;
    height: 4px;
    border-radius: 16px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    margin-top: 8px;

    @media (min-width: ${theme.breakpoints.pad}) {
      margin-left: 0px;
    }
  `}
`;

export const DonateSection = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 8px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 8px 0 14px 0;
`;

export const Title = styled.h2`
  width: 100%;
  overflow: hidden;
`;

export const StarIcon = styled.img`
  margin-right: 8px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  padding: 8px 16px 16px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const DesktopAboutNGOContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      display: block;
      text-align: right;
      padding-bottom: 8px;
    }
  `}
`;

export const AboutNGOLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: white;
  font-weight: 700;
  line-height: 22.4px;
`;
