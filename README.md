# Validación Integral — Landing Page (React + Vite) · v2 Rediseño

Rediseño completo del sitio, animado y con tipografía propia. Mismo contenido y
las mismas imágenes reales que ya tenías; lo que cambió es el sistema visual
completo.

## Qué cambió respecto a la versión anterior

- **Tipografía**: `Big Shoulders Display` (titulares grandes, condensada,
  carácter industrial/señalética) + `Inter` (texto) + `IBM Plex Mono`
  (cifras, etiquetas, datos técnicos).
- **Elemento de firma**: una "traza de señal" (`SignalTrace.jsx`) que se
  dibuja sola con SVG y se asienta en un indicador PASS — aparece en el hero
  y como divisor en el CTA final. Referencia directa al mundo de la
  certificación (un instrumento midiendo en vivo).
- **Animación al hacer scroll**: cada sección se revela con un fade + subida
  sutil la primera vez que entra en pantalla (`hooks/useReveal.js` +
  `components/Reveal.jsx`).
- **Cifras animadas**: los números de "Validación Integral en cifras" cuentan
  hacia arriba cuando la sección entra en el viewport (`hooks/useCountUp.js`).
- **Línea de proceso que se dibuja**: en "El proceso que se sigue", la línea
  conectora se rellena y los círculos numerados aparecen en cascada al
  hacer scroll.
- **Motivo de "esquinas de visor"**: las tarjetas de certificación usan un
  detalle de esquina tipo mira/osciloscopio al pasar el mouse (clase `.frame`).
- Todo respeta `prefers-reduced-motion`: si el usuario tiene animaciones
  reducidas activadas en su sistema, las animaciones se desactivan y el
  contenido aparece directamente.

## 1. Requisitos

- Node.js 18 o superior (recomendado 20+)
- npm

## 2. Instalación

```bash
npm install
```

## 3. Agregar tus imágenes

Coloca estos 6 archivos dentro de la carpeta `public/` (con estos nombres exactos):

- `logo-slogan-derecha.png` — logo del header
- `hombre-con-equipo.jpg` — foto de fondo del hero
- `cifras-bg.jpg` — foto de fondo de "Validación Integral en cifras"
- `boton-whatsapp.png` — botón "Contactar por WhatsApp"
- `whatsapp-flotante.png` — ícono del botón flotante
- `logo-con-slogan-abajo.png` — logo del footer

## 4. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre la URL que muestre la terminal (normalmente `http://localhost:5173`).

## 5. Generar la versión de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para subir a cualquier hosting estático.
Previsualízala localmente con `npm run preview`.

## 6. Estructura

```
└── src/
    ├── hooks/
    │   ├── useReveal.js       # animación al hacer scroll
    │   └── useCountUp.js      # conteo animado de cifras
    ├── components/
    │   ├── Reveal.jsx          # wrapper de animación reutilizable
    │   ├── SignalTrace.jsx     # elemento de firma (traza de señal)
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── TiraStrip.jsx
    │   ├── TrustBar.jsx
    │   ├── TiposCertificacion.jsx
    │   ├── Servicios.jsx
    │   ├── PorQueCertificar.jsx
    │   ├── Proceso.jsx
    │   ├── Faq.jsx
    │   ├── CtaFinal.jsx
    │   ├── Footer.jsx
    │   └── WhatsappFloat.jsx
    └── index.css                # sistema de diseño completo
```

## Nota honesta

No pude tomar una captura de pantalla real de este rediseño antes de
entregarlo (el entorno donde lo generé no tiene acceso a un navegador para
renderizarlo). El build compila sin errores y revisé el CSS a mano, pero
te recomiendo correr `npm run dev` y revisarlo con calma — si algo no
termina de verse bien en la práctica (espaciados, algún salto de línea,
contraste en algún tramo de la foto), cuéntamelo con una captura y lo ajusto.
