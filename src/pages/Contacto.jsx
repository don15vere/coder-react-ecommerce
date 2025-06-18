import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${formData.nombre}: ${formData.mensaje}`);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h2>Contacto</h2>
      <input
        name="nombre"
        className="form-control my-2"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <textarea
        name="mensaje"
        className="form-control my-2"
        placeholder="Tu mensaje"
        value={formData.mensaje}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}