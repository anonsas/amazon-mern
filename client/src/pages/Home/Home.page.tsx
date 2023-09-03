import { useShoppingListData } from './hooks/useShoppingListData';
import { Loader, Container } from 'UI';
import { Banner, ProductList } from './components';

export default function HomePage() {
  // const { isLoading, isError, data } = useShoppingListData();

  return (
    <Container maxWidth="xxl">
      <Banner />
      <ProductList />
    </Container>
  );
}
