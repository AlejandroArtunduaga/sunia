# Análisis de Arquitectura — Tesla Homepage (tesla.com)

> **Fuente:** Página guardada localmente desde `https://www.tesla.com/`  
> **Fecha de análisis:** 2026-05-07  
> **CMS detectado:** Drupal 9  
> **Framework UI:** Tesla Design System (TDS) + Tesla Component Library (TCL)

---

## 1. Diagrama de Arquitectura (5 Capas)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 660" font-family="'Segoe UI', Arial, sans-serif">

  <!-- Fondo general -->
  <rect width="900" height="660" fill="#0f0f0f" rx="12"/>

  <!-- Título principal -->
  <text x="450" y="40" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="700" letter-spacing="2">ARQUITECTURA — TESLA.COM</text>
  <line x1="60" y1="52" x2="840" y2="52" stroke="#cc0000" stroke-width="2"/>

  <!-- ═══════════════════════════════════════════════════ -->
  <!-- CAPA 1: PRESENTACIÓN -->
  <!-- ═══════════════════════════════════════════════════ -->
  <rect x="40" y="68" width="820" height="100" fill="#1a1a2e" rx="8" stroke="#4a90d9" stroke-width="1.5"/>
  <rect x="40" y="68" width="6" height="100" fill="#4a90d9" rx="3"/>
  <text x="65" y="90" fill="#4a90d9" font-size="11" font-weight="700" letter-spacing="1">CAPA 1 — PRESENTACIÓN (Componentes UI)</text>

  <!-- Sub-componentes capa 1 -->
  <rect x="58" y="98" width="115" height="54" fill="#0d1b2a" rx="5" stroke="#4a90d9" stroke-width="1"/>
  <text x="115" y="118" text-anchor="middle" fill="#7ec8f7" font-size="9" font-weight="600">HEADER / NAV</text>
  <text x="115" y="132" text-anchor="middle" fill="#aaaaaa" font-size="8">tds-site-header</text>
  <text x="115" y="144" text-anchor="middle" fill="#aaaaaa" font-size="8">mega-menu</text>

  <rect x="183" y="98" width="115" height="54" fill="#0d1b2a" rx="5" stroke="#4a90d9" stroke-width="1"/>
  <text x="240" y="118" text-anchor="middle" fill="#7ec8f7" font-size="9" font-weight="600">HERO SECTION</text>
  <text x="240" y="132" text-anchor="middle" fill="#aaaaaa" font-size="8">tcl-homepage-hero</text>
  <text x="240" y="144" text-anchor="middle" fill="#aaaaaa" font-size="8">parallax opcional</text>

  <rect x="308" y="98" width="115" height="54" fill="#0d1b2a" rx="5" stroke="#4a90d9" stroke-width="1"/>
  <text x="365" y="118" text-anchor="middle" fill="#7ec8f7" font-size="9" font-weight="600">PRODUCT CARDS</text>
  <text x="365" y="132" text-anchor="middle" fill="#aaaaaa" font-size="8">tds-layout-2col</text>
  <text x="365" y="144" text-anchor="middle" fill="#aaaaaa" font-size="8">tcl-layout</text>

  <rect x="433" y="98" width="115" height="54" fill="#0d1b2a" rx="5" stroke="#4a90d9" stroke-width="1"/>
  <text x="490" y="118" text-anchor="middle" fill="#7ec8f7" font-size="9" font-weight="600">CHARGING MAP</text>
  <text x="490" y="132" text-anchor="middle" fill="#aaaaaa" font-size="8">charging-map-</text>
  <text x="490" y="144" text-anchor="middle" fill="#aaaaaa" font-size="8">component</text>

  <rect x="558" y="98" width="115" height="54" fill="#0d1b2a" rx="5" stroke="#4a90d9" stroke-width="1"/>
  <text x="615" y="118" text-anchor="middle" fill="#7ec8f7" font-size="9" font-weight="600">COOKIE BANNER</text>
  <text x="615" y="132" text-anchor="middle" fill="#aaaaaa" font-size="8">cookie-banner</text>
  <text x="615" y="144" text-anchor="middle" fill="#aaaaaa" font-size="8">z-index: 100001</text>

  <rect x="683" y="98" width="120" height="54" fill="#0d1b2a" rx="5" stroke="#4a90d9" stroke-width="1"/>
  <text x="743" y="118" text-anchor="middle" fill="#7ec8f7" font-size="9" font-weight="600">FOOTER</text>
  <text x="743" y="132" text-anchor="middle" fill="#aaaaaa" font-size="8">tds-site-footer</text>
  <text x="743" y="144" text-anchor="middle" fill="#aaaaaa" font-size="8">tds-footer-nav</text>

  <!-- Flecha capa 1 → 2 -->
  <line x1="450" y1="168" x2="450" y2="183" stroke="#666666" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="445,181 450,190 455,181" fill="#666666"/>

  <!-- ═══════════════════════════════════════════════════ -->
  <!-- CAPA 2: ESTILOS -->
  <!-- ═══════════════════════════════════════════════════ -->
  <rect x="40" y="192" width="820" height="100" fill="#1a2a1a" rx="8" stroke="#27ae60" stroke-width="1.5"/>
  <rect x="40" y="192" width="6" height="100" fill="#27ae60" rx="3"/>
  <text x="65" y="214" fill="#27ae60" font-size="11" font-weight="700" letter-spacing="1">CAPA 2 — ESTILOS (Colores, Tipografía, Espaciado)</text>

  <!-- Paleta de colores -->
  <rect x="58" y="222" width="150" height="54" fill="#0d200d" rx="5" stroke="#27ae60" stroke-width="1"/>
  <text x="133" y="237" text-anchor="middle" fill="#5cdc90" font-size="9" font-weight="600">PALETA DE COLORES</text>
  <rect x="66" y="243" width="12" height="12" fill="#171a20" rx="2"/>
  <text x="82" y="253" fill="#aaaaaa" font-size="8">#171a20 (Fondo oscuro)</text>
  <rect x="66" y="257" width="12" height="12" fill="#cc0000" rx="2"/>
  <text x="82" y="267" fill="#aaaaaa" font-size="8">#cc0000 (Rojo Tesla)</text>

  <!-- Tipografía -->
  <rect x="218" y="222" width="150" height="54" fill="#0d200d" rx="5" stroke="#27ae60" stroke-width="1"/>
  <text x="293" y="237" text-anchor="middle" fill="#5cdc90" font-size="9" font-weight="600">TIPOGRAFÍA</text>
  <text x="226" y="251" fill="#aaaaaa" font-size="8">Font: Open Sans (400/600/700)</text>
  <text x="226" y="263" fill="#aaaaaa" font-size="8">Headings: 17px–23px</text>
  <text x="226" y="275" fill="#aaaaaa" font-size="8">Fineprint: 11px</text>

  <!-- Espaciado -->
  <rect x="378" y="222" width="150" height="54" fill="#0d200d" rx="5" stroke="#27ae60" stroke-width="1"/>
  <text x="453" y="237" text-anchor="middle" fill="#5cdc90" font-size="9" font-weight="600">ESPACIADO</text>
  <text x="386" y="251" fill="#aaaaaa" font-size="8">--tds-size--*x (múltiplos)</text>
  <text x="386" y="263" fill="#aaaaaa" font-size="8">Mobile: 16px | Tablet: 24px</text>
  <text x="386" y="275" fill="#aaaaaa" font-size="8">Desktop: 32px–48px</text>

  <!-- Theming -->
  <rect x="538" y="222" width="150" height="54" fill="#0d200d" rx="5" stroke="#27ae60" stroke-width="1"/>
  <text x="613" y="237" text-anchor="middle" fill="#5cdc90" font-size="9" font-weight="600">THEMING (TDS)</text>
  <text x="546" y="251" fill="#aaaaaa" font-size="8">tds-scrim--white/black</text>
  <text x="546" y="263" fill="#aaaaaa" font-size="8">CSS Variables dinámicas</text>
  <text x="546" y="275" fill="#aaaaaa" font-size="8">Light / Dark mode</text>

  <!-- Breakpoints -->
  <rect x="698" y="222" width="145" height="54" fill="#0d200d" rx="5" stroke="#27ae60" stroke-width="1"/>
  <text x="770" y="237" text-anchor="middle" fill="#5cdc90" font-size="9" font-weight="600">BREAKPOINTS</text>
  <text x="706" y="251" fill="#aaaaaa" font-size="8">Mobile: ≤639px</text>
  <text x="706" y="263" fill="#aaaaaa" font-size="8">Tablet: 600–840px</text>
  <text x="706" y="275" fill="#aaaaaa" font-size="8">Desktop: ≥900px</text>

  <!-- Flecha capa 2 → 3 -->
  <line x1="450" y1="292" x2="450" y2="307" stroke="#666666" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="445,305 450,314 455,305" fill="#666666"/>

  <!-- ═══════════════════════════════════════════════════ -->
  <!-- CAPA 3: LÓGICA -->
  <!-- ═══════════════════════════════════════════════════ -->
  <rect x="40" y="316" width="820" height="100" fill="#2a1a2e" rx="8" stroke="#9b59b6" stroke-width="1.5"/>
  <rect x="40" y="316" width="6" height="100" fill="#9b59b6" rx="3"/>
  <text x="65" y="338" fill="#9b59b6" font-size="11" font-weight="700" letter-spacing="1">CAPA 3 — LÓGICA (Módulos JavaScript)</text>

  <rect x="58" y="346" width="140" height="54" fill="#1e0d2a" rx="5" stroke="#9b59b6" stroke-width="1"/>
  <text x="128" y="361" text-anchor="middle" fill="#c87de0" font-size="9" font-weight="600">TCL-REACT UMD</text>
  <text x="66" y="375" fill="#aaaaaa" font-size="8">Componentes React</text>
  <text x="66" y="387" fill="#aaaaaa" font-size="8">compilados como UMD</text>

  <rect x="208" y="346" width="140" height="54" fill="#1e0d2a" rx="5" stroke="#9b59b6" stroke-width="1"/>
  <text x="278" y="361" text-anchor="middle" fill="#c87de0" font-size="9" font-weight="600">CHARGING MAP</text>
  <text x="216" y="375" fill="#aaaaaa" font-size="8">charging-map-DdWUP22U.js</text>
  <text x="216" y="387" fill="#aaaaaa" font-size="8">212KB — Supercharger map</text>

  <rect x="358" y="346" width="140" height="54" fill="#1e0d2a" rx="5" stroke="#9b59b6" stroke-width="1"/>
  <text x="428" y="361" text-anchor="middle" fill="#c87de0" font-size="9" font-weight="600">CHAT LOADER</text>
  <text x="366" y="375" fill="#aaaaaa" font-size="8">chat-loader.js (Twilio)</text>
  <text x="366" y="387" fill="#aaaaaa" font-size="8">Widget soporte al cliente</text>

  <rect x="508" y="346" width="140" height="54" fill="#1e0d2a" rx="5" stroke="#9b59b6" stroke-width="1"/>
  <text x="578" y="361" text-anchor="middle" fill="#c87de0" font-size="9" font-weight="600">COOKIE BANNER JS</text>
  <text x="516" y="375" fill="#aaaaaa" font-size="8">cookie-banner.js</text>
  <text x="516" y="387" fill="#aaaaaa" font-size="8">Consentimiento GDPR</text>

  <rect x="658" y="346" width="145" height="54" fill="#1e0d2a" rx="5" stroke="#9b59b6" stroke-width="1"/>
  <text x="730" y="361" text-anchor="middle" fill="#c87de0" font-size="9" font-weight="600">DYNAMIC PRICING</text>
  <text x="666" y="375" fill="#aaaaaa" font-size="8">window.dynamic_pricing</text>
  <text x="666" y="387" fill="#aaaaaa" font-size="8">Precios en tiempo real</text>

  <!-- Flecha capa 3 → 4 -->
  <line x1="450" y1="416" x2="450" y2="431" stroke="#666666" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="445,429 450,438 455,429" fill="#666666"/>

  <!-- ═══════════════════════════════════════════════════ -->
  <!-- CAPA 4: DATOS -->
  <!-- ═══════════════════════════════════════════════════ -->
  <rect x="40" y="440" width="820" height="80" fill="#2a1e0d" rx="8" stroke="#e67e22" stroke-width="1.5"/>
  <rect x="40" y="440" width="6" height="80" fill="#e67e22" rx="3"/>
  <text x="65" y="462" fill="#e67e22" font-size="11" font-weight="700" letter-spacing="1">CAPA 4 — DATOS (Almacenamiento y APIs)</text>

  <rect x="58" y="470" width="165" height="36" fill="#200e00" rx="5" stroke="#e67e22" stroke-width="1"/>
  <text x="140" y="483" text-anchor="middle" fill="#f0a054" font-size="9" font-weight="600">localStorage Bridge</text>
  <text x="66" y="497" fill="#aaaaaa" font-size="8">Iframe Optimizely — a27160410180.cdn</text>

  <rect x="233" y="470" width="165" height="36" fill="#200e00" rx="5" stroke="#e67e22" stroke-width="1"/>
  <text x="315" y="483" text-anchor="middle" fill="#f0a054" font-size="9" font-weight="600">Pricing API</text>
  <text x="241" y="497" fill="#aaaaaa" font-size="8">apigateway-pricing-gateway.tesla.com</text>

  <rect x="408" y="470" width="165" height="36" fill="#200e00" rx="5" stroke="#e67e22" stroke-width="1"/>
  <text x="490" y="483" text-anchor="middle" fill="#f0a054" font-size="9" font-weight="600">Drupal 9 CMS</text>
  <text x="416" y="497" fill="#aaaaaa" font-size="8">API de contenido + nodos</text>

  <rect x="583" y="470" width="165" height="36" fill="#200e00" rx="5" stroke="#e67e22" stroke-width="1"/>
  <text x="665" y="483" text-anchor="middle" fill="#f0a054" font-size="9" font-weight="600">Digital Assets CDN</text>
  <text x="591" y="497" fill="#aaaaaa" font-size="8">digitalassets.tesla.com (imágenes)</text>

  <!-- Flecha capa 4 → 5 -->
  <line x1="450" y1="520" x2="450" y2="535" stroke="#666666" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="445,533 450,542 455,533" fill="#666666"/>

  <!-- ═══════════════════════════════════════════════════ -->
  <!-- CAPA 5: INTEGRACIONES EXTERNAS -->
  <!-- ═══════════════════════════════════════════════════ -->
  <rect x="40" y="544" width="820" height="80" fill="#2a0d0d" rx="8" stroke="#cc0000" stroke-width="1.5"/>
  <rect x="40" y="544" width="6" height="80" fill="#cc0000" rx="3"/>
  <text x="65" y="566" fill="#cc0000" font-size="11" font-weight="700" letter-spacing="1">CAPA 5 — INTEGRACIONES EXTERNAS (Servicios)</text>

  <rect x="58" y="574" width="120" height="36" fill="#1a0000" rx="5" stroke="#cc0000" stroke-width="1"/>
  <text x="118" y="587" text-anchor="middle" fill="#ff6666" font-size="9" font-weight="600">Google Tag Mgr</text>
  <text x="118" y="600" text-anchor="middle" fill="#aaaaaa" font-size="8">gtm.js — Analytics</text>

  <rect x="188" y="574" width="120" height="36" fill="#1a0000" rx="5" stroke="#cc0000" stroke-width="1"/>
  <text x="248" y="587" text-anchor="middle" fill="#ff6666" font-size="9" font-weight="600">Facebook Pixel</text>
  <text x="248" y="600" text-anchor="middle" fill="#aaaaaa" font-size="8">fbevents.js — Ads</text>

  <rect x="318" y="574" width="120" height="36" fill="#1a0000" rx="5" stroke="#cc0000" stroke-width="1"/>
  <text x="378" y="587" text-anchor="middle" fill="#ff6666" font-size="9" font-weight="600">Google Maps</text>
  <text x="378" y="600" text-anchor="middle" fill="#aaaaaa" font-size="8">Supercharger Map</text>

  <rect x="448" y="574" width="120" height="36" fill="#1a0000" rx="5" stroke="#cc0000" stroke-width="1"/>
  <text x="508" y="587" text-anchor="middle" fill="#ff6666" font-size="9" font-weight="600">Twilio Chat</text>
  <text x="508" y="600" text-anchor="middle" fill="#aaaaaa" font-size="8">chat-loader.js</text>

  <rect x="578" y="574" width="120" height="36" fill="#1a0000" rx="5" stroke="#cc0000" stroke-width="1"/>
  <text x="638" y="587" text-anchor="middle" fill="#ff6666" font-size="9" font-weight="600">Geo Detection</text>
  <text x="638" y="600" text-anchor="middle" fill="#aaaaaa" font-size="8">geo4.js</text>

  <rect x="708" y="574" width="125" height="36" fill="#1a0000" rx="5" stroke="#cc0000" stroke-width="1"/>
  <text x="770" y="587" text-anchor="middle" fill="#ff6666" font-size="9" font-weight="600">Avaya Omnichannel</text>
  <text x="770" y="600" text-anchor="middle" fill="#aaaaaa" font-size="8">Soporte empresarial</text>

  <!-- Leyenda -->
  <text x="450" y="645" text-anchor="middle" fill="#444444" font-size="9">TDS = Tesla Design System · TCL = Tesla Component Library · UMD = Universal Module Definition</text>

