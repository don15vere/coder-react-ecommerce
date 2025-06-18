import './Item.css';

export default function Item({ item }) {
  return (
    <div className="card m-2">
      <img src={item.imgUrl} className="card-img-top" alt={item.nombre} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">${item.precio}</p>
      </div>
    </div>
  );
}