# SEO y presencia en Google — Esmeralda Sweet

## Qué incorpora esta versión

- Páginas de detalle con URL propia para los 24 productos activos del catálogo: `/productos/<slug>`.
- Título, descripción, canonical, Open Graph y Twitter Card por producto y por sección.
- Datos estructurados JSON-LD para el negocio, las páginas de catálogo y los productos. No se inventan valoraciones, disponibilidad ni reseñas.
- Sitemap con la página de inicio, las tres categorías y las 24 páginas de producto.
- `robots.txt` que permite el rastreo y declara el sitemap.
- Rutas de producto compatibles con recarga directa en Vercel.
- Enlaces internos desde las tarjetas a la página individual y llamada a WhatsApp.
- Normalización del número de WhatsApp para enlaces `wa.me` (solo dígitos).
- No se modificaron las credenciales privadas ni se necesitan nuevas variables de entorno para estas mejoras.

## Antes de publicar

1. En la carpeta del proyecto ejecutá `npm ci`.
2. Ejecutá `npm run build`.
3. Si el build termina sin errores, publicá en Vercel.
4. Comprobá que estas direcciones respondan:
   - `https://esmeraldasweet.com.uy/robots.txt`
   - `https://esmeraldasweet.com.uy/sitemap.xml`
   - `https://esmeraldasweet.com.uy/productos/torta-matilda`
   - `https://esmeraldasweet.com.uy/productos/lemon-pie`
   - `https://esmeraldasweet.com.uy/productos/desayuno-clasico`
5. Probá también abrir directamente una URL de producto y actualizar el navegador. No debe devolver un 404 de Vercel.

## Google Search Console

1. Abrí https://search.google.com/search-console/
2. Añadí la propiedad de tipo **Dominio** `esmeraldasweet.com.uy`.
3. Google entregará un TXT. Agregalo en el proveedor DNS del dominio sin borrar registros que Vercel o el correo ya utilicen.
4. Cuando se verifique, entrá a **Sitemaps** y enviá `sitemap.xml`.
5. En **Inspección de URLs**, probá la página de inicio, las tres categorías y las páginas de productos principales. Después de confirmar que la versión publicada se puede rastrear, solicitá indexación.
6. Revisá semanalmente **Páginas**, **Rendimiento** y **Experiencia**. Corregí errores de indexación y observá qué consultas generan impresiones y clics.

La solicitud de indexación no garantiza que Google indexe una URL ni determina su posición. Google decide según calidad, utilidad, rastreabilidad y señales de confianza.

## Perfil de Empresa de Google (SEO local)

- Creá o reclamá el perfil desde https://www.google.com/business/.
- Usá el nombre real **Esmeralda Sweet**, una categoría que describa realmente el negocio y datos de contacto consistentes.
- Si no se atiende público en una dirección comercial, configurá el negocio como área de servicio y ocultá la dirección residencial. Indicá solo zonas en las que efectivamente se realizan entregas o se atiende.
- Completá horarios reales, teléfono, web, descripción y fotos originales de productos.
- Pedí reseñas genuinas a clientes reales y respondé con cordialidad. No compres reseñas ni ofrezcas incentivos a cambio de valoraciones.
- No agregues ubicaciones, sucursales, servicios, certificaciones o atributos que no existan.

## Contenido y mantenimiento

- Mantené nombres, descripciones, tamaños, precios y disponibilidad actualizados en `src/data/productos.js`.
- Las páginas individuales toman la información de ese catálogo. Si se agrega o elimina un producto, actualizá también `public/sitemap.xml`.
- Priorizá fotos propias, nítidas y representativas; usá textos alternativos descriptivos y no repitas palabras clave de forma artificial.
- Agregá preguntas frecuentes solo cuando respondan dudas reales (anticipación, entregas, tamaños, ingredientes, conservación, pedidos para eventos).
- Conseguí enlaces legítimos desde proveedores, colaboradores, medios y directorios locales relevantes. Evitá comprar enlaces.
- Medí consultas recibidas por WhatsApp y no solo visitas: el objetivo final es generar pedidos.

## Límites importantes

No existe una configuración que obligue a Google a recomendar una web para cualquier búsqueda. La distancia, la competencia, la reputación, la calidad de las páginas y la demanda influyen. Estas mejoras construyen una base más sólida, pero necesitan publicación, verificación en Search Console y mantenimiento continuo.
