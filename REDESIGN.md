# Esmeralda Sweet — rediseño visual

Se mantuvo la estructura principal del proyecto React/Vite y se rediseñó la interfaz para acercarla visualmente a la referencia de Dpicada:

- Navbar limpio y compacto.
- Hero fotográfico de alto impacto.
- Bloque de beneficios/información.
- Catálogo de productos con filtros visuales.
- Cards de productos.
- Sección "Del pedido a la mesa".
- Métricas/diferenciales.
- Galería tipo mosaico.
- Testimonios.
- Historia de marca.
- FAQ desplegable.
- CTA para eventos.
- Footer.
- Diseño responsive para desktop, tablet y móvil.

## Archivos modificados

### `src/pages/Inicio.jsx`
Es el cambio principal. Ahora contiene toda la landing page y reutiliza `productos.json`.

### `src/components/Navbar.jsx`
Se reemplazó la barra animada por un navbar similar al de la referencia: logo, navegación y botón verde de pedido.

### `src/components/Comentarios.jsx`
Se adaptó la sección de reseñas al estilo visual de la landing.

### `src/pages/MenuDulce.jsx`
### `src/pages/MenuSalado.jsx`
Ahora reutilizan `src/pages/MenuPage.jsx` para tener un catálogo consistente.

### `src/pages/MenuPage.jsx`
Nuevo componente compartido para cards, detalle/modal y consulta por WhatsApp.

### `src/pages/Nosotros.jsx`
Se adaptó al nuevo lenguaje visual.

### `src/index.css`
Contiene prácticamente todo el sistema visual nuevo: colores, tipografías, espaciado, cards, hero, galería, FAQ, responsive, etc.

### `src/App.jsx`
Se mantiene la estructura de rutas y se importa el CSS global de la aplicación.

## Lo que tenés que personalizar

1. **WhatsApp:** cambiar una sola vez `src/data/config.js` y reemplazar `59800000000` por el número real, incluyendo código de país.
2. **Imágenes:** las imágenes de ejemplo están cargadas desde Unsplash. Para producción conviene reemplazarlas por fotos reales de Esmeralda Sweet.
3. **Productos:** editar `src/data/productos.js`.
4. **Textos:** ajustar los textos de `Inicio.jsx`, `Nosotros.jsx` y `MenuPage.jsx` a la identidad real de la marca.

## Ejecutar

```bash
npm install
npm run dev
```

El ZIP no incluye `node_modules`; se recomienda instalar las dependencias nuevamente en la máquina donde se vaya a ejecutar.
