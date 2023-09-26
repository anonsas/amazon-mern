import { useCartStore } from 'app/providers';

type Props = {
  productsLength: number;
  totalPrice: number;
};

export function Subtotal({ productsLength, totalPrice }: Props) {
  const itemName = productsLength === 1 ? 'item' : 'items';

  return (
    <div>
      <span>
        Subtotal ({productsLength} {itemName}){' '}
      </span>
      <span>${totalPrice}</span>
    </div>
  );
}