</svg>
```

---

## 2. Análisis Estructurado

### 2.1 Componentes Principales y sus Funciones

| Componente | Clase / ID principal | Función |
|---|---|---|
| **Header / Navegación** | `.tds-site-header`, `#mega-menu` | Barra superior sticky con logo, mega-menú por categorías (Vehículos, Energía, Carga, Tienda) |
| **Hero Section** | `.tcl-homepage-hero`, `.tcl-hero-parallax` | Imagen de fondo a pantalla completa con texto superpuesto y CTAs; efecto parallax configurable |
| **Product Cards Grid** | `.tds-layout-2col`, `.tcl-layout`, `#grid_compare` | Cuadrícula de 2 columnas con tarjetas de productos (Model 3, Y, S, X, Cybertruck) |
| **Charging Map** | `.charging-map-component` | Mapa interactivo de Superchargers usando Google Maps API (212 KB de lógica propia) |
| **Rich Text / React** | `.tcl-react--bundle-context`, `.tcl-react-component` | Componentes React hidratados desde Drupal CMS como bundles UMD |
| **Cookie Banner** | `.cookie-banner`, `#cookie_banner` | Banner de consentimiento GDPR fijo en la parte inferior (`position: sticky`; `z-index: 100001`) |
| **Footer** | `.tds-site-footer`, `.tds-footer-nav` | Navegación secundaria con links legales y de soporte en layout flex vertical |
| **Chat Widget** | `.twilio-button-*` | Widget Twilio para soporte al cliente, ocultable por breakpoint |
| **Permanent CTA** | `.tcl-permanent-cta` | Botón de acción fijo visible en el scroll |

