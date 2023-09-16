import styled from 'styled-components';
import { deviceWidth } from 'app/utils/breakpoints';

export const Component = styled.ul`
  margin-top: -20rem;
  margin-bottom: 4rem;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-auto-flow: dense;
  justify-content: space-between;
  gap: 4rem;

  @media ${deviceWidth.sm_up} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${deviceWidth.lg_up} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${deviceWidth.xxl_up} {
    grid-template-columns: repeat(4, 1fr);
  }

  .products-ad {
    width: 100%;
    grid-column: 1 / -1;
  }
`;
