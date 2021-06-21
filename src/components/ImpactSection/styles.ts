import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const ImpactText = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    margin-top: 10px;
    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
`;

export const ImpactContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;

    @media (min-width: ${theme.breakpoints.pad}) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 32px;
      text-align: left;
      margin-top: 32px;
    }
  `}
`;