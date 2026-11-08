@AGENTS.md

# Sunia — Plan del proyecto (MVP, proyecto de grado)

Landing de energía solar para Colombia + chatbot RAG local que responde sobre legislación y trámites de energía solar. Se desarrolla y presenta primero en local; la nube es la última etapa.

## Reglas de trabajo (obligatorias para Claude)

1. **Una etapa a la vez.** Solo se trabaja en la etapa marcada como `EN CURSO`. No se empieza la siguiente hasta que todos los criterios de aceptación de la actual estén cumplidos y el usuario la cierre.
2. **No salirse del alcance.** Si una tarea no está en la lista de la etapa actual, no se hace. Se anota en "Backlog post-MVP" y se le dice al usuario.
3. **Nada de dependencias nuevas sin preguntar**, salvo las que ya están listadas en la etapa.
4. **Cada etapa termina con:** `npm run lint` sin errores, `npm run build` exitoso y prueba manual en `npm run dev`.
5. **Actualizar este archivo** al terminar cada tarea: marcar `[x]` y cambiar el estado de la etapa.
6. Si algo de una etapa resulta más grande de lo estimado, avisar antes de seguir y proponer recortarlo.

## Estado general

| Etapa | Nombre | Estado | Estimado |
|---|---|---|---|
| 0 | Base técnica | COMPLETADA | — |
| 1 | Limpieza de la landing | FALTA PRUEBA MANUAL | ½ día |
| 2 | Captación de clientes (cotización + privacidad) | EN CURSO (falta prueba manual) | 2 días |
| 2b | Páginas de información (soluciones y productos) | EN CURSO (falta prueba manual) | 1–2 días |
| 3 | Chatbot RAG — ingesta y base vectorial | PENDIENTE | 3–4 días |
| 4 | Chatbot RAG — API y widget | PENDIENTE | 3–4 días |
| 5 | Pruebas, ajustes y documentación de grado | PENDIENTE | 2–3 días |
| 6 | Despliegue en la nube | PENDIENTE | 1 día |

---

## Etapa 0 — Base técnica · COMPLETADA

- [x] Proyecto Next.js 16 + React 19 + Tailwind v4 + TypeScript.
- [x] Secciones: Header, Hero, ProductSection, ProductGrid, Marcas (`BrandsSection.tsx`), Cobertura (Mapbox), Footer.
- [x] `tsconfig.json` corregido; `npm run build` pasa.

## Etapa 1 — Limpieza de la landing · FALTA PRUEBA MANUAL DEL USUARIO

**Entregable:** landing sin errores visibles ni de lint, lista para mostrar.

- [x] Quitar `id` duplicados (`productos`, `cobertura` en `page.tsx` y dentro de los componentes) y el `id` repetido `almacenamiento` en `ProductGrid`.
- [x] Corregir enlaces de la tarjeta "Almacenamiento BESS" (`quoteHref` / `learnHref`).
- [x] Rellenar el campo `installed` de las ciudades del mapa (o quitar el popup si no hay datos). *(2026-11-07, usuario: el popup muestra un centro comercial cercano por ciudad con su dirección y enlace "Cómo llegar" a Google Maps; direcciones de fuentes públicas, por verificar.)*
- [x] Fuente: unificar `globals.css` con la fuente Inter cargada en `layout.tsx`.
- [x] Mover `.btn-tech` de `layout.tsx` a `globals.css`.
- [x] Renombrar `StatsSection.tsx` → `BrandsSection.tsx` (el componente ya se llama así).
- [x] Header: `<a href="/">` → `<Link>`; quitar imports/variables sin usar.
- [x] Recuadro "Contenido Multimedia" de `ProductSection`: poner una imagen existente de `public/`.
- [x] Tarjetas sin desarrollo (Monitoreo AI, enlaces "Más información", Empresa, enlaces del footer): marcar "Próximamente" o apuntar a secciones existentes. Ningún enlace roto.
- [x] Eliminar imágenes y SVG de plantilla que no se usan en `public/`.

**Criterios de aceptación:** lint sin errores, build OK, ningún enlace lleva a un ancla inexistente.

