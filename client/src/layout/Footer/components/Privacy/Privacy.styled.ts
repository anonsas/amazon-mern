import styled from 'styled-components';
import { color } from 'app/utils';

export const Component = styled.ul`
  display: flex;
  column-gap: 2rem;

  .link {
    color: ${color.white};

    &:hover {
      text-decoration: underline;
    }
  }
`;
