import { Outlet, useLocation } from 'react-router-dom';
import * as Styled from './Layout.styled';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function Layout() {
  const location = useLocation();

  const routesWithoutLayout = ['/register', '/login'];
  const hideLayout = routesWithoutLayout.includes(location.pathname);

  if (hideLayout) {
    return <Outlet />;
  }

  return (
    <Styled.Layout>
      <Header />
      <Styled.MainContentContainer>
        <Styled.MainContent>
          <Outlet />
        </Styled.MainContent>
      </Styled.MainContentContainer>
      <Footer />
    </Styled.Layout>
  );
}