---

### 2.2 Paleta de Colores (con códigos hex)

| Nombre | Hex | Uso |
|---|---|---|
| **Negro Tesla** | `#171a20` | Fondo principal oscuro, texto sobre fondo claro |
| **Rojo Tesla** | `#cc0000` | Color de marca: botones primarios, tile de MSN, acentos |
| **Blanco puro** | `#ffffff` | Fondos claros, texto sobre fondos oscuros |
| **Negro puro** | `#000000` | Elementos de contraste máximo, overlays |
| **Gris oscuro UI** | `#393c41` | Texto secundario, bordes |
| **Gris medio** | `#5c5e62` | Texto de apoyo, íconos secundarios |
| **Gris claro** | `#f4f4f4` | Fondos de secciones alternadas |
| **Azul tema oscuro tile** | `#msapplication` | `#cc0000` (tile color) |
| **Scrim negro** | `rgba(0,0,0,0.59)` | Overlay semitransparente sobre mapas |
| **Scrim blanco sombra** | `rgba(255,255,255,0.8)` | Sombra del cookie banner en modo oscuro |

> **Sistema dinámico:** Tesla usa `--tds-theme-foreground`, `--tds-theme-background` y `--tds-theme-foreground-high-contrast` como variables CSS dinámicas que cambian entre modos claro (`tds-scrim--white`) y oscuro (`tds-scrim--black`).

