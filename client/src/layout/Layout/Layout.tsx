import { Outlet, useLocation } from 'react-router-dom';
import './Layout.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function Layout() {
  const location = useLocation();

  const routesWithoutLayout = ['/register', '/login'];
  const hideLayout = routesWithoutLayout.includes(location.pathname);

  return (
    <>
      {!hideLayout ? (
        <div className="layout">
          <Header />
          <div className="container">
            <div className="container__content">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}
