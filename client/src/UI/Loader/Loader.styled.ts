import styled, { css } from 'styled-components';
import { color } from 'app/utils';
import { Props } from './Loader';

export const Component = styled.div<Props>`
  position: relative;
  margin: 0 auto;
  height: 8rem;
  width: auto;
  text-align: center;
  display: flex;
  justify-content: center;

  ${(props) => {
    if (props.marginTop === 'sm') {
      return css`
        margin-top: 2rem;
      `;
    }
    if (props.marginTop === 'md') {
      return css`
        margin-top: 4rem;
      `;
    }
    if (props.marginTop === 'lg') {
      return css`
        margin-top: 6rem;
      `;
    }
  }}

  div {
    transform-origin: 4rem 4rem;
    animation: loading 1.2s linear infinite;
  }

  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 3.7rem;
    height: 1.8rem;
    width: 0.6rem;
    border-radius: 20%;
    background: ${color.yellow300};
  }
  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

  @keyframes loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