---

### 2.3 Tipografía y Espaciado

#### Familias de fuentes

| Fuente | Pesos | Rol |
|---|---|---|
| **Open Sans** | 400, 600, 700 | Fuente principal de todo el sitio |
| **Roboto** | 400 | Fallback para elementos de Google Maps |
| **Google Sans Text** | — | Atajos de teclado del navegador (overlay) |
| **Arial / sans-serif** | — | Último fallback del sistema |

#### Tamaños de fuente

| Clase / Elemento | Tamaño | Contexto |
|---|---|---|
| `.s1` | `20px` | Subtítulo de sección |
| `.s2` | `17px` | Cuerpo de texto y heading secundario |
| `.tcl-text--heading-two` | `17px` | Título h2 de componente |
| `.banner-subheader` | `23px` | Subtítulo del hero en móvil (≤639px) |
| `.charging-map-component__title` | `var(--tds-size--5x)` móvil / `--6x` desktop | Título del mapa de carga |
| `.fineprint` | `11px` | Texto legal / notas al pie |

#### Sistema de espaciado

El espaciado usa **multiplicadores de unidad base** mediante variables CSS:

```
--tds-size--1x  → ~8px
--tds-size--2x  → ~16px
--tds-size--3x  → ~24px
--tds-size--4x  → ~32px
--tds-size--5x  → ~40px
--tds-size--6x  → ~48px
--tds-spacer-6x → espaciado de bloque grande
```

