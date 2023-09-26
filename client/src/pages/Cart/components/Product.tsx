import { IProduct } from 'app/types';

interface Props extends Omit<IProduct, 'category'> {}

export function Product({ id, title, price, description, category, image, rating }: IProduct) {
  return <div>Product</div>;
}
