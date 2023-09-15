import * as Styled from './Loader.styled';

export type Props = {
  $marginTop?: 'sm' | 'md' | 'lg';
};

export function Loader(props: Props) {
  const { ...rest } = props;
  return (
    <Styled.Component {...rest}>
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