| Dispositivo | Padding de sección |
|---|---|
| Mobile | 16px |
| Tablet | 24px |
| Desktop | 32px – 48px |

---

### 2.4 Flujo de Datos (Comunicación entre Capas)

```
 USUARIO (Browser)
       │
       ▼
┌─────────────────────────────────────────┐
│   CAPA 1: Presentación                  │
│   React UMD hidrata el HTML de Drupal   │
│   data-component-status="hydrated"      │
└───────────────┬─────────────────────────┘
                │  data-gtm-key (eventos)
                ▼
┌─────────────────────────────────────────┐
│   CAPA 2: Estilos (CSS Variables)       │
│   CSS custom props cascada en runtime   │
│   tds-scrim modifica el tema en vivo    │
└───────────────┬─────────────────────────┘
                │  window.dynamic_pricing
                ▼
┌─────────────────────────────────────────┐
│   CAPA 3: Lógica JS                     │
│   React gestiona estado de componentes  │
│   postMessage ↔ localStorage bridge     │
└───────────────┬─────────────────────────┘
                │  fetch / XHR
                ▼
┌─────────────────────────────────────────┐
│   CAPA 4: Datos                         │
│   Drupal 9 API → nodos de contenido     │
│   Pricing API → precios actualizados    │
│   Optimizely → A/B test en localStorage │
│   CDN → imágenes optimizadas            │
└───────────────┬─────────────────────────┘
                │  SDK calls
                ▼
┌─────────────────────────────────────────┐
│   CAPA 5: Integraciones Externas        │
│   GTM → Google Analytics               │
│   Facebook Pixel → conversiones         │
│   Google Maps → Supercharger map        │
│   Twilio → chat soporte                 │
│   Geo4 → detección de región/idioma     │
│   Avaya → soporte empresarial           │
└─────────────────────────────────────────┘
```

