# Paginación y diseño de testimonios

## Qué cambió

- Se muestran hasta 8 comentarios por página, ordenados del más nuevo al más antiguo.
- La consulta a Supabase usa `range()` y `count: 'exact'`, por lo que no descarga todos los comentarios en cada visita.
- La página activa queda resaltada con un fondo esmeralda tenue; se incluyen botones anterior/siguiente y puntos suspensivos cuando hay muchas páginas.
- Las cards tienen un diseño renovado, estrellas, iniciales del autor y fecha del comentario.
- Al publicar una nueva reseña, se vuelve a la primera página para que el comentario reciente quede visible.

## ¿Tengo que cambiar algo en Supabase?

**No.** La paginación usa la tabla `comentarios` y las columnas que ya utiliza el sitio: `id`, `usuario`, `texto`, `estrellas` y `creado_en`. No hay que crear columnas, tablas, funciones ni ejecutar una migración SQL.

## Verificación paso a paso (solo si no aparecen las reseñas)

1. Entrá a tu proyecto en Supabase.
2. Abrí **Table Editor** y seleccioná la tabla `comentarios`.
3. Verificá que existan las columnas `id`, `usuario`, `texto`, `estrellas` y `creado_en`, y que `creado_en` tenga un valor para los comentarios existentes.
4. Abrí **SQL Editor** y ejecutá esta consulta de solo lectura para verificar que hay reseñas y que el orden por fecha funciona:

   ```sql
   select id, usuario, texto, estrellas, creado_en
   from public.comentarios
   order by creado_en desc
   limit 8;
   ```

5. Si la consulta funciona en SQL Editor pero el sitio muestra un error, revisá **Authentication → Policies** (o las políticas RLS de la tabla). El rol público que utiliza la web necesita permiso de `SELECT` sobre las reseñas que deban ser visibles públicamente. Si el formulario permite enviar reseñas sin iniciar sesión, también debe existir una política `INSERT` acorde a esa decisión.
6. No desactives RLS ni crees una política abierta sin revisar los permisos: las políticas deben permitir leer reseñas públicas y solo las operaciones que realmente quieras aceptar.
7. Si modificaste las variables `VITE_SUPABASE_URL` o `VITE_SUPABASE_ANON_KEY` en Vercel, generá un nuevo deploy. Los cambios de código también requieren un deploy para publicarse.

## Desarrollo y publicación

1. Descomprimí el ZIP.
2. Si vas a ejecutar el proyecto localmente, copiá `.env.example` como `.env.local` y completá `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` con los valores de tu proyecto de Supabase.
3. En una terminal ubicada en la carpeta del proyecto, ejecutá `npm install` y después `npm run dev`.
4. Para producción, publicá el código fuente en GitHub/Vercel y verificá que el comando de build sea `npm run build` y el directorio de salida `dist`.
