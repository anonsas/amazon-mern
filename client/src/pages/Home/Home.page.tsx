import { useShoppingListData } from './hooks/useShoppingListData';
import { Loader, Container } from 'UI';
import { Banner, ProductList } from './components';

export default function HomePage() {
  const { isLoading, isError, data } = useShoppingListData();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2>Error my friend...</h2>;
  }

  return (
    <Container maxWidth="xxl">
      <Banner />
      <ProductList data={data.data} />
    </Container>
  );
}
