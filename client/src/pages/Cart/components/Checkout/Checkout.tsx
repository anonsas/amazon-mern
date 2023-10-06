import { Link } from 'react-router-dom';
import * as Styled from './Checkout.styled';
import { useCartStore } from 'app/providers';
import { Subtotal } from '..';
import { Button } from 'UI';

export function Checkout() {
  const { cart, totalPrice } = useCartStore();

  return (
    <Styled.Component>
      <Subtotal productsLength={cart.length} totalPrice={totalPrice} />
      <Link to="/login" className="link">
        <Button
          $variant="primary"
          $text="Sign in to Checkout"
          $handleClick={() => console.log('Opa')}
          $borderRadius="md"
        />
        {/* Proceed to checkout */}
      </Link>
    </Styled.Component>
  );
}
