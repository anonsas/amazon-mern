import styled from 'styled-components';
import { deviceWidth } from 'app/utils/breakpoints';

export const Component = styled.div`
  margin-top: -20rem;
  padding: 0 2.5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: dense;
  gap: 4rem;

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
