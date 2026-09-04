# Imágenes del sitio

Esta carpeta contiene todas las imágenes visuales de Esmeralda Sweet.

## Cómo agregar una imagen real

1. Copiá la foto en la carpeta correspondiente:
   - `hero/` para el banner principal.
   - `productos/` para productos del catálogo.
   - `galeria/` para fotos de eventos/mesas.
   - `nosotros/` para historia y marca.
2. Abrí `src/data/imagenes.js`.
3. Importá la imagen con su ruta real.
4. Reemplazá el placeholder que estaba usando ese nombre.

Ejemplo:

```js
import picadaGrande from '../assets/images/productos/picada-grande.jpg';
```

Luego:

```js
productos: {
  picadaGrande,
}
```

## Recomendación

Usá nombres sin espacios ni tildes, por ejemplo:

- `picada-grande.jpg`
- `evento-01.webp`
- `historia.jpg`

