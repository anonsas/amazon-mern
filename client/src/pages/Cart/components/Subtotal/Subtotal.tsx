import * as Styled from './Subtotal.styled';

type Props = {
  productsLength: number;
  totalPrice: number;
};

export function Subtotal({ productsLength, totalPrice }: Props) {
  const itemName = productsLength === 1 ? 'item' : 'items';
  const totalPriceArray = totalPrice.toString().split('.');
  const dollars = totalPriceArray[0];
  const cents = totalPriceArray[1];

  return (
    <Styled.Component>
      <span className="total-text">
        Subtotal ({productsLength} {itemName})
      </span>
      <div className="total-price-container">
        <span className="dollar-sign">$</span>
        <span className="price-dollar">{dollars}</span>
        <span className="price-cents">{cents}</span>
      </div>
    </Styled.Component>
  );
}
