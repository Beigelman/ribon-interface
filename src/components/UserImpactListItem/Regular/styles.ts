import styled, { css } from "styled-components";

interface Props {
  backgroundColor: string;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 8px 16px;
  box-shadow: 0px 2px 4px rgba(24, 86, 105, 0.15);
`;

export const ImpactIcon = styled.div`
  ${({ theme }) => css`
    background-color: ${(props: Props) => props.backgroundColor};
    position: absolute;
    left: 3px;
    top: 3px;
    width: 30px;
    height: 30px;
    border-radius: 56px;
    z-index: 1;

    @media (min-width: ${theme.breakpoints.pad}) {
      width: 34px;
      height: 34px;
    }
  `}
`;

export const ImpactIconLogo = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.ribonBlue};
    text-align: center;
  `}
`;

export const CircleProgressContainer = styled.div`
  img {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }
`;
