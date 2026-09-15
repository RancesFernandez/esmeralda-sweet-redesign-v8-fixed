# Arquitectura de Esmeralda Sweet

La estructura fue reorganizada para que cada bloque visual tenga una responsabilidad clara y sus estilos estén junto al componente que los utiliza.

## Estructura

```text
src/
├── App.jsx
├── index.css
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── navbar.css
│   ├── MobileOrderBar/
│   │   ├── MobileOrderBar.jsx
│   │   └── MobileOrderBar.css
│   ├── BannerAnimado/
│   │   ├── BannerAnimado.jsx
│   │   └── banner-animado.css
│   ├── Comentarios/
│   │   ├── Comentarios.jsx
│   │   └── comentarios.css
│   ├── CotizacionRapida/
│   │   ├── CotizacionRapida.jsx
│   │   └── cotizacion-rapida.css
│   ├── ProductoCard/
│   │   ├── ProductoCard.jsx
│   │   └── producto-card.css
│   ├── home/
│   │   ├── HeroHome/
│   │   ├── InfoStrip/
│   │   ├── ProductsSection/
│   │   ├── MenuShowcase/
│   │   ├── FeaturedProducts/
│   │   ├── ProcessSection/
│   │   ├── StorySection/
│   │   ├── FaqSection/
│   │   ├── EventCta/
│   │   └── SiteFooter/
│   └── catalog/
│       ├── CatalogHero/
│       ├── MenuOptionGrid/
│       ├── CatalogResults/
│       └── DulceTortasSections/
├── pages/
│   ├── Inicio.jsx
│   ├── MenuPage/
│   ├── MenuDulce/
│   ├── MenuSalado/
│   └── MenuDesayunos/
├── data/
└── assets/
```

## Regla para los estilos

`src/index.css` contiene únicamente:

- variables de diseño;
- reset/base del documento;
- tipografía y elementos HTML;
- utilidades compartidas;
- botones y clases reutilizables.

Los estilos específicos de una funcionalidad están en el mismo directorio del componente.

Ejemplo:

```text
ProductoCard/
├── ProductoCard.jsx
└── producto-card.css
```

Esto evita volver a tener un único CSS enorme donde sea difícil encontrar una regla.

## Regla para nuevos componentes

Cuando se agregue una nueva sección:

1. Crear una carpeta para el componente.
2. Crear el `.jsx` y su `.css`.
3. Importar el CSS directamente desde el componente.
4. Mantener en `index.css` únicamente estilos verdaderamente globales.
5. Evitar estilos inline salvo que el valor sea realmente dinámico.

## Datos

Los datos de productos e imágenes continúan separados de la interfaz. Los componentes reciben datos mediante props en lugar de mezclar catálogo y presentación.
