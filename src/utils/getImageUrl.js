export function getImageUrl(nombreBase, size = 'S') {
  if (!nombreBase) return `/assets/imgs/default-${size}.jpg`;
  return `/assets/imgs/${nombreBase}-${size}.jpg`;
}