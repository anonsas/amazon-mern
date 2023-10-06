import * as Styled from './CartPage.styled';
import { Cart, Checkout } from './components';

export default function CartPage() {
  return (
    <Styled.Component>
      <Checkout />
      {/* <Cart /> */}
    </Styled.Component>
  );
}
