import styled, { css } from 'styled-components';
import { Props } from './Container';
import { breakpoints } from 'app/utils/breakpoints';

export const Container = styled.div<Props>`
  width: 100%;
  max-width: ${(props) => (props.$maxWidth === 'full' ? 'initial' : breakpoints[props.$maxWidth ?? 'xxl'])}px;

  /* Flex direction */
  ${(props) => {
    if (props.$flexDirection === 'row') {
      return css`
        display: flex;
        flex-direction: row;
      `;
    }
    if (props.$flexDirection === 'column') {
      return css`
        display: flex;
        flex-direction: column;
      `;
    }
    if (props.$flexDirection === 'rowReverse') {
      return css`
        display: flex;
        flex-direction: row-reverse;
      `;
    }
    if (props.$flexDirection === 'columnReverse') {
      return css`
        display: flex;
        flex-direction: column-reverse;
      `;
    }
  }}

  /* Gap */
  ${(props) => {
    if (props.$gap === 'sm') {
      return css`
        display: flex;
        gap: 1rem;
      `;
    }
    if (props.$gap === 'md') {
      return css`
        display: flex;
        gap: 1.5rem;
      `;
    }
    if (props.$gap === 'lg') {
      return css`
        display: flex;
        gap: 2;
      `;
    }
  }}

    /* Horizontal position */
    ${(props) => {
    if (props.$horizontalPosition === 'left') {
      return css`
        margin-right: auto;
      `;
    }
    if (props.$horizontalPosition === 'center') {
      return css`
        margin-left: auto;
        margin-right: auto;
      `;
    }
    if (props.$horizontalPosition === 'right') {
      return css`
        margin-left: auto;
      `;
    }
  }}


  /* Padding */
  ${(props) => {
    if (props.$padding === 'around') {
      return css`
        padding: 1rem;
      `;
    }
    if (props.$padding === 'around-md') {
      return css`
        padding: 1.5rem;
      `;
    }
    if (props.$padding === 'horizontal') {
      return css`
        padding: 0 1rem;
      `;
    }
    if (props.$padding === 'vertical') {
      return css`
        padding: 1rem 0;
      `;
    }
    if (props.$padding === 'top') {
      return css`
        padding-top: 1rem;
      `;
    }
    if (props.$padding === 'top-md') {
      return css`
        padding-top: 1.5rem;
      `;
    }
    if (props.$padding === 'right') {
      return css`
        padding-right: 1rem;
      `;
    }
    if (props.$padding === 'right-md') {
      return css`
        padding-right: 1.5rem;
      `;
    }
    if (props.$padding === 'bottom') {
      return css`
        padding-bottom: 1rem;
      `;
    }
    if (props.$padding === 'bottom-md') {
      return css`
        padding-bottom: 1.5rem;
      `;
    }
    if (props.$padding === 'left') {
      return css`
        padding-left: 1rem;
      `;
    }
    if (props.$padding === 'left-md') {
      return css`
        padding-left: 1.5rem;
      `;
    }
  }}
`;
