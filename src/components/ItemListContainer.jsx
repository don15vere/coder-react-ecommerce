import './ItemListContainer.css';
import ItemList from './ItemList';
import LoaderRender from './LoaderRender';
import { useFetchItems } from '../hooks/useFetchItems';

export default function ItemListContainer({ saludo }) {
  const { items, loading } = useFetchItems('https://pokeapi.co/api/v2/pokemon?limit=10');

  return (
    <div className="item-list-container">
      <h2>{saludo}</h2>
      <LoaderRender data={items} loading={loading}>
        {(loadedItems) => <ItemList items={loadedItems} />}
      </LoaderRender>
    </div>
  );
}