## Etapa 2 — Captación de clientes · EN CURSO (falta prueba manual)

**Entregable:** un cliente puede pedir cotización y sus datos quedan guardados legalmente.

**Diseño:** réplica del formulario de Sunrun de los videos de referencia (escritorio: `Descargas/Grabación 2026-10-29 205026.mp4`; celular: `Descargas/WhatsApp Video 2026-10-29 at 9.15.34 PM.mp4`). Se copia el diseño tal cual; solo se adapta el contenido a Colombia (decisión del usuario, 2026-10-29).

- [x] Página `/cotizar` (en vez de sección `#cotizar`): dos columnas como el video — título + 3 beneficios / tarjeta con formulario. En celular, apilado y un campo por fila.
- [x] Campos solo los del video, adaptados: nombre completo, correo, **ciudad** (en lugar de código postal), teléfono (celular o fijo colombiano de 10 dígitos), **consumo mensual promedio en kWh** (obligatorio, agregado por el usuario 2026-11-03), **tipo de propiedad Residencial/Industrial** (agregado por el usuario, mismo estilo de opción única), ¿Eres propietario? Sí/No. *(Se quitaron del plan: tipo de proyecto, consumo mensual y mensaje.)*
- [x] Autorización de datos (Ley 1581 de 2012) con el texto junto al botón, como en el video (conducta inequívoca, art. 7 Decreto 1377 de 2013). La API rechaza el envío sin `autoriza: true` y guarda fecha y versión de la política.
- [x] Botón gris (deshabilitado) hasta completar todos los campos, como en el video.
- [x] Reglas por campo (usuario, 2026-11-03), iguales en formulario y API (`lib/cotizacion.ts`): nombre solo letras con nombre y apellido; correo con @ y dominio; teléfono solo números (10 dígitos, 3xx o 60x; se quita el +57); consumo solo número entero; ciudad con lista desplegable por departamento (`lib/ciudades.ts`: capitales + principales ciudades) y opción "Otro municipio". El formulario descarta al escribir los caracteres no permitidos y muestra el error bajo el campo al salir de él.
- [x] Route Handler `app/api/cotizacion/route.ts` con validación en servidor (`lib/cotizacion.ts`, compartida con el cliente).
- [x] Guardado en SQLite local (`better-sqlite3@12`, `data/sunia.db`, ignorado por git). *(La v13 se cae con Node 22.11.)*
- [x] Mensaje de éxito / error en el formulario.
- [x] Enlaces de llamada `tel:` (línea inferior "¿Tienes dudas? Habla con un asesor" y botón de teléfono del header móvil) en vez del botón de WhatsApp. El encabezado de la tarjeta ya no invita a omitir el formulario: dice "Recibe tu cotización gratis y sin compromiso" (usuario, 2026-11-07). **Número de EJEMPLO en `lib/contacto.ts`.**
- [x] Página `/privacidad` con la política de tratamiento de datos. **Datos del responsable (razón social, NIT, dirección, correo) son de EJEMPLO.**
- [x] Todos los botones "Cotizar"/"Cotización"/"Más información" llevan a `/cotizar`.
- [x] Header móvil como el video: barra oscura, hamburguesa, logo (`public/logo-sunia-transparente.png`), botón "Cotizar" y botón de llamada.
- [x] Aviso de cookies como el video (`components/CookieBanner.tsx`), adaptado a Ley 1581.
- [x] Hero (3 imágenes) con beneficios por segmento, pedido por el usuario (2026-10-29): Hogar (factura, excedentes, mantenimiento, 25–30 años), Industrial (50 % deducción en renta, sin IVA, depreciación acelerada — reemplaza el "Impuestos 0%", que no era correcto), Generación Remota (CO₂, sostenibilidad, alzas de tarifa; respaldo Decreto 1403 de 2024). "¡Cotizar ahora!" abre `/cotizar?tipo=...` con el tipo de propiedad preseleccionado.

**Criterios de aceptación:** se envía un formulario de prueba y aparece en la base SQLite; sin aceptar la política no se puede enviar.

