import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';
import imgMochila from '../assets/mochila-s.jpg';
import imgGorra from '../assets/gorra-s.jpg';

const productos = [
  {
    id: 1,
    nombre: 'Gorra Aventura',
    precio: 3000,
    imgUrl: imgGorra,
  },
  {
    id: 2,
    nombre: 'Mochila Senderismo',
    precio: 8000,
    imgUrl: imgMochila,
  },
];

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
}

export default function ItemListContainer({ saludo }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((res) => setItems(res));
  }, []);

  return (
    <div className="item-list-container">
        <h2 className="mb-4">{saludo}</h2>
        <ItemList items={items} />
    </div>
  );
}