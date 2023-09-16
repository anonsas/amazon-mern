import styled from 'styled-components';
import { color } from 'app/utils';

export const Component = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .content-container {
    flex: 1;
    background-color: ${color.gray100};
    display: flex;
    justify-content: center;
  }
`;
