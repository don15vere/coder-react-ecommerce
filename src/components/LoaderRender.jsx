export default function LoaderRender({ data, loading, children }) {
  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3 fw-semibold">Cargando productos...</p>
      </div>
    );
  }

  return children(data);
}