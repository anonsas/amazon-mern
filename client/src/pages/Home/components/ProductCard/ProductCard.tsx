import ClampLines from 'react-clamp-lines';
import { IProductList } from 'app/types/ProductList.type';
import * as Styled from './ProductCard.styled';

export function ProductCard({ id, title, price, description, category, image, rating }: IProductList) {
  return (
    <Styled.Component>
      <p className="category">{category}</p>
      <img src={image} alt={title} className="image" />

      <ClampLines
        id="clam-line-1"
        text={description}
        lines={1}
        ellipsis="..."
        // moreText={false}
        // lessText={false}
        // className="product__title"
        innerElement="h4"
      />

      {/* <StarIcons rating={rating.rate} /> */}

      <ClampLines
        id="clam-line-2"
        text={description}
        lines={2}
        ellipsis="..."
        // moreText={false}
        // lessText={false}
        // className="product__desc"
        innerElement="p"
      />
      <div className="price-container">
        {/* <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'€'} /> */}
        <p>{price} eur</p>
      </div>

      <button className="link">Add to Cart</button>
    </Styled.Component>
  );
}
