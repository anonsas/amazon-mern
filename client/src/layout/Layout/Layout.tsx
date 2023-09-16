import { Outlet, useLocation } from 'react-router-dom';
import * as Styled from './Layout.styled';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Container } from 'UI';

export function Layout() {
  const location = useLocation();

  const routesWithoutLayout = ['/register', '/login'];
  const hideLayout = routesWithoutLayout.includes(location.pathname);

  if (hideLayout) {
    return <Outlet />;
  }

  return (
    <Styled.Component>
      <Header />
      <main className="content-container">
        <Container $maxWidth="xxl">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Styled.Component>
  );
}
