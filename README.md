# Esmeralda Sweet

## Desarrollo local

Este proyecto no incluye `node_modules` ni `.git` en el paquete de entrega. Esto evita errores causados por dependencias instaladas en otro sistema operativo o arquitectura.

En Windows, desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Para producción:

```bash
npm run build
npm run preview
```

## Cambios recientes

- Se redujo el espacio vertical entre la navegación de menús, el buscador y los resultados, en desktop y mobile.
- Se ajustó la lupa del buscador para mejorar alineación, grosor y contraste en modo oscuro.
- Se reforzó la legibilidad de textos de navegación/dropdowns en modo oscuro, especialmente en mobile.
- Se ajustó el hero de los catálogos en mobile para evitar que subtítulos largos queden visualmente cortados.
- Se eliminó el contador de “propuestas” de cada tipo de menú.
- Se evitó distribuir `node_modules` dentro del ZIP; `npm install` debe regenerarlo localmente.
