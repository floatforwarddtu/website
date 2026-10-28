# DTU Float Forward — sitio web

Sitio estático: solo HTML, CSS y JavaScript. **No hay que instalar ni compilar nada.**
Para verlo en local, abre `index.html` en el navegador.

---

## Qué hay en cada archivo

```
index.html          Home (hero, about, cifras, llamada a la acción)
team.html           Equipo por curso y departamento
sponsors.html       Patrocinadores por nivel
news.html           Noticias
contact.html        Contacto y formulario
assets/css/style.css      TODO el diseño. Colores y medidas arriba del archivo.
assets/data/team.js       <-- LOS DATOS DEL EQUIPO. Esto es lo que editas cada curso.
assets/js/team.js         Dibuja la página de equipo. No hace falta tocarlo.
assets/js/site.js         Menú móvil y año del pie.
images/                   Fotos, por carpetas.
```

---

## Tareas habituales

### Añadir el equipo de un curso nuevo
1. Crea la carpeta `images/team/2027-2028/` y sube ahí `group.jpg` (todo el equipo) y una foto de grupo por departamento: `operations.jpg`, `mechanical.jpg`, `electrical.jpg`...
2. Abre `assets/data/team.js` y copia el bloque del curso anterior, pegándolo **arriba del todo**.
3. Cambia `season` y, en las rutas de las fotos, el año de la carpeta.
4. Guarda y sube el cambio. El primer curso de la lista es el que sale marcado como *current*.

Mientras falte la foto de un departamento, la web muestra "Team photo coming soon". En cuanto subes el archivo con el nombre correcto, aparece sola.

### Añadir una noticia
Abre `news.html`, copia un bloque `<article class="post">` entero y pégalo **encima** del anterior. Cambia fecha, título, texto e imagen.

### Añadir un patrocinador
Sube el logo a `images/sponsors/` (PNG con fondo transparente) y añade una línea en el nivel que corresponda en `sponsors.html`.

### Cambiar colores o tipografías
Todo está al principio de `assets/css/style.css`, en el bloque `:root`. Cambiar `--red` ahí cambia el rojo de todo el sitio.

---

## Reglas para las imágenes

- Nombres en **minúsculas, sin acentos, sin espacios**: `jorge-alcaraz.jpg`, no `Jorge Alcaraz.JPG`. El servidor distingue mayúsculas de minúsculas y es la causa número uno de fotos que no cargan.
- Fotos de grupo (equipo y departamentos) y noticias: horizontal, 1600-2000 px de ancho, comprimidas por debajo de 400 KB.
- Logos: PNG con fondo transparente, 400 px de ancho aprox.

---

## Publicación

El sitio se despliega en Netlify desde este repositorio: cada cambio que se suba a la rama principal se publica solo en un par de minutos.

- Repositorio: _(rellenar)_
- Panel de Netlify: _(rellenar)_
- Dominio: dtufloatforward.dk, con los DNS gestionados en one.com
- Cuenta con acceso: _(rellenar — mantener al menos dos personas del equipo)_

El formulario de contacto usa Netlify Forms (el atributo `data-netlify="true"` en `contact.html`). Los envíos aparecen en el panel de Netlify, en la sección Forms, donde hay que configurar la notificación al correo del equipo.

---

## Si eres quien recoge el relevo

Lo único que necesitas saber para mantener esta web es editar archivos de texto en GitHub desde el navegador y subir imágenes. No hace falta programar ni instalar nada. Si algo se rompe, en GitHub está el historial completo y se puede volver a la versión anterior.
