import * as Styled from './ProductList.styled';
import { IProductList } from 'app/types/ProductList.type';
import { Card } from 'UI';
import { ProductCard } from '..';

type Props = {
  data: IProductList[];
};

export function ProductList({ data }: Props) {
  return (
    <Styled.Component>
      {data?.slice(0, 4).map(({ id, title, price, description, category, image, rating }) => (
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
        {data?.slice(4, 5).map(({ id, title, price, description, category, image, rating: { rate } }: any) => (
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

      {data?.slice(5).map(({ id, title, price, description, category, image, rating: { rate } }: any) => (
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
    </Styled.Component>
  );
}
