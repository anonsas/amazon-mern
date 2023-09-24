import styled, { css } from 'styled-components';
import { color, deviceWidth } from 'app/utils';
import { Props } from './Card';

export const Card = styled.div<Props>`
  z-index: 30;
  position: relative;

  width: 26rem;
  padding: 1.5rem;
  background-color: ${color.white};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  @media ${deviceWidth.md_up} {
    width: 28rem;
  }
  @media ${deviceWidth.xl_up} {
    width: 32rem;
  }

  // Shadow
  ${(props) => {
    if (props.$shadow === 'md') {
      return css`
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      `;
    }
  }}

  // Padding
    ${(props) => {
    if (props.$padding === 'md') {
      return css`
        padding: 2rem;
      `;
    }
    if (props.$padding === 'lg') {
      return css`
        padding: 2.5rem;
      `;
    }
  }}

    // Background color
  ${(props) => {
    if (props.$backgroundColor === 'white') {
      return css`
        background-color: ${color.white};
      `;
    }
  }}
`;
