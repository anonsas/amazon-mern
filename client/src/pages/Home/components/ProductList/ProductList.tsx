import * as Styled from './ProductList.styled';
import { IProduct } from 'app/types';
import { ProductCard } from '..';
import { useShoppingListData } from 'pages/Home/hooks/useShoppingListData';
import { Loader } from 'UI';
import images from 'assets/images';
import { useCartStore } from 'app/providers';

export function ProductList() {
  const { isLoading, isError, data } = useShoppingListData();
  const { addToCart } = useCartStore();

  const handleClick = (product: IProduct) => {
    addToCart(product);
  };

  if (isLoading) {
    return <Loader $marginTop="lg" />;
  }

  if (isError) {
    return <h2>Error my friend...</h2>;
  }

  return (
    <Styled.Component>
      {data.data?.slice(0, 4).map((product) => (
        <ProductCard key={product.id} handleClick={handleClick} {...product} />
      ))}

      <img src={images.adHomepage} className="products-ad" alt="ad" />

      {data.data?.slice(5).map((product) => (
        <ProductCard key={product.id} handleClick={handleClick} {...product} />
      ))}
    </Styled.Component>
  );
}
