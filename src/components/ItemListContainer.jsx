import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

export default function ItemListContainer({ saludo }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((data) => {
        const mappedItems = data.results.map((pokemon, index) => ({
          id: index + 1,
          nombre: pokemon.name,
          precio: (Math.random() * 10000).toFixed(0), // precio aleatorio
          imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setItems(mappedItems);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="item-list-container">
      <h2 className="mb-4">{saludo}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </div>
  );
}