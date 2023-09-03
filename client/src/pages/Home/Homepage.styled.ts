import styled from 'styled-components';
import { deviceWidth } from 'app/utils/breakpoints';

export const ProductsGridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-auto-flow: dense;

  @media ${deviceWidth.md_up} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${deviceWidth.lg_up} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${deviceWidth.xl_up} {
    grid-template-columns: repeat(4, 1fr);
  }

  .products-ad {
    width: 100%;
    grid-column: 1 / -1;
  }

  .products-item-span-2 {
    @include respond(md) {
      grid-column: 1 / 3;
    }
  }
`;
