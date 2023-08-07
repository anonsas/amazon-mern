import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import './StarIcons.scss';

type Props = {
  rating: number;
};

export function StarIcons({ rating }: Props) {
  const [ratingStars] = useState(Math.ceil(rating));

  return (
    <div className="stars-container">
      {Array(ratingStars)
        .fill(null)
        .map((_, i) => (
          <AiFillStar key={i} className="star-icon" style={{ height: '2rem', color: '#febd69' }} />
        ))}
    </div>
  );
}
