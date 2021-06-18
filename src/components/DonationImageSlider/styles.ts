import styled, { css } from "styled-components";

type NgoImageProps = {
  image: string;
};

export const NavigationWrapper = styled.div`
  position: relative;
  [class^="number-slide"],
  [class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 200px;
  }
`;

export const SlideImage = styled.div`
  background-image: url(${(props: NgoImageProps) => props.image});
  width: calc(100vw - 16px);
  height: calc(100vw - 16px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      border-right: 1px solid white;
      max-width: 344px;
      max-height: 264px;
    }
  `}
`;

export const Dots = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
  margin-top: -33px;
  margin-bottom: 23px;
  z-index: 1;
  &:focus {
    outline: none;
  }

  > .active {
    background: #fff;
  }
`;

export const ButtonSlider = styled.button`
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  margin: 0 3px;
  padding: 4px;
  cursor: pointer;
`;
