# Biblioteca Digital · Módulo 2.1

Sitio web estático para presentar 22 documentos y presentaciones almacenados en
Google Drive. Incluye búsqueda, filtros, vista en cuadrícula/lista, descargas y
modo oscuro.

## Configurar tu perfil de GitHub

1. Abre `script.js`.
2. Busca esta línea al inicio:

   ```js
   githubUsername: "TU_USUARIO_GITHUB",
   ```

3. Reemplaza `TU_USUARIO_GITHUB` por tu usuario. Ejemplo:

   ```js
   githubUsername: "octocat",
   ```

Todos los botones de GitHub se actualizarán automáticamente.

## Probar la página

Puedes abrir `index.html` directamente. Para probarla con un servidor local:

```powershell
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicar con GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `biblioteca-modulo-2-1`.
2. Sube `index.html`, `styles.css`, `script.js` y este archivo.
3. En el repositorio entra a **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main`, la carpeta `/ (root)` y pulsa **Save**.

GitHub mostrará la dirección pública cuando termine la publicación.

## Actualizar un recurso

Los 22 recursos se encuentran en el arreglo `resources` de `script.js`. Cada
entrada contiene el título, el tipo de archivo y su enlace de Google Drive.

Antes de compartir el sitio, verifica que cada archivo de Drive tenga el permiso
**Cualquier persona con el enlace → Lector**.
