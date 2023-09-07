import { Container } from 'UI';
import { Banner, ProductList } from './components';

export default function HomePage() {
  return (
    <Container maxWidth="xxl">
      <Banner />
      <ProductList />
    </Container>
  );
}
