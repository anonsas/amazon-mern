import { ReactNode, CSSProperties } from 'react';
import { Breakpoints } from 'app/utils/breakpoints';
import * as Styled from './Container.styled';

export type Props = {
  $maxWidth?: Breakpoints | 'full';
  $flexDirection?: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  $alignItems?: CSSProperties['alignItems'];
  $justifyContent?: CSSProperties['justifyContent'];
  $gap?: 'sm' | 'md' | 'lg';
  $horizontalPosition?: 'left' | 'center' | 'right';
  $padding?:
    | 'around'
    | 'around-md'
    | 'horizontal'
    | 'vertical'
    | 'top'
    | 'top-md'
    | 'right'
    | 'right-md'
    | 'bottom'
    | 'bottom-md'
    | 'left'
    | 'left-md';
  children?: ReactNode;
};

export function Container(props: Props) {
  return <Styled.Container {...props} />;
}
