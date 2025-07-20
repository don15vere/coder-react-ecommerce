import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { getItems } from '../services/getItems';
import LoaderRender from '../components/LoaderRender';

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setLoading(true);
  getItems({ id: itemId })
    .then((producto) => {
      if (!producto) throw new Error('Producto no encontrado');
      setProducto(producto);
    })
    .catch((err) => {
      console.error(err);
      setProducto(null);
    })
    .finally(() => setLoading(false));
}, [itemId]);

  return (
    <LoaderRender data={producto} loading={loading}>
      {(item) => <ItemDetail item={item} />}
    </LoaderRender>
  );
}
