import styled, { css } from "styled-components";

type NgoNameProps = {
  color: string;
};

export const NgoName = styled.h2<NgoNameProps>`
  ${({ color }) => css`
    color: ${color};
  `}
`;

export const NgoLogo = styled.img`
  width: 96px;
  height: 96px;
  display: block;
  margin: 0 auto;
  margin-top: -48px;
  object-fit: contain;
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
