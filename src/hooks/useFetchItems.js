import { useState, useEffect } from 'react';
import { getItems } from '../services/getItems';

export function useFetchItems(category = null, cant = 12) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItems({ category, cant }).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [category]);

  return { items, loading };
}