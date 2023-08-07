import './Home.page.scss';
import { useShoppingListData } from './hooks/useShoppingListData';
import { Loader } from 'components/Loader/Loader';
import { ProductCard } from './components/ProductCard/ProductCard';

export function HomePage() {
  const { isLoading, isError, data } = useShoppingListData();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2>Error my friend...</h2>;
  }

  return (
    <section className="products-container">
      {data.data?.slice(0, 4).map(({ id, title, price, description, category, image, rating }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
          category={category}
          image={image}
          rating={rating}
        />
      ))}

      {/* <img src={images.adHomepage} className="products-ad" alt="ad" /> */}

      <div className="products-item-span-2">
        {data.data
          ?.slice(4, 5)
          .map(({ id, title, price, description, category, image, rating: { rate } }: any) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              category={category}
              image={image}
              rating={rate}
            />
          ))}
      </div>
      {data.data
        ?.slice(5)
        .map(({ id, title, price, description, category, image, rating: { rate } }: any) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
            rating={rate}
          />
        ))}
    </section>
  );
}