**Fuera de alcance:** panel de administración, envío de correos, CRM.

## Etapa 2b — Páginas de información · EN CURSO (falta prueba manual)

**Entregable:** una página de información por cada sección del hero y cada tarjeta de productos, en lenguaje comercial y con la normativa colombiana vigente. Pedida por el usuario (2026-11-03).

**Diseño:** estructura de las páginas de producto de Tesla (referencias del usuario: tesla.com/fsd, /solarpanels, /powerwall, /megapack; sin videos). Portada a pantalla completa → cifras → texto centrado → imagen ancha → filas alternadas → cómo funciona (ilustraciones SVG propias) → respaldo legal → preguntas → cierre oscuro con notas.

- [x] Contenido en `lib/soluciones.ts`; plantilla `components/solucion/SolucionPage.tsx`; ruta `app/[slug]/page.tsx` (estática, 404 para otras rutas).
- [x] 8 páginas: `/hogar`, `/industrial`, `/generacion-remota`, `/paneles-solares`, `/cargadores`, `/almacenamiento`, `/almacenamiento-bess`, `/monitoreo` (marcada "Próximamente").
- [x] "Más información" del hero lleva a la página de la imagen actual; el de cada tarjeta a su producto; footer con columnas Productos y Soluciones.
- [x] Hero cambia de imagen cada 5 s.
- [x] Solo normativa vigente verificada: Ley 1715/2099 (incentivos), Res. UPME 563 de 2026, Ley 2277 de 2022 (sin límite del 3 %), CREG 174 de 2021, Decreto 1403 de 2024 y Res. CREG 101 099 de 2026 (generación remota), Ley 1964 de 2019 (impuesto ≤1 %, SOAT −10 %), Decreto Distrital 003 de 2023 (sin pico y placa en Bogotá), Oficio DIAN 673 de 2026 (compra de VE = GEE).
- **Omitido por no estar confirmado en fuente oficial:** beneficios tributarios para baterías, IVA del 5 % para VE, descuento en revisión técnico-mecánica, pico y placa fuera de Bogotá, factor de emisión de CO₂.
- **Imágenes:** se reutilizan las fotos de `public/`; no hay herramienta para generar fotos nuevas. Faltan fotos propias para varias secciones.

## Etapa 3 — Chatbot RAG: ingesta y base vectorial · PENDIENTE

**Entregable:** base vectorial local construida a partir de la normativa, consultable por script.

Stack definido:
- **Ollama** local. Modelo de chat: `qwen2.5:7b` (alternativa con poca RAM: `qwen2.5:3b`). Embeddings: `bge-m3`.
- **LanceDB** embebido (`@lancedb/lancedb`), datos en `data/vectors/` (ignorado por git).
- Lectura de PDF: `pdf-parse`. Cliente: paquete `ollama` de npm.

Tareas:
- [ ] Definir hardware del PC y elegir modelo de chat (pendiente: RAM / GPU del usuario).
- [ ] Carpeta `documentos/` con el corpus inicial (5–10 documentos, verificar versión vigente de cada uno):
  - Ley 1715 de 2014
  - Ley 2099 de 2021
  - Resolución CREG 174 de 2021 (autogeneración a pequeña escala)
  - Decreto vigente de incentivos tributarios para FNCE
  - Guías/trámites UPME para certificación de beneficios
  - (Opcional) Requisitos del operador de red para conexión de AGPE
- [ ] `documentos/fuentes.json`: título, número de norma, año, URL oficial de cada documento.
- [ ] `scripts/ingest.ts`: lee PDFs → fragmentos (~800 caracteres, solapamiento ~150) → embeddings → LanceDB, guardando fuente y página/artículo de cada fragmento.
- [ ] Script `npm run ingest`.
- [ ] `scripts/query.ts`: consulta de prueba por consola que devuelve los 5 fragmentos más parecidos.

**Criterios de aceptación:** para 10 preguntas de prueba, los fragmentos devueltos contienen la respuesta en al menos 8.

**Fuera de alcance:** subir documentos desde la web, scraping automático, actualización programada del corpus.

