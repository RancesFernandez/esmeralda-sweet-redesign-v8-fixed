# Sistema de imágenes — Esmeralda Sweet

El proyecto fue preparado para que **todas las imágenes del sitio estén dentro de `src/assets`** y se importen desde un único archivo.

## Estructura

```text
src/
├── assets/
│   ├── brand/
│   │   └── logoEsmeralda.jpg
│   └── images/
│       ├── hero/
│       │   └── hero.png
│       ├── productos/
│       │   ├── torta-esmeralda-premium.svg
│       │   ├── macarons-surtidos.svg
│       │   ├── cupcakes-red-velvet.svg
│       │   ├── sandwich-jamon-crudo.svg
│       │   └── pizza-rucula.svg
│       ├── galeria/
│       │   ├── evento-01.svg
│       │   ├── evento-02.svg
│       │   ├── evento-03.svg
│       │   ├── evento-04.svg
│       │   └── evento-05.svg
│       └── nosotros/
│           └── historia.svg
├── data/
│   ├── imagenes.js
│   ├── productos.js
│   └── config.js
```

## Dónde se importan las imágenes

`src/data/imagenes.js` es el **único archivo que deberías tocar para cambiar las imágenes**.

Ejemplo:

```js
import picadaGrande from '../assets/images/productos/picada-grande.jpg';
```

Después `productos.js`, `Inicio.jsx`, `Nosotros.jsx` y el Navbar consumen ese registro.

## Por qué se hizo así

- No quedan URLs de Unsplash/Pixabay/CDN dentro de la aplicación.
- Vite incluye las imágenes en el build.
- Los componentes no necesitan conocer dónde está físicamente cada imagen.
- Cambiar una foto no obliga a buscarla por todo el proyecto.
- La misma imagen puede reutilizarse en varias secciones.

## Importante

Los archivos `.svg` actuales son placeholders para que el proyecto funcione inmediatamente. Reemplazalos por tus fotos reales y actualizá las importaciones en `src/data/imagenes.js`.
