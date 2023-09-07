import { AiFillStar } from 'react-icons/ai';
import * as Styled from './StarIcons.styled';

type Props = {
  rating: number;
};

export function StarIcons({ rating }: Props) {
  const ratingNumber = Math.ceil(isFinite(rating) ? rating : 0);
  const stars = Array(ratingNumber).fill(null);

  console.log('stars', stars);

  return (
    <Styled.Component>
      {stars.map((_, i) => (
        <AiFillStar key={i} className="star-icon" />
      ))}
    </Styled.Component>
  );
}