---

### 2.5 Tecnologías Utilizadas

| Categoría | Tecnología | Versión / Detalle |
|---|---|---|
| **CMS** | Drupal | v9 |
| **UI Library** | Tesla Component Library (TCL) | tcl-react.umd.js |
| **Design System** | Tesla Design System (TDS) | Prefijo `--tds-*` |
| **Framework JS** | React | UMD bundle (universal) |
| **Estilos** | CSS puro con Custom Properties | Sin Sass/Less visible |
| **Mapas** | Google Maps API | common.js, map.js, marker.js, controls.js |
| **Analytics** | Google Tag Manager | gtm.js |
| **Publicidad** | Facebook Pixel | fbevents.js |
| **Chat** | Twilio | chat-loader.js |
| **A/B Testing** | Optimizely | CDN iframe para localStorage |
| **Geolocalización** | Geo4 | geo4.js (detección de región) |
| **CRM/Soporte** | Avaya Omnichannel | field-display-avaya |
| **Tracking adicional** | UWT (User Web Tracking) | uwt.js |
| **Internacionalización** | sl_translate / hreflang | 50+ idiomas / regiones |
| **Precios dinámicos** | API propia Tesla | apigateway-pricing-gateway.tesla.com |

---

## 3. Tabla Comparativa de Elementos y sus Estilos

