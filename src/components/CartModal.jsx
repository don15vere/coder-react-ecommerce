import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

export default function CartModal({ onClose }) {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">🛒 Carrito de compras</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {cart.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <>
                <ul className="list-group mb-3">
                    {cart.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{item.nombre}</strong> x {item.quantity}
                            <div className="text-muted small">${item.precio} c/u</div>
                        </div>
                        <span className="fw-semibold">${item.precio * item.quantity}</span>
                        </li>
                    ))}
                </ul>
                <h5 className="text-end">Total: ${total}</h5>
              </>
            )}
          </div>

          <div className="modal-footer">
            {cart.length > 0 && (
              <button className="btn btn-danger me-auto" onClick={clearCart}>
                Vaciar carrito
              </button>
            )}
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>

        </div>
      </div>
    </div>
  );
}
