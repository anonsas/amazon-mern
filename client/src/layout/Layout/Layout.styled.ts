import styled from 'styled-components';
import { color } from 'app/utils';

export const Component = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .content-container {
    flex: 1;
    padding: 0 1.6rem;
    background-color: ${color.gray100};
  }

  .content {
    display: grid;
    place-items: center;
  }
`;
