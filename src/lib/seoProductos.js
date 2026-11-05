import { productos } from '../data/productos';

export function slugifyProductName(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const productosConSlug = productos.map((producto) => ({
  ...producto,
  slug: slugifyProductName(producto.nombre),
}));

export function getProductoBySlug(slug) {
  return productosConSlug.find((producto) => producto.slug === slug);
}

export function getProductPath(producto) {
  return `/productos/${producto.slug || slugifyProductName(producto.nombre)}`;
}

export function getProductSeoDescription(producto) {
  const detail = producto.detalle?.secciones
    ?.flatMap((section) => section.items || [])
    .slice(0, 3)
    .join(', ');
  const base = producto.descripcion?.toLowerCase().includes('información completa')
    ? `${producto.nombre} artesanal para compartir y disfrutar`
    : producto.descripcion;
  return `${base}${detail ? ` Incluye opciones como ${detail.toLowerCase()}.` : ''} Consultá disponibilidad y pedidos en Montevideo, Uruguay.`
    .replace(/\s+/g, ' ')
    .slice(0, 300);
}
