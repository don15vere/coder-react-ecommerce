import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { createOrder } from '../services/createOrder';

export default function CheckoutModal({ onClose }) {
  const { cart, clearCart } = useContext(CartContext);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const buyer = { name, phone, email };
    const id = await createOrder({ buyer, cart });
    setOrderId(id);
    clearCart();
  };

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">📩 Datos de contacto</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {orderId ? (
              <p className="text-success fw-bold">
                ¡Gracias por tu compra! Tu número de orden es <br /> <span className="text-monospace">{orderId}</span>
              </p>
            ) : (
              <>
                <p className="mb-3">
                  Los datos para realizar la compra serán enviados por mail. Por favor completá el siguiente formulario:
                </p>

                <form onSubmit={handleSubmit} className="vstack gap-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Confirmar compra
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>

        </div>
      </div>
    </div>
  );
}