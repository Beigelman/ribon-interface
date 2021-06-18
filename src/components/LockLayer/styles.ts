import styled, { css } from "styled-components";

type LockContainerProps = {
  shouldRender?: boolean;
};

export const LockContainer = styled.div<LockContainerProps>`
  ${({ shouldRender }) => css`
    display: ${shouldRender ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  `}
`;
