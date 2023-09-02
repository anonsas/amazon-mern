import styled from 'styled-components';
import { color } from 'app/utils';

export const Component = styled.div`
  position: sticky;
  bottom: 0;
  color: ${color.white};
  background-color: ${color.black100};

  .footer {
    max-width: 90em; // 1440px
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
