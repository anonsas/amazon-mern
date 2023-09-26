import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IProduct } from 'app/types';

type Store = {
  cart: IProduct[];
  totalPrice: number;
  addToCart: (product: IProduct) => void;
};

export const useCartStore = create<Store>()(
  devtools((set) => ({
    cart: [],
    totalPrice: 0,
    addToCart: (product: IProduct) =>
      set((state) => ({
        cart: [...state.cart, product],
        totalPrice: state.totalPrice + product.price,
      })),
  }))
);
