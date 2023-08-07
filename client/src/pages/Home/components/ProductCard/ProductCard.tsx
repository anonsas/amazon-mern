import ClampLines from 'react-clamp-lines';
import './ProductCard.scss';
import { StarIcons } from '../StarIcons/StarIcons';
import { IProductList } from 'app/types/ProductList.type';

export function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: IProductList) {
  return (
    <div className="product">
      <p className="product__category">{category}</p>
      <img src={image} alt={title} className="product__image" />

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
      <div className="product__price">
        {/* <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'€'} /> */}
        <p>{price} eur</p>
      </div>

      <button className="link">Add to Cart</button>
    </div>
  );
}
