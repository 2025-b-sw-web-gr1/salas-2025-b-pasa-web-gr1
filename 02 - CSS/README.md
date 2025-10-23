# Educational Styles — Formas de cargar CSS

Este pequeño proyecto explica y demuestra varias formas de aplicar estilos en una página web.

Estructura relevante:

- `index.html` — página con explicaciones y ejemplos.
- `css/external.css` — hoja externa principal (usa `@import` a `imported.css`).
- `css/imported.css` — hoja importada vía `@import`.
- `css/dynamic.css` — ejemplo para carga dinámica con `<link>`.
- `css/fetched.css` — ejemplo para fetch + inject.
- `js/dynamic-styles.js` — funciones para cambiar estilos y cargar dinámicamente.
- `package.json` — script `start` para lanzar `http-server` en el puerto 8080.

Cómo usar:

1. Instala dependencias (Node.js debe estar instalado):

```powershell
cd "02 - CSS"; npm install
```

2. Inicia el servidor local:

```powershell
npm start
```

3. Abre en tu navegador: http://localhost:8080

Notas educativas:

- Inline styles (atributo `style`) tienen mayor especificidad y no son reutilizables.
- `<style>` interno es útil para reglas críticas o pequeñas páginas.
- `<link rel=\"stylesheet\">` es la forma recomendada para producción.
- `@import` puede afectar performance (bloquea renderizado si se usa en el `head`).
- `rel=preload` mejora prioridad; hay que convertirlo a `stylesheet` en onload.
- Cargar CSS dinámicamente con JS permite control y optimización (critical CSS, lazy CSS).
- Shadow DOM encapsula estilos — útil para web components.
