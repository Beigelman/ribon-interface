import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.bgGray};
    width: 100%;
    padding: 20px 16px;
    box-shadow: 0px 2px 4px rgba(24, 86, 105, 0.15);
    z-index: 4;

    @media (min-width: ${theme.breakpoints.pad}) {
      padding: 0 16px;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    padding: 0px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.pad}) {
      padding: 12px 14px;
    }
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 180px;
  height: 40px;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
    }
  `}
`;

export const Arrow = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  padding: 7px 0;
`;
