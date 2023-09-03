import styled from 'styled-components';
import { color } from 'app/utils';

export const Component = styled.section`
  position: relative;

  .gradient {
    position: absolute;
    bottom: 0;
    height: 8rem;
    width: 100%;
    background-image: linear-gradient(to top, ${color.gray100}, transparent);
    z-index: 20;
  }

  img {
    height: 60rem;
    background-position: center;
    object-fit: cover;
  }
`;
