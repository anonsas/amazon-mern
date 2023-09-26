import images from 'assets/images';
import { Product } from '.';
import { useCartStore } from 'app/providers';

export function Cart() {
  const { cart } = useCartStore();

  return (
    <div className="cart">
      <img src={images.adCheckout} className="cart__ad" alt="ad" />
      <div className="cart__items">
        <h1>{cart.length ? 'Shopping Cart' : 'Your Amazon Basket Is Empty'} </h1>
        {cart?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
