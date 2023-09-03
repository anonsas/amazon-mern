import * as Styled from './Loader.styled';

export type Props = {
  marginTop?: 'sm' | 'md' | 'lg';
};

export function Loader({ marginTop }: Props) {
  return (
    <Styled.Component marginTop={marginTop}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Styled.Component>
  );
}
