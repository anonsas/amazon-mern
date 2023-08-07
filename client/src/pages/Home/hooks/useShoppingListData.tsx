import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IProductList } from 'app/types/ProductList.type';

const fetchShoppingList = () => {
  return axios.get<IProductList[]>('https://fakestoreapi.com/products');
};

export function useShoppingListData(onSuccess?: any, onError?: any) {
  return useQuery(['shopping-list'], fetchShoppingList, {
    onSuccess,
    onError,
  });
}
