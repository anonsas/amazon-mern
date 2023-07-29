import './Home.page.scss';
import { useShoppingListData } from './hooks/useShoppingListData';

export function HomePage() {
  const { isLoading, isError, data } = useShoppingListData();

  console.log('data', data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error my friend...</h2>;
  }

  return <div>HomePage</div>;
}
