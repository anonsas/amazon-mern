import styled from 'styled-components';
import { color } from 'app/utils';
import '../../app/styles/abstracts/mixins.scss';

export const Layout = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContentContainer = styled.div`
  flex: 1;
  padding: 0 1.6rem;
  background-color: ${color.gray100};
`;

export const MainContent = styled.main`
  display: grid;
  place-items: center;
  @include restrict-max-width($max-page-width);
`;
