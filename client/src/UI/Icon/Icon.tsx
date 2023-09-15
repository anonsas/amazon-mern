import * as Styled from './Icon.styled';
import { IconType } from 'app/types';
export type Props = {
  icon: IconType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  spin?: boolean;
  title?: string;
};

export function Icon({ size = 'sm', spin = false, ...rest }: Props): JSX.Element {
  return <Styled.Component size={size} spin={spin} {...rest} />;
}