## Etapa 4 — Chatbot RAG: API y widget · PENDIENTE

**Entregable:** chat flotante en la landing que responde con citas a la normativa.

- [ ] Módulo `lib/llm.ts` que abstrae el proveedor (variables `LLM_PROVIDER`, `LLM_MODEL`, `OLLAMA_URL`) para poder cambiar a una API en la nube en la Etapa 6 sin reescribir código.
- [ ] `app/api/chat/route.ts`: embedding de la pregunta → top-5 en LanceDB → prompt con contexto → respuesta en streaming.
- [ ] Prompt del sistema: responder solo con el contexto, en español, citar la norma y artículo, decir "no tengo esa información" si no está, aviso de que no es asesoría legal, rechazar temas ajenos a energía solar en Colombia.
- [ ] Historial solo en memoria del navegador (últimos ~6 mensajes enviados al modelo).
- [ ] `components/ChatAgent.tsx`: burbuja flotante, panel de chat, streaming, indicador "escribiendo", fuentes citadas bajo cada respuesta, preguntas sugeridas iniciales, botón para limpiar chat.
- [ ] Mensaje claro si Ollama no está corriendo.
- [ ] Responsive (móvil).

**Criterios de aceptación:** las 10 preguntas de prueba responden con cita correcta; una pregunta fuera de tema es rechazada; una pregunta sin respuesta en el corpus devuelve "no tengo esa información".

**Fuera de alcance:** login, historial persistente, voz, multiidioma, que el chat genere cotizaciones.

## Etapa 5 — Pruebas, ajustes y documentación de grado · PENDIENTE

**Entregable:** evidencia de funcionamiento para el documento y la sustentación.

- [ ] Banco de 20–30 preguntas con respuesta esperada (`docs/evaluacion.md`) y resultados (aciertos, citas correctas, tiempos de respuesta).
- [ ] Ajuste de tamaño de fragmento / top-k / prompt según resultados.
- [ ] Diagrama de arquitectura (landing, API, Ollama, LanceDB, SQLite).
- [ ] README real: requisitos, instalación de Ollama y modelos, `npm run ingest`, `npm run dev`.
- [ ] Revisión final responsive y de accesibilidad básica.

## Etapa 6 — Despliegue en la nube · PENDIENTE

**Entregable:** sitio público con HTTPS.

- [ ] Decidir proveedor de LLM en la nube (Ollama en servidor con GPU o API externa) — vía `lib/llm.ts`.
- [ ] VPS Ubuntu + Node 22 + PM2 + Nginx + Certbot (guía ya entregada).
- [ ] Variables de entorno en el servidor (`NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` antes del build).
- [ ] Copiar/regenerar `data/vectors/` y crear la base SQLite en el servidor.
- [ ] Restringir el token de Mapbox al dominio.

---

## Backlog post-MVP (NO hacer durante el MVP)

- Sección "Beneficios para empresas" con el detalle legal (Ley 1715/2099: deducción 50 % hasta 15 años con tope del 50 % de la renta líquida, sin IVA, sin aranceles, depreciación hasta 33,33 % anual; certificación UPME; CREG 174 de 2021; nota "no constituye asesoría tributaria"). Pendiente de que el usuario decida dónde va y si hay referencia de diseño.

- Login de clientes y panel de administración de cotizaciones.
- Monitoreo IA de instalaciones.
- Blog, páginas de Empresa, Empleo, Prensa.
- Envío de correos / integración con WhatsApp API o CRM.
- Calculadora de ahorro solar.
- Carga de documentos al corpus desde la web.

## Notas técnicas

- Variables en `.env.local` (nunca se suben a git). Las `NEXT_PUBLIC_*` se incrustan al compilar.
- Carpeta `data/` (SQLite y vectores) debe ir en `.gitignore`.
- `next.config.ts` fija `turbopack.root`: hay un `package-lock.json` suelto en `C:\Users\aleja` que hacía que el servidor de desarrollo se colgara.
- Colores de marca en `app/globals.css` (`--color-brand-*`); verde de acción `#00d166`.
