import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalCantidad = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="position-relative">
      🛒
      {totalCantidad > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalCantidad}
        </span>
      )}
    </div>
  );
}
