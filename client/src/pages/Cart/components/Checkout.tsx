import { Link } from 'react-router-dom';
import { useCartStore } from 'app/providers';
import { Subtotal } from '.';

export function Checkout() {
  const { cart, totalPrice } = useCartStore();

  return (
    <div className="total">
      <Subtotal productsLength={cart.length} totalPrice={totalPrice} />
      <Link to="/login" className="link">
        Sign in to Checkout
      </Link>
    </div>
  );
}
