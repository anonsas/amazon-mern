import { useState, useCallback } from 'react';
import { IProductList } from 'app/types/ProductList.type';
import * as Styled from './ProductCard.styled';
import { StarIcons } from '..';

export function ProductCard({ id, title, price, description, category, image, rating }: IProductList) {
  const [isFullDescription, setIsFullDescription] = useState(false);

  const descriptionLength = description.length >= 500;
  const shortDescription = descriptionLength ? description.slice(0, 500) + '...' : description;

  const toggleDescription = useCallback((isFullDescription: boolean) => setIsFullDescription(!isFullDescription), []);

  return (
    <Styled.Component>
      <p className="category">{category}</p>
      <img src={image} alt={title} className="image" />

      <h3>{title}</h3>

      <StarIcons rating={rating.rate} />

      <p>{description}</p>

      <div className="price-container">
        {/* <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'€'} /> */}
        <p>{price} eur</p>
      </div>

      <button className="link">Add to Cart</button>
    </Styled.Component>
  );
}
