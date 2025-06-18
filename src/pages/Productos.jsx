import { useFetchItems } from '../hooks/useFetchItems';
import LoaderRender from '../components/LoaderRender';
import ItemList from '../components/ItemList';

export default function Productos() {
  const { items, loading } = useFetchItems();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Todos los productos</h2>
      <LoaderRender data={items} loading={loading}>
        {(data) => <ItemList items={data} />}
      </LoaderRender>
    </div>
  );
}