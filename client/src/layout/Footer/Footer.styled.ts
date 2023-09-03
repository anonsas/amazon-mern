import styled from 'styled-components';
import { color } from 'app/utils';

export const Component = styled.div`
  position: sticky;
  bottom: 0;
  color: ${color.white};
  background-color: ${color.black100};
  z-index: 1000;
  display: flex;
  justify-content: center;

  .footer {
    width: 100%;
    padding: 0 1.6rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
