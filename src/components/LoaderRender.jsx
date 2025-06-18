export default function LoaderRender({ data, loading, children }) {
  if (loading) return <p>Cargando productos...</p>;
  return children(data);
}