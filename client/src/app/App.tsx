import { lazy, Suspense, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'layout/Layout/Layout';
import { Loader } from 'UI';

const withSuspense = <P extends object>(Component: FC<P>) => {
  return (props: P) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

const HomePage = withSuspense(lazy(() => import('../pages/Home/Home.page')));
const RegisterPage = withSuspense(lazy(() => import('../pages/Register/Register.page')));
const LoginPage = withSuspense(lazy(() => import('../pages/Login/Login.page')));
const AccountPage = withSuspense(lazy(() => import('../pages/Account/Account.page')));
const OrderPage = withSuspense(lazy(() => import('../pages/Order/Order.page')));
const CartPage = withSuspense(lazy(() => import('../pages/Cart/Cart.page')));

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