| Elemento | Clase CSS | Color fondo | Color texto | Tamaño fuente | Espaciado | Notas |
|---|---|---|---|---|---|---|
| **Header** | `.tds-site-header` | `#ffffff` (modo claro) / `transparent` (modo oscuro) | `#171a20` / `#ffffff` | 14px | 0 | Sticky, transparente sobre hero |
| **Logo Tesla** | `.tds-site-logo` | transparente | `#171a20` / `#ffffff` | SVG | padding: 12px | SVG vectorial |
| **Mega-menú** | `.dx-mega-menu` | `#ffffff` | `#171a20` | 14px | padding: 24px | Desplegable hover |
| **Hero imagen** | `.tcl-homepage-hero` | imagen de fondo | `#ffffff` | — | 100vh | Texto superpuesto sobre foto |
| **Hero CTA botón primario** | `.tds-btn--primary` | `#171a20` | `#ffffff` | 14px | 12px 24px | Borde radius: 4px |
| **Hero CTA botón secundario** | `.tds-btn--secondary` | `rgba(255,255,255,0.65)` | `#171a20` | 14px | 12px 24px | Semitransparente |
| **Product Card** | `.tds-layout-2col > article` | `#ffffff` | `#171a20` | 17px título | padding: 32px | 2 columnas en desktop |
| **Charging Map** | `.charging-map-component` | `#f4f4f4` | `#171a20` | `--tds-size--5x` / `--6x` | padding: 40px 48px | Mapa interactivo |
| **Cookie Banner** | `.cookie-banner` | `#ffffff` | `#171a20` | 14px | padding: 16px 24px / 16px 48px | `z-index: 100001` |
| **Footer** | `.tds-site-footer` | `#ffffff` | `#5c5e62` | 12px | padding: 24px 48px | Links grises |
| **Scrim oscuro** | `.tds-scrim--black` | `#171a20` / `#000000` | `#ffffff` | heredado | heredado | Modo oscuro en secciones |
| **Permanent CTA** | `.tcl-permanent-cta` | `#cc0000` | `#ffffff` | 14px | padding: 12px 20px | Fijo en viewport |

---

## 4. Recomendaciones para Replicar la Arquitectura

