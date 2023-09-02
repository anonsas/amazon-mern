import { lazy, Suspense, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'layout/Layout/Layout';
import { Loader } from 'components';

const HomePage = lazy(() => import('../pages/Home/Home.page'));
const HomePage2 = lazy(() => wait(1000).then(() => import('../pages/Home/Home.page')));
const RegisterPage = lazy(() => import('../pages/Register/Register.page'));
const LoginPage = lazy(() => import('../pages/Login/Login.page'));
const AccountPage = lazy(() => import('../pages/Account/Account.page'));
const OrderPage = lazy(() => import('../pages/Order/Order.page'));
const CartPage = lazy(() => import('../pages/Cart/Cart.page'));

const withSuspense = <P extends object>(Component: FC<P>) => {
  return (props: P) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

const HomePageWithSuspense = withSuspense(HomePage);
const RegisterPageWithSuspense = withSuspense(RegisterPage);
const LoginPageWithSuspense = withSuspense(LoginPage);
const AccountPageWithSuspense = withSuspense(AccountPage);
const OrderPageWithSuspense = withSuspense(OrderPage);
const CartPageWithSuspense = withSuspense(CartPage);

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePageWithSuspense />} />
        <Route path="/register" element={<RegisterPageWithSuspense />} />
        <Route path="/login" element={<LoginPageWithSuspense />} />
        <Route path="/account" element={<AccountPageWithSuspense />} />
        <Route path="/orders" element={<OrderPageWithSuspense />} />
        <Route path="/cart" element={<CartPageWithSuspense />} />
      </Route>
    </Routes>
  );
}

function wait(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds);
  });
}
