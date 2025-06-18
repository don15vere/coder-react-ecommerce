import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { getItems } from '../services/getItems'; // ✅ importamos desde servicios

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getItems({ id: itemId }).then(setProducto);
  }, [itemId]);

  if (!producto) return <p className="text-center mt-5">Cargando detalle...</p>;

  return <ItemDetail item={producto} />;
}