import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from 'app/types';

const fetchShoppingList = () => {
  return axios.get<IProduct[]>('http://localhost:5001/api/products');
};

export function useShoppingListData(onSuccess?: any, onError?: any) {
  return useQuery(['shopping-list'], fetchShoppingList, {
    onSuccess,
    onError,
  });
}
