import { useState, useEffect } from 'react';

export function useFetchItems(apiUrl) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const result = data.results.map((p, i) => ({
          id: i + 1,
          nombre: p.name,
          precio: (Math.random() * 10000).toFixed(0),
          imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
        }));
        setItems(result);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [apiUrl]);

  return { items, loading };
}
