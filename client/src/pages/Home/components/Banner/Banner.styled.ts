import styled from 'styled-components';

export const Component = styled.section`
  position: relative;

  .gradient {
    position: absolute;
    bottom: 0;
    height: 8rem;
    width: 100%;
    background-image: linear-gradient(to top, #eaeded, transparent);
    z-index: 20;
  }

  img {
    height: 60rem;
    background-position: center;
    object-fit: cover;
  }
`;
