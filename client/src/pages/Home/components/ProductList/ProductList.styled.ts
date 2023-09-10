import styled from 'styled-components';
import { deviceWidth } from 'app/utils/breakpoints';

export const Component = styled.ul`
  margin-top: -20rem;
  padding: 0 2.5rem;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-auto-flow: dense;
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

  .products-item-span-2 {
    li {
      width: 100%;
    }

    @media ${deviceWidth.md_up} {
      width: 100%;
      grid-column: 1 / 3;
    }
  }
`;
