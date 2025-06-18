import { useParams } from 'react-router-dom';
import { useFetchItems } from '../hooks/useFetchItems';
import LoaderRender from '../components/LoaderRender';
import ItemList from '../components/ItemList';
// import './Categoria.css';

export default function Categoria() {
  const { categoryId } = useParams();
  const { items, loading } = useFetchItems(categoryId);

  return (
    <div className="categoria-container">
      <h2 className="text-center">Categoría: {categoryId}</h2>
      <LoaderRender data={items} loading={loading}>
        {(filteredItems) => <ItemList items={filteredItems} />}
      </LoaderRender>
    </div>
  );
}