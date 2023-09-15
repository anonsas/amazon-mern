import styled, { css } from 'styled-components';
import { Props } from './Icon';

export const Component = styled.img<Props>`
  ${({ size }) => {
    if (size === 'sm') {
      return css`
        height: 2rem;
        width: 2rem;
      `;
    }
    if (size === 'md') {
      return css`
        height: 2.6rem;
        width: 2.6rem;
      `;
    }
    if (size === 'lg') {
      return css`
        height: 3.2rem;
        width: 3.2rem;
      `;
    }
  }}
`;
