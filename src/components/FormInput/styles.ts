import styled, { css } from "styled-components";

interface InputProps {
  type: string;
}

export const Input = styled.div<InputProps>`
  ${({ theme, type }) => css`
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: ${type === "textarea" ? "100px" : "44px"};
    margin-bottom: 12px;
    display: inline-block;
    color: ${theme.colors.ribonBlack};
    border: 1px solid ${theme.colors.ribonBlue};
    position: relative;

    label {
      position: relative;
      top: -9px;
      left: 10px;
      font-size: 14px;
      text-align: center;
      padding: 0 2px;
      display: inline;
      background-color: ${theme.colors.bgGray};
      color: ${theme.colors.ribonBlue};

      @media (min-width: ${theme.breakpoints.desktop}) {
        top: -8px;
      }
    }

    input {
      padding: 0 10px;
      background-color: ${theme.colors.bgGray};
      color: ${theme.colors.ribonBlack};
      border: none;
      position: relative;
      top: -5px;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: Lato;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      width: 100%;

      @media (min-width: ${theme.breakpoints.desktop}) {
        top: -8px;
      }
    }

    textarea {
      padding: 0 10px;
      color: ${theme.colors.ribonBlack};
      border: none;
      position: relative;
      top: -6px;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: Lato;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      width: 100%;
      height: 70%;
      resize: none;

      @media (min-width: ${theme.breakpoints.desktop}) {
        top: -8px;
      }
    }

    span {
      display: ${type === "textarea" ? "flex" : "none"};
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  `}
`;
