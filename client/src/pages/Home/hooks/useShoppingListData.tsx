import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchShoppingList = () => {
  return axios.get('https://fakestoreapi.com/products');
};

export function useShoppingListData(onSuccess?: any, onError?: any) {
  return useQuery(['shopping-list'], fetchShoppingList, {
    onSuccess,
    onError,
  });
}
