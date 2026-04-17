# ThesIA Onboarding

App web ligera para perfilar estudiantes en una sesión de metodología de investigación con IA. Incluye:

- `Vista estudiante` con hero, onboarding por pasos y dashboard personal.
- `Vista docente` con resumen de cohorte, tabla y ficha individual.
- `Motor de scoring` para afinidades, nivel metodológico y recomendaciones.
- `Modo demo local` para probar sin backend.
- `Apps Script` para conectar con `Google Sheets`.

## Estructura

- [index.html](./index.html): shell principal.
- [styles.css](./styles.css): sistema visual y layout.
- [app.js](./app.js): flujo estudiante, panel docente, scoring y persistencia.
- [apps-script/Code.gs](./apps-script/Code.gs): backend mínimo para Google Sheets.

## Cómo probar rápido

1. Abre [index.html](./index.html) en un navegador.
2. Completa el onboarding.
3. Revisa el resultado individual.
4. Abre `index.html?view=admin` para ver el panel maestro.

En modo actual la app usa `localStorage` y carga dos perfiles demo para que el dashboard no arranque vacío.

## Cómo conectarlo a Google Sheets

### 1. Crear la hoja

1. Crea una hoja de cálculo nueva en Google Sheets.
2. Abre `Extensiones > Apps Script`.
3. Copia el contenido de [apps-script/Code.gs](./apps-script/Code.gs).
4. Ajusta `ADMIN_KEY` con tu clave real.
5. Guarda y despliega como `Aplicación web`.

Recomendación:

- acceso: `Anyone`
- ejecución: `Me`

### 2. Configurar el frontend

Edita [app.js](./app.js) y cambia:

```js
const APP_CONFIG = {
  sessionLabel: "Metodología IA + Investigación · Abril 2026",
  backendUrl: "TU_URL_DE_APPS_SCRIPT",
  adminKey: "TU_CLAVE_ADMIN",
  demoMode: true,
  localStorageKey: "thesia-onboarding-records-v1",
};
```

Notas:

- `backendUrl`: URL publicada del Apps Script.
- `adminKey`: debe coincidir con `ADMIN_KEY` en `Code.gs`.
- aunque conectes Sheets, la app sigue guardando copia local para pruebas rápidas.

## Hojas creadas automáticamente

- `responses`: respuestas crudas del brief.
- `profiles`: perfil procesado y salida narrativa.
- `catalog`: reservada para evolución futura.

## Despliegue sugerido

Como es un frontend estático, puedes publicarlo hoy mismo en cualquiera de estas opciones:

- GitHub Pages
- Netlify
- Vercel
- cualquier hosting estático simple

## Qué queda listo para evolucionar

- separar cohortes por sesión
- reemplazar reglas por prompts o IA externa
- endurecer seguridad del panel docente
- mover la configuración a un archivo externo o variables de entorno
