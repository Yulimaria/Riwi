# Rueda Libre

Proyecto de alquiler de bicicletas y rutas en Medellín. El sitio principal presenta la flota y las reservas; la landing **Rueda Nocturna** ofrece recorridos guiados, planes e inscripción.

## Abrir el proyecto

- Inicio del sitio: [index.html](index.html)
- Landing nocturna: [nocturna/index.html](nocturna/index.html)
- Módulo pequeño de bicicletas con Bootstrap: [nocturna/bootstrap.html](nocturna/bootstrap.html)
- Formulario de reserva de bicicletas: [paginas/reservas.html](paginas/reservas.html)
- Tarifas: [paginas/tarifas.html](paginas/tarifas.html)
- Acerca de nosotros: [paginas/Nosotros.html](paginas/Nosotros.html)
- Kit de componentes nocturno: [nocturna/componentes.html](nocturna/componentes.html)

Para revisar las páginas locales, abre la carpeta `Rueda-libre` en Visual Studio Code y usa Live Server desde `index.html` o `nocturna/index.html`.

## Publicación

Las URLs públicas de GitHub Pages están pendientes. Esta carpeta no tiene un repositorio Git independiente y el remoto que aparece en la carpeta superior apunta a otro proyecto (`algoritmia`). No se hizo commit ni push para evitar publicar el trabajo en el repositorio equivocado.

## Páginas y tecnología

- `index.html`: portada con navegación, carrusel de cuatro promociones, catálogo y rutas.
- `paginas/tarifas.html`: tarifas y recorridos disponibles.
- `paginas/reservas.html`: formulario del sitio para alquiler de bicicletas.
- `paginas/Nosotros.html`: presentación del proyecto.
- `nocturna/index.html`: landing responsive con rutas, planes, pasos e inscripción.
- `nocturna/bootstrap.html`: módulo de demostración con una barra responsive, un hero y tres tarjetas sobre bicicletas y recorridos.
- `nocturna/bootstrap.css`: colores y fuentes de marca para el módulo Bootstrap, separado de Tailwind.
- `nocturna/componentes.html`: botones, tarjeta, alertas y campos del kit visual.
- `nocturna/prototipo.html`: primer prototipo de la campaña.

El sitio principal y la landing siguen usando **Tailwind CSS 4**. A petición del usuario, `nocturna/bootstrap.html` es una demostración independiente con **Bootstrap 5.3.9 por CDN**; carga su propia hoja `bootstrap.css` y no carga el CSS de Tailwind. Se conservan Montserrat, Open Sans y los tonos Verde Ruta (`#1E7A4F`), Azul Noche (`#14213D`), Amarillo Farol (`#F39A2B`), Hoja Suave (`#E5EFD9`) y Crema Ciclovía (`#F0EDE3`).

## Construcción de los 12 MiniRetos

| MiniReto | Aporte al producto |
|---|---|
| 1. Prototipo nocturno | Hero inicial con utilidades de Tailwind Play CDN. |
| 2. CLI y botones | Tailwind CLI, tema compilado y tres botones reutilizables. |
| 3. Cards de rutas | Tarjetas para Luces del Centro, Miradores y Luna en Las Palmas. |
| 4. Kit de componentes | Botones, alertas, tarjeta de ruta y campos. |
| 5. Maquetación de landing | Secciones de campaña, rutas, pasos y pie. |
| 6. Diseño responsive | Cuadrículas mobile-first y navegación adaptable. |
| 7. Marca nocturna | Paleta propia, Montserrat, Open Sans y modo oscuro. |
| 8. Decisión de framework | Recomendación de Tailwind según el diseño y preferencia acordada. |
| 9. Inscripción | Formulario semántico con validación nativa y campos obligatorios. |
| 10. Integración | Menús cruzados, logo de regreso, botón de reserva y cuarta promoción. |
| 11. Planes | Tres tarjetas responsive; Pareja se destaca como “Más elegido”. |
| 12. Entrega | README, bitácora y lista de comprobación; publicación aún pendiente. |

