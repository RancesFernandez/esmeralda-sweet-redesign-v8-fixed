/**
 * Normaliza texto para búsquedas humanas:
 * - ignora mayúsculas/minúsculas
 * - ignora tildes y diéresis
 * - colapsa espacios
 */
export function normalizarBusqueda(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
    .trim()
    .replace(/\s+/g, ' ');
}

/**
 * Busca exclusivamente por nombre en TODO el catálogo.
 *
 * La búsqueda es global: no importa desde qué menú se ejecuta.
 *
 * Orden:
 * 1. coincidencia exacta
 * 2. nombre que empieza por la búsqueda
 * 3. nombre que contiene la búsqueda
 * 4. coincidencias por palabras
 * 5. alfabético, como desempate
 */
export function buscarProductos(productos, query) {
  const normalizedQuery = normalizarBusqueda(query);

  if (!normalizedQuery) return [];

  const resultados = productos
    .map((producto, index) => {
      const nombre = normalizarBusqueda(producto.nombre);
      const palabras = nombre.split(' ');
      const queryWords = normalizedQuery.split(' ');

      if (!nombre.includes(normalizedQuery)) return null;

      let prioridad = 4;

      if (nombre === normalizedQuery) {
        prioridad = 0;
      } else if (nombre.startsWith(normalizedQuery)) {
        prioridad = 1;
      } else if (nombre.includes(` ${normalizedQuery}`)) {
        prioridad = 2;
      } else if (queryWords.every((word) => palabras.some((item) => item.startsWith(word)))) {
        prioridad = 3;
      }

      return {
        producto,
        prioridad,
        nombre,
        index,
      };
    })
    .filter(Boolean);

  return resultados
    .sort((a, b) => {
      if (a.prioridad !== b.prioridad) {
        return a.prioridad - b.prioridad;
      }

      const alfabetico = a.nombre.localeCompare(b.nombre, 'es', {
        sensitivity: 'base',
        numeric: true,
      });

      return alfabetico || a.index - b.index;
    })
    .map(({ producto }) => producto);
}
