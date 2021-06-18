import styled, { css } from "styled-components";

export * from "../../styles";

export const ImpactDescription = styled.h2`
  text-align: center;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const BrandContainer = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  `}
`;

export const HrSponsor = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.lightGray};
    margin: 0;
  `}
`;
