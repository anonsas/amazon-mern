import styled from 'styled-components';
import { color } from 'app/utils';

export const Card = styled.div`
  z-index: 30;
  position: relative;
  height: auto;
  font-size: 1.4rem;
  padding: 2.5rem;
  background-color: ${color.white};

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
