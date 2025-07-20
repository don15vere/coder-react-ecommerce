import { Link } from 'react-router-dom';
import React from 'react';
import './Item.css';

function Item({ item }) {
  return (
    <div className="card text-center">
      <img src={item.imgUrl} className="card-img-top" alt={item.nombre} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">${item.precio}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Item);
