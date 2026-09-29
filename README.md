# equipo-04-web

Equipo: Juan Lorenzo, Alejandro Do Nascimento y Alejandro Martín

Base de la web de equipo · Retos 5 y 6

Punto de partida común para los retos en equipo del Taller 2. Trae la estructura de la página y la hoja de estilos ya montadas, con un comentario en cada bloque que indica a qué issue del tablero corresponde. Lo que hay que escribir es el contenido y los estilos del equipo, no la estructura.

## Qué contiene

- `index.html`: La página, con las cuatro zonas marcadas por comentarios.
- `css/styles.css`: La hoja de estilos, con un bloque por issue.

## Cómo se usa

1. Descargad el ZIP con el botón **Code → Download ZIP**, o clonad este repositorio.
2. Copiad `index.html` y la carpeta `css/` dentro del repositorio del equipo, junto al `README.md` que ya está ahí.
3. Confirmad y subid esa base antes de repartir el trabajo, para que todos partáis del mismo código.

A partir de ahí, cada persona trabaja en su rama sobre la zona de su issue.

## Qué no hay que cambiar

Los nombres de archivo y la estructura de carpetas. En los retos siguientes se trabaja sobre esos mismos archivos, y los escenarios de conflicto están pensados para esta estructura.

---

## Cómo trabajamos

### ¿Cómo se nombran las ramas de trabajo?
Las ramas de trabajo se nombran siguiendo el formato `feature/N-nombre-tarea`, utilizando el número de issue del tablero como referencia.
Ejemplos reales utilizados por nuestro equipo:
- `feature/1-cabecera`
- `feature/2-presentacion`
- `feature/3-pie-pagina`
- `feature/4-estilos-paleta`

### ¿Qué hay que hacer antes de fusionar en main?
Antes de realizar la fusión (`merge`) en la rama principal, es obligatorio situarse en la rama `main` local (`git switch main`) y sincronizarla descargando los últimos cambios del repositorio remoto (`git pull origin main`). De este modo nos aseguramos de no sobrescribir el trabajo subido previamente por Juan Lorenzo, Alejandro Do Nascimento o Alejandro Martín y reducimos los conflictos al hacer `push`.

### ¿Qué archivos no se suben al repositorio?
No se deben subir archivos temporales del sistema operativo (como `.DS_Store` o `Thumbs.db`), carpetas de configuración personal de editores o IDEs (como `.vscode/` o `.idea/`), ni dependencias o archivos temporales de compilación.