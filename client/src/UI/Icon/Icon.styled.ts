import styled, { css } from 'styled-components';
import { Props } from './Icon';

export const Component = styled.img<Props>`
  ${(props) => {
    if (props.$size === 'sm') {
      return css`
        height: 2rem;
        width: 2rem;
      `;
    }
    if (props.$size === 'md') {
      return css`
        height: 2.6rem;
        width: 2.6rem;
      `;
    }
    if (props.$size === 'lg') {
      return css`
        height: 3.2rem;
        width: 3.2rem;
      `;
    }
  }}
`;
