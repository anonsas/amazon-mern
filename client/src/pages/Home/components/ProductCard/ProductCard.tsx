import { IProduct } from 'app/types';
import * as Styled from './ProductCard.styled';
import { StarIcons } from '..';
import { Card, Button } from 'UI';
import images from 'assets/images';

interface Props extends IProduct {
  handleClick: (product: IProduct) => void;
}

export function ProductCard({ id, title, price, description, category, image, rating, handleClick }: Props) {
  const titleLength = title.length >= 17;
  const shortTitle = titleLength ? title.slice(0, 17) + '...' : title;

  const descriptionLength = description.length >= 50;
  const shortDescription = descriptionLength ? description.slice(0, 50) + '...' : description;

  return (
    <Card $shadow="md" $padding="lg">
      <Styled.Component>
        <p className="category">{category}</p>
        <img src={image} alt={title} className="image" />

        <div className="details-container">
          <h3>{titleLength ? shortTitle : title}</h3>

          <StarIcons rating={rating.rate} />

          <div className="description-container">
            <p className="description">{shortDescription}</p>
          </div>

          <div className="price-container">
            <p>{price} eur</p>
          </div>

          <Button
            $variant="primary"
            $text="Add to Cart"
            $borderRadius="sm"
            $handleClick={() => handleClick({ id, title, price, description, category, image, rating })}
          />
        </div>
      </Styled.Component>
    </Card>
  );
}
