# Deploy de Esmeralda Sweet en Vercel

Esta versión está preparada para un deploy limpio de Vite + React.

## 1. Importar el proyecto

Subí el contenido de esta carpeta a GitHub y conectá el repositorio con Vercel.

- Framework: Vite (Vercel debería detectarlo automáticamente)
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

No subas `node_modules` ni `.env`.

## 2. Variables de Supabase

Para habilitar las reseñas y el formulario de comentarios, agregá en Vercel:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Configurarlas para Production (y Preview/Development si también querés esos entornos).

**Importante:** si todavía no configuraste estas variables, el sitio igualmente carga. La sección de reseñas no rompe toda la aplicación; simplemente queda sin conexión a Supabase hasta que agregues las variables.

Después de agregar o modificar variables, hacé un nuevo deploy/redeploy para que Vercel las incluya en el build.

## 3. Rutas

El `vercel.json` incluye rewrites para:

- `/menu-dulce`
- `/menu-salado`
- `/desayunos`

Esto permite que React Router funcione correctamente al entrar directamente a esas URLs.

## 4. Dominio

El SEO está preparado para el dominio final:

`https://esmeraldasweet.uy`

Cuando conectes ese dominio en Vercel, no hace falta modificar las rutas de la aplicación.
