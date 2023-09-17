import styled, { css } from 'styled-components';
import { Props } from './Button';
import { color } from 'app/utils';

export const Button = styled.button<Props>`
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  line-height: 2rem;
  background-color: transparent;

  cursor: pointer;
  transition: 0.4s all;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  /* .icon {
    filter: brightness(0) invert(0);

    &--primary {
      filter: brightness(0) saturate(100%) invert(94%) sepia(60%) saturate(0%) hue-rotate(32deg) brightness(111%)
        contrast(100%);
    }

    &--secondary {
      filter: brightness(0) saturate(100%) invert(29%) sepia(100%) saturate(7491%) hue-rotate(279deg) brightness(90%)
        contrast(109%);
    }
  } */

  // Only Icon
  ${(props) => {
    if (props.$iconPosition === 'left') {
      return css`
        flex-direction: row;
      `;
    }
    if (props.$iconPosition === 'right') {
      return css`
        flex-direction: row-reverse;
      `;
    }
    if (props.$iconPosition === 'onlyIcon') {
      return css`
        width: 2.4rem;
        height: 2.4rem;
        padding: 1.6rem;
        border-radius: 50%;
      `;
    }
  }}

  // Variant
  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        color: ${color.black100};
        background-image: linear-gradient(to bottom, rgb(254 240 138), rgb(250 204 21));
        border: 0.2rem solid linear-gradient(to bottom, rgb(254 240 138), rgb(250 204 21));

        &:hover {
          background-image: linear-gradient(to bottom, rgb(234 179 8), rgb(250 204 21));
          border-color: linear-gradient(to bottom, rgb(234 179 8), rgb(250 204 21));
        }

        &:focus-visible {
          outline-color: none;
        }
      `;
    }
    if (props.variant === 'secondary') {
      return css`
        color: ${color.yellow200};
        background-color: transparent;
        border: 0.2rem solid ${color.yellow200};

        &:hover {
          color: white;
          background-color: ${color.yellow100};
          .icon {
            filter: brightness(0) saturate(100%) invert(94%) sepia(60%) saturate(0%) hue-rotate(32deg) brightness(111%)
              contrast(100%);
          }
        }
      `;
    }
  }}

    // Border radius
    ${(props) => {
    if (props.$borderRadius === 'sm') {
      return css`
        border-radius: 0.3rem;
      `;
    }
    if (props.$borderRadius === 'md') {
      return css`
        border-radius: 0.6rem;
      `;
    }
    if (props.$borderRadius === 'lg') {
      return css`
        border-radius: 1.2rem;
      `;
    }
    if (props.$borderRadius === 'full') {
      return css`
        border-radius: 10rem;
      `;
    }
  }}
`;
