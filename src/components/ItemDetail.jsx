import { useState } from 'react';
import ItemCount from './ItemCount.jsx';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import './ItemDetail.css';

export default function ItemDetail({ item }) {
  const [mensaje, setMensaje] = useState('');

  const { addItem } = useContext(CartContext);

  const handleAdd = (qty) => {
    addItem({ ...item, quantity: qty });
    setMensaje(`✅ Agregaste ${qty} ${item.nombre} al carrito`);
    setTimeout(() => setMensaje(''), 3000);
};

  return (
    <div className="item-detail container mt-4">
      <h2>{item.nombre}</h2>
      <img src={item.imgUrl} alt={item.nombre} className="img-fluid" />
      <p>Precio: ${item.precio}</p>

      <ItemCount stock={5} initial={1} onAdd={handleAdd} />

      {mensaje && (
        <div className="alert alert-success mt-3 text-center">{mensaje}</div>
      )}
    </div>
  );
}
