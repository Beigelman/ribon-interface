import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    background-color: #e5e5e5;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 320px;
    background-color: white;
    padding: 48px 32px 36px 32px;

    box-shadow: 0px 4px 4px 0px #00000040;
    margin: 0 auto;
    margin-top: -48px;
    border-radius: 8px;
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: 12px;
    border-bottom: 1px solid ${theme.colors.lightGray};
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `}
`;

export const InfoItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 50%;
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 16px;
    left: 36px;
    width: 76px;
    height: 37px;
  `}
`;

export const BackgroundContainer = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    min-height: 192px;
    object-fit: cover;
  `}
`;

export const Token = styled.img`
  ${({ theme }) => css`
    height: 20px;
    width: 20px;
    margin-right: 4px;
  `}
`;

export const TokenContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border-radius: 8px;
    width: 120px;
    border: 1px solid ${theme.colors.ribonBlue};
    color: ${theme.colors.ribonBlack};
    font-size: 16px;
    padding: 4px 6px;
  `}
`;
