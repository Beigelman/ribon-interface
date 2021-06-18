import styled, { css } from "styled-components";

export const Component = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0;
  `}
`;

export const CircleProgressImg = styled.img`
  ${() => css`
    width: calc(100% - 18px);
    height: calc(100% - 18px);
    border-radius: 500px;
    object-fit: cover;
  `}
`;

export const CircleProgressPercentageContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 14px;
    background-color: ${theme.colors.ribonBlue};
    padding: 21px;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
  `}
`;

export const CircleProgressPercentageText = styled.h4`
  ${() => css`
    color: #fff;
  `}
`;
