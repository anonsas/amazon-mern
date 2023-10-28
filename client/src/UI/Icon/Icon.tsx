import images from 'assets/images';
import * as Styled from './Icon.styled';
import { IconType } from 'app/types';

export type Props = {
  $icon: IconType;
  $size?: 'sm' | 'md' | 'lg';
  $className?: string;
  $spin?: boolean;
};

export function Icon({ $icon = 'starIcon', $className = '', $size = 'sm', $spin = false }: Props) {
  const iconImage = images[$icon as keyof typeof images];
  return <Styled.Component src={iconImage} className={$className} $size={$size} $spin={$spin} />;
}
