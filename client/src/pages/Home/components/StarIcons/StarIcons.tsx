import * as Styled from './StarIcons.styled';
import images from 'assets/images';

type Props = {
  rating: number;
};

export function StarIcons({ rating }: Props) {
  const ratingNumber = Math.ceil(isFinite(rating) ? rating : 0);
  const stars = Array(ratingNumber).fill(null);

  return (
    <Styled.Component>
      {stars.map((_, i) => (
        <img src={images.starIcon} key={i} className="star-icon" />
      ))}
    </Styled.Component>
  );
}
