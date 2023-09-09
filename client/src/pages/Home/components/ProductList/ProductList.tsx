import * as Styled from './ProductList.styled';
import { ProductCard } from '..';
import { useShoppingListData } from 'pages/Home/hooks/useShoppingListData';
import { Loader } from 'UI';
import images from 'assets/images';
import { IProduct } from 'app/types/Product.type';

const generateProductCard = ({ id, title, price, description, category, image, rating }: IProduct) => (
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
);

export function ProductList() {
  const { isLoading, isError, data } = useShoppingListData();

  if (isLoading) {
    return <Loader marginTop="lg" />;
  }

  if (isError) {
    return <h2>Error my friend...</h2>;
  }

  return (
    <Styled.Component>
      {data.data?.slice(0, 4).map(generateProductCard)}
      <img src={images.adHomepage} className="products-ad" alt="ad" />
      <div className="products-item-span-2">{data.data?.slice(4, 5).map(generateProductCard)}</div>
      {data.data?.slice(5).map(generateProductCard)}
    </Styled.Component>
  );
}
