# QA / revisión visual — v8

## Correcciones principales

- Reestructuradas las cards de **Menú dulce**, **Menú salado** y **Desayunos** para que el CTA forme parte del flujo normal del contenido y nunca se superponga con la descripción o los tags.
- Evitado el recorte de textos largos mediante wrapping y alturas flexibles.
- Ajustada la tipografía de los títulos para mejorar legibilidad y evitar colisiones en anchos intermedios.
- Reforzado el comportamiento responsive de las cards para desktop, tablet y mobile.
- Reestructuradas las cards de productos para que la descripción y el enlace inferior no se pisen cuando el texto ocupa más líneas.
- Mejorado el wrapping de nombres, descripciones y etiquetas.
- Añadido soporte `prefers-reduced-motion` para reducir animaciones cuando el sistema lo solicita.
- Mantiene el layout sin overflow horizontal intencional.

## Validación

El proyecto conserva `package.json` y `package-lock.json`. El build no pudo ejecutarse en este entorno porque las dependencias de `node_modules` incluidas en el ZIP original no contienen los ejecutables necesarios (`vite`).

Para validar localmente:

```bash
npm install
npm run build
npm run dev
```
