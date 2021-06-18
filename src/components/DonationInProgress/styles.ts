import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 5;
  position: fixed;
  top: 102px;
  left: 0;
  bottom: 0;
  right: 0;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      top: 144px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      top: 54px;
    }
  `}
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  margin-top: 16px;
`;

export const Text = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    font-size: 28px;
  `}
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  animation: fadeIn 2s, moveUp 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes moveUp {
    from {
      transform: translate(0, 40px);
    }
    to {
      transform: translate(0, 0);
    }
  }
`;

export const NgoImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 50%;
      border-radius: 16px;
    }
  `}
`;

export const Gradient = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  position: relative;
  margin-top: -100px;
  height: 100px;
  width: 100%;
`;

export const AnimationContainer = styled.div``;

export const AnimationText = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    text-align: center;
  `}
`;
