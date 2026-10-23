# Cambios de accesibilidad y experiencia móvil

## Cambios aplicados

- Las categorías del menú dulce ahora usan encabezados semánticos (`h2`) con un botón de divulgación accesible, estados `aria-expanded` y región controlada.
- En móvil, el título y la flecha del acordeón comparten la misma fila; se conserva el diseño adaptable para pantallas estrechas.
- Las regiones principales tienen un identificador común para el enlace «Saltar al contenido principal».
- El pie del sitio queda fuera de `<main>` y funciona como región de pie (`contentinfo`) en las distintas páginas.
- Se corrigió la referencia de descripción del buscador para que `aria-describedby` apunte a texto existente.
- Las tarjetas de producto dejan de presentarse como un botón que contiene más botones. Las acciones de detalle y consulta son botones reales accesibles con teclado.
- La navegación señala los enlaces de la página activa mediante `aria-current="page"`.
- Se añadió soporte para respetar `prefers-reduced-motion` en el carrusel principal y las tarjetas.
- La fuente externa se declara desde el documento HTML con `preconnect` y `display=swap`, evitando el `@import` CSS previo.
- Se mejoró el contraste de varios textos secundarios del tema claro.

## Instalación y verificación

Este ZIP no incluye `node_modules`, archivos de entorno locales ni el directorio de compilación. En el equipo de desarrollo, ejecutar:

```bash
npm ci
npm run build
```

Después de publicar el proyecto actualizado, ejecutar de nuevo PageSpeed Insights en móvil y escritorio. La vista del informe proporcionado no expuso los diagnósticos completos de Lighthouse durante esta revisión; por eso, no se atribuyen puntuaciones concretas ni se garantiza una puntuación final sin esa nueva medición.
