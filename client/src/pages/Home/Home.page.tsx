import * as Styled from './Homepage.styled';
import { useShoppingListData } from './hooks/useShoppingListData';
import { Loader, Container, Card } from 'components';
import { Banner, ProductCard } from './components';

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

      <Styled.ProductsGridLayout>
        {data.data?.slice(0, 4).map(({ id, title, price, description, category, image, rating }) => (
          <Card key={id}>
            <ProductCard
              id={id}
              title={title}
              description={description}
              price={price}
              category={category}
              image={image}
              rating={rating}
            />
          </Card>
        ))}

        <div className="products-item-span-2">
          {data.data?.slice(4, 5).map(({ id, title, price, description, category, image, rating: { rate } }: any) => (
            <Card key={id}>
              <ProductCard
                id={id}
                title={title}
                description={description}
                price={price}
                category={category}
                image={image}
                rating={rate}
              />
            </Card>
          ))}
        </div>

        {data.data?.slice(5).map(({ id, title, price, description, category, image, rating: { rate } }: any) => (
          <Card key={id}>
            <ProductCard
              id={id}
              title={title}
              description={description}
              price={price}
              category={category}
              image={image}
              rating={rate}
            />
          </Card>
        ))}
      </Styled.ProductsGridLayout>
    </Container>
  );
}
