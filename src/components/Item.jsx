import { Link } from 'react-router-dom';
import React from 'react';
import './Item.css';
import { getImageUrl } from '../utils/getImageUrl';

function Item({ item }) {

  console.log('Detalle del item:', item);
  console.log('Nombre de imagen:', item.imgUrl);

  return (
    <div className="card text-center">
      <img
        src={getImageUrl(item.imgUrl, 'S')}
        alt={item.nombre}
        className="img-fluid"
      />
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
