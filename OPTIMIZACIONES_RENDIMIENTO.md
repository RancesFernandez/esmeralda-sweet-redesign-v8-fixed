# Optimizaciones de rendimiento

## Imágenes

- Las fotografías del proyecto se convierten a **WebP** con calidad 85 y un límite de 2560 px en su lado mayor.
- Las 85 imágenes raster originales pasaron de aproximadamente 71 MB a 12,6 MB en total (reducción de alrededor del 82 %).
- Las imágenes de productos usan carga diferida (`loading="lazy"`) y decodificación asíncrona.
- Las tarjetas de producto muestran solo la imagen seleccionada. Las demás imágenes de la galería ya no se precargan todas al abrir una página; se solicitan cuando el visitante cambia de imagen.
- Las imágenes del bloque de menús también usan carga diferida en lugar de descargarse como fondos CSS desde el inicio.
- El hero del inicio muestra una sola fotografía principal y precarga la siguiente cerca del cambio, conservando la transición visual entre imágenes.
- Se mantiene `public/og-image.jpg` como JPEG para compatibilidad con vistas previas al compartir enlaces. Es una imagen pequeña y no forma parte del conjunto de fotografías convertido.

## Carga de páginas

- Los tres menús se importan de forma dinámica. El código de un menú se descarga cuando se navega a él, en vez de formar parte de la carga inicial del inicio.
- Se agregó un estado de carga accesible mientras se descarga un menú.

## Desarrollo local

En la carpeta del proyecto, con Node.js instalado:

```bash
npm ci
npm run dev
```

Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

Las dependencias no se incluyen en este ZIP. Si el proyecto usa Supabase en tu entorno, crea un archivo `.env.local` a partir de `.env.example` y completa allí las variables necesarias. No compartas ese archivo ni lo subas al repositorio.

## Al agregar fotografías nuevas

Guarda las fotografías optimizadas en WebP dentro de `src/assets/images/` y actualiza las importaciones correspondientes en `src/data/imagenes.js`. Para imágenes que se amplían en el modal conviene conservar buena definición; como punto de partida, una calidad WebP entre 82 y 88 y un máximo cercano a 2560 px suele ser suficiente.
