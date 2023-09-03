import { ReactNode } from 'react';
import './Card.styled';
import { Breakpoints } from 'app/utils/breakpoints';
import * as Styled from './Card.styled';

type Props = {
  maxWidth?: Breakpoints;
  shadow?: 'sm' | 'md';
  padding?: 'sm' | 'md';
  backgroundColor?: 'white' | 'beige' | 'light-purple' | 'blue' | 'grey';
  children: ReactNode;
};

export function Card(props: Props) {
  return <Styled.Card {...props}>{props.children}</Styled.Card>;
}