### 4.1 Estructura de Archivos Recomendada

```
proyecto/
├── index.html              ← HTML semántico (estructura Drupal-like)
├── assets/
│   ├── css/
│   │   ├── design-tokens.css    ← Variables CSS (colores, tipografía, espaciado)
│   │   ├── layout.css           ← Sistema de columnas y breakpoints
│   │   ├── components.css       ← Header, cards, footer, cookie banner
│   │   └── themes.css           ← Scrim light/dark
│   ├── js/
│   │   ├── main.js              ← Lógica principal (menú, scroll, animaciones)
│   │   ├── charging-map.js      ← Integración Google Maps
│   │   └── cookie-banner.js     ← Consentimiento GDPR
│   └── img/                     ← Imágenes optimizadas (WebP + fallback JPG)
```

### 4.2 Variables CSS a Definir (Design Tokens)

Para mantener los mismos colores y tamaños, definir en `design-tokens.css`:

```css
:root {
  /* Colores Tesla */
  --color-brand-red:     #cc0000;
  --color-bg-dark:       #171a20;
  --color-bg-light:      #ffffff;
  --color-text-primary:  #171a20;
  --color-text-secondary:#5c5e62;
  --color-surface-gray:  #f4f4f4;

  /* Tipografía */
  --font-primary:        'Open Sans', Arial, sans-serif;
  --font-size-fine:      11px;
  --font-size-body:      14px;
  --font-size-s2:        17px;
  --font-size-s1:        20px;
  --font-size-banner:    23px;

  /* Espaciado base = 8px */
  --size-1x: 8px;
  --size-2x: 16px;
  --size-3x: 24px;
  --size-4x: 32px;
  --size-5x: 40px;
  --size-6x: 48px;

  /* Breakpoints */
  --bp-mobile:  639px;
  --bp-tablet:  840px;
  --bp-desktop: 900px;
}
```

### 4.3 Jerarquía Visual Idéntica

Mantener este orden de capas de z-index:

```
z-index: 1        → Secciones de contenido
z-index: 100      → Header sticky
z-index: 1000     → Mega-menú desplegado
z-index: 10000    → Chat widget
z-index: 100001   → Cookie banner (siempre encima)
```

### 4.4 Estructura Modular de Componentes

Cada componente debe seguir el patrón **BEM** que usa Tesla:

```
.componente                 → Bloque
.componente__elemento       → Elemento hijo
.componente--modificador    → Variante
```

Ejemplo para replicar las product cards:
```
.product-card               → Contenedor base
.product-card__image        → Imagen full-width
.product-card__title        → Título (Open Sans 600, 20px)
.product-card__ctas         → Contenedor de botones
.product-card--dark         → Variante fondo oscuro
```

### 4.5 Jerarquía de Secciones (orden en HTML)

```
1. <header>   → Header sticky + mega-menú
2. <main>
   a. Hero    → Imagen full-viewport + CTA
   b. Promos  → 1–2 secciones destacadas
   c. Grid    → Product cards (2 cols desktop, 1 col móvil)
   d. Map     → Sección mapa de carga
   e. Grid 2  → Productos energía (Powerwall, Solar)
   f. Content → Reportes / noticias
3. <footer>   → Links + legal
4. [overlays] → Cookie banner + Chat widget (fuera del flujo)
```

### 4.6 Integraciones a Considerar

| Prioridad | Servicio | Para qué |
|---|---|---|
| Alta | Google Tag Manager | Gestionar todos los scripts de analytics desde un punto |
| Alta | Google Maps JS API | Mapa de puntos de carga / servicio |
| Media | Facebook Pixel | Remarketing y conversiones de venta |
| Media | Chat (Twilio / Intercom) | Soporte al cliente en tiempo real |
| Baja | Optimizely | A/B testing de contenido |
| Baja | Geo IP | Redirección por región/idioma |

---

*Documento generado por análisis estático del código fuente — sin modificaciones al original.*
