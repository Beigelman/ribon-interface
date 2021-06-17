import styled from "styled-components";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  ribonsColor?: string;
  leftIcon?: string;
};

export const Container = styled.button`
  position: relative;
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: Props) => props.backgroundColor};
  border-color: ${(props: Props) =>
    props.borderColor ? props.borderColor : props.backgroundColor};
  color: ${(props: Props) => props.textColor};

  :hover {
    cursor: pointer;
  }

  #left-icon {
    position: absolute;
    left: 8px;
  }

  svg {
    margin-left: 2px;

    path {
      fill: ${(props: Props) => props.ribonsColor};
    }
  }
`;