## Inscripción

El formulario nocturno pide nombre, correo, celular, ruta, día, acompañantes, experiencia, bicicleta propia y aceptación de condiciones. Usa `required`, `minlength`, `pattern`, `min` y `max`, y puede recorrerse con controles HTML nativos. Al enviarlo, intenta abrir un correo a `soporte@ruedalibre.com`; la persona debe confirmar el envío desde su aplicación de correo. El sitio no tiene un servidor que almacene inscripciones.

## Recomendación técnica

Se recomienda continuar con Tailwind en el sitio y la landing porque ya forma parte del proyecto y permite conservar sus estilos. La página `nocturna/bootstrap.html` sirve como módulo breve para aprender Bootstrap sin mezclarlo con las hojas Tailwind. El código añadido incluye comentarios en español para explicar las clases. Las salidas compiladas son `src/output.min.css` y `nocturna/src/output.min.css`.

## Capturas

- [Captura de referencia anterior](img/capturas/antes.png)
- [Landing de escritorio (1366 px)](img/capturas/rueda-nocturna-escritorio.png)
- [Landing de celular (360 px)](img/capturas/rueda-nocturna-movil.png)
- [Landing en modo oscuro (1366 px)](img/capturas/rueda-nocturna-oscuro.png)

## Aprendizajes

- Los grupos `fieldset` y `legend`, las etiquetas asociadas y las restricciones HTML ayudan a comprender y validar formularios sin JavaScript adicional.
- Grid organiza tarjetas en columnas; Flexbox distribuye elementos dentro de cada tarjeta y mantiene las acciones alineadas.
- Los prefijos responsive de Tailwind permiten cambiar el layout desde celular hasta escritorio.
- Los comentarios junto a las utilidades hacen más fácil entender qué resuelve cada clase.
- Los colores se deben comprobar en pareja: Verde Ruta sobre Azul Noche no tiene suficiente contraste para texto normal, por eso la landing usa Hoja Suave o Amarillo Farol en superficies oscuras.

## Verificación y pendientes

- Comprobación local de enlaces `href` y recursos `src`: 0 referencias relativas rotas en 8 documentos HTML.
- Comprobación de estilos en línea: no se encontraron atributos `style` en esas páginas.
- Comprobación visual final en Edge a 1366 × 768, 360 × 900 y modo oscuro a 1366 × 768; el ancho del documento coincide con el viewport en los tres tamaños.
- Pruebas del formulario y recorrido con Tab documentados arriba; no se enviaron datos.
- W3C Nu reportó 0 errores y 0 avisos en la validación anterior de las dos páginas. La repetición tras los últimos ajustes recibió HTTP 429 de Cloudflare; falta repetirla cuando el servicio permita nuevas solicitudes.
- Pendiente: revisar también 768 y 1280 px, publicar y añadir las URLs públicas, registrar retroalimentación de una demo con una persona compañera y crear el commit en el repositorio correcto.

## Demo de tres minutos

1. **0:00–0:35 · Contexto:** explicar el alquiler local y la campaña de recorridos nocturnos.
2. **0:35–1:20 · Sitio principal:** mostrar portada, navegación y el cuarto slide del carrusel; entrar a Rueda Nocturna.
3. **1:20–2:10 · Landing:** recorrer rutas y planes, destacar Pareja y explicar cómo el layout se adapta.
4. **2:10–2:40 · Inscripción:** mostrar las etiquetas, grupos y validaciones; señalar que la confirmación final abre el correo y no se guarda en un servidor.
5. **2:40–3:00 · Decisiones:** comentar la continuidad con Tailwind y la paleta accesible en modo claro/oscuro.

La práctica con cronómetro y la retroalimentación de una persona compañera todavía están pendientes; no se registran como realizadas.

## Autora

Yulic — proyecto académico Rueda Libre.
