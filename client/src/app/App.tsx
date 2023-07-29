import { Routes, Route } from 'react-router-dom';
import { Layout } from 'layout/Layout/Layout';
import * as Page from 'pages';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Page.HomePage />} />
        <Route path="/register" element={<Page.RegisterPage />} />
        <Route path="/login" element={<Page.LoginPage />} />
        <Route path="/account" element={<Page.AccountPage />} />
        <Route path="/orders" element={<Page.OrderPage />} />
        <Route path="/cart" element={<Page.CartPage />} />
      </Route>
    </Routes>
  );
}
