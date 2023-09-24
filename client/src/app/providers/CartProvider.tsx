import { create } from 'zustand';
import { IProduct } from 'app/types';

type Store = {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
};

export const useCartStore = create<Store>()((set) => ({
  cart: [],
  addToCart: (product: IProduct) => set((state) => ({ cart: [...state.cart, product] })),
}));
