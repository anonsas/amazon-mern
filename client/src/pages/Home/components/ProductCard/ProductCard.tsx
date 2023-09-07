import { useState } from 'react';
import { IProductList } from 'app/types/ProductList.type';
import * as Styled from './ProductCard.styled';
import { StarIcons } from '..';

export function ProductCard({ id, title, price, description, category, image, rating }: IProductList) {
  const [isFullDescription, setIsFullDescription] = useState(false);

  const descriptionLength = description.length >= 170;
  const shortDescription = descriptionLength ? description.slice(0, 170) + '...' : description;

  return (
    <Styled.Component>
      <p className="category">{category}</p>
      <img src={image} alt={title} className="image" />

      <div>
        <h3>{title}</h3>

        <StarIcons rating={rating.rate} />

        <div className="description-container">
          <p className="description">{isFullDescription ? description : shortDescription}</p>
          {descriptionLength && (
            <button className="description-button" onClick={() => setIsFullDescription(!isFullDescription)}>
              {isFullDescription ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        <div className="price-container">
          {/* <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'€'} /> */}
          <p>{price} eur</p>
        </div>

        <button className="link">Add to Cart</button>
      </div>
    </Styled.Component>
  );
}
