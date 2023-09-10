import { useState } from 'react';
import { IProduct } from 'app/types';
import * as Styled from './ProductCard.styled';
import { StarIcons } from '..';

export function ProductCard({ id, title, price, description, category, image, rating }: IProduct) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const titleLength = title.length >= 55;
  const shortTitle = titleLength ? title.slice(0, 55) + '...' : title;

  const descriptionLength = description.length >= 60;
  const shortDescription = descriptionLength ? description.slice(0, 90) + '...' : description;

  return (
    <Styled.Component>
      <p className="category">{category}</p>
      <img src={image} alt={title} className="image" />

      <div>
        <h3>{titleLength ? shortTitle : title}</h3>

        <StarIcons rating={rating.rate} />

        <div className="description-container">
          <p className="description">
            {showFullDescription ? description : shortDescription}{' '}
            {descriptionLength && (
              <button className="description-button" onClick={() => setShowFullDescription(!showFullDescription)}>
                {showFullDescription ? 'Read less' : 'Read more'}
              </button>
            )}
          </p>
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
