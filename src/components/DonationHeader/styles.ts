import styled, { css } from "styled-components";

interface HeaderProps {
  boxShadow?: string;
}

export const Header = styled.div<HeaderProps>`
  ${({ theme, boxShadow }) => css`
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: white;
    height: 40px;
    width: 100%;
    padding: 8px 16px;
    box-shadow: ${boxShadow};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: none;
    }
  `}
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    color: ${theme.colors.ribonBlack};
  `}
`;
