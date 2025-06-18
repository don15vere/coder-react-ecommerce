import { useState } from 'react';
import './ItemCount.css';

export default function ItemCount({ stock = 5, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="item-count">
      <div className="controls">
        <button className="btn btn-outline-secondary" onClick={decrement}>–</button>
        <span className="mx-2">{count}</span>
        <button className="btn btn-outline-secondary" onClick={increment}>+</button>
      </div>
      <button className="btn btn-primary mt-2" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}
