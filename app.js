const APP_CONFIG = {
  sessionLabel: "Metodología IA + Investigación · Abril 2026",
  backendUrl: "",
  adminKey: "thesia-admin-demo",
  demoMode: true,
  localStorageKey: "thesia-onboarding-records-v1",
};

const TOPIC_BLUEPRINTS = [
  {
    id: "aec-automation-metrados",
    cluster: "optimization_systems",
    sectors: ["aec", "business"],
    focuses: ["automation", "productivity"],
    outputs: ["automation", "dashboard"],
    evidence: ["tabular", "documents"],
    methods: ["applied", "quantitative"],
    titles: {
      aec: "Automatización del procesamiento de metrados y reportes técnicos con Python e IA en proyectos de construcción",
      generic: "Automatización de tareas repetitivas con Python e IA para mejorar productividad operativa",
    },
    angle: "reducción de tiempos, errores y retrabajo en flujos manuales",
    methodology: "estudio aplicado con análisis de procesos y medición antes/después",
  },
  {
    id: "aec-computer-vision-epp",
    cluster: "optimization_systems",
    sectors: ["aec", "health"],
    focuses: ["quality", "safety"],
    outputs: ["prototype", "predictive"],
    evidence: ["images"],
    methods: ["quantitative", "applied"],
    titles: {
      aec: "Diseño de un sistema de visión artificial para detección de EPP o condiciones inseguras en obra",
      generic: "Aplicación de visión artificial para detección automática de cumplimiento operativo",
    },
    angle: "computer vision aplicada a seguridad, monitoreo y control de cumplimiento",
    methodology: "diseño e implementación de prototipo evaluado con imágenes o video",
  },
  {
    id: "aec-predictive-cost-time",
    cluster: "data_decision",
    sectors: ["aec", "business"],
    focuses: ["prediction", "decision"],
    outputs: ["predictive", "dashboard"],
    evidence: ["tabular"],
    methods: ["quantitative"],
    titles: {
      aec: "Modelo predictivo para estimar desviaciones de costo o plazo en proyectos de ingeniería civil",
      generic: "Modelo predictivo para anticipar desviaciones operativas y mejorar la toma de decisiones",
    },
    angle: "predicción de riesgos, plazos y comportamiento de variables críticas",
    methodology: "cuantitativo con modelado predictivo y validación de métricas",
  },
  {
    id: "aec-chatbot-normas",
    cluster: "digital_innovation",
    sectors: ["aec", "technology"],
    focuses: ["documents", "decision"],
    outputs: ["chatbot", "prototype"],
    evidence: ["documents"],
    methods: ["applied", "mixed"],
    titles: {
      aec: "Diseño de un chatbot con IA para consulta asistida de normativa técnica en ingeniería civil",
      generic: "Diseño de un asistente conversacional con IA para consulta de documentación especializada",
    },
    angle: "consulta inteligente de normativa, documentos y criterios técnicos",
    methodology: "diseño-propuesta con validación funcional y pruebas de uso",
  },
  {
    id: "thesis-copilot-formulation",
    cluster: "education_ai",
    sectors: ["education"],
    focuses: ["experience", "productivity"],
    outputs: ["chatbot", "prototype"],
    evidence: ["documents", "survey"],
    methods: ["mixed", "applied"],
    titles: {
      education: "Diseño de un copiloto con IA para apoyar la formulación del problema de tesis en estudiantes universitarios",
      generic: "Diseño de un copiloto con IA para mejorar la formulación de problemas de investigación",
    },
    angle: "acompañamiento académico, claridad del problema y mejora iterativa",
    methodology: "mixto con validación por rúbrica y percepción de usuarios",
  },
  {
    id: "thesis-writing-feedback",
    cluster: "education_ai",
    sectors: ["education"],
    focuses: ["documents", "quality"],
    outputs: ["prototype", "automation"],
    evidence: ["documents"],
    methods: ["mixed", "qualitative"],
    titles: {
      education: "Uso de IA generativa para retroalimentación de redacción académica en trabajos de investigación",
      generic: "Uso de IA generativa para mejorar claridad y coherencia en redacción académica",
    },
    angle: "calidad argumentativa, coherencia y soporte de escritura",
    methodology: "cuasi experimental con análisis comparativo de textos",
  },
  {
    id: "dashboard-decision-support",
    cluster: "data_decision",
    sectors: ["business", "public", "health", "education"],
    focuses: ["decision", "productivity"],
    outputs: ["dashboard"],
    evidence: ["tabular", "survey"],
    methods: ["quantitative", "mixed"],
    titles: {
      generic: "Diseño de un dashboard inteligente para priorización de decisiones basado en indicadores clave",
    },
    angle: "visualización, priorización y decisiones basadas en evidencia",
    methodology: "estudio aplicado con analítica descriptiva y validación con usuarios",
  },
  {
    id: "digital-adoption-ai",
    cluster: "social_research",
    sectors: ["education", "business", "public", "health"],
    focuses: ["ethics", "experience"],
    outputs: ["diagnostic", "strategy"],
    evidence: ["survey", "interviews"],
    methods: ["qualitative", "mixed"],
    titles: {
      generic: "Factores que influyen en la adopción de herramientas de IA en un contexto organizacional o académico",
    },
    angle: "barreras, confianza, apropiación tecnológica y cambio organizacional",
    methodology: "encuesta + entrevistas semiestructuradas",
  },
  {
    id: "process-improvement-ai",
    cluster: "digital_innovation",
    sectors: ["business", "public", "aec"],
    focuses: ["automation", "decision", "quality"],
    outputs: ["strategy", "automation"],
    evidence: ["tabular", "documents", "interviews"],
    methods: ["applied", "mixed"],
    titles: {
      generic: "Propuesta de mejora de procesos con apoyo de IA para reducir tiempos y errores operativos",
    },
    angle: "transformación digital, automatización y rediseño de procesos",
    methodology: "caso aplicado con mapeo de proceso y validación de mejora",
  },
  {
    id: "document-analysis-ai",
    cluster: "optimization_systems",
    sectors: ["aec", "public", "education", "business"],
    focuses: ["documents", "quality"],
    outputs: ["automation", "prototype"],
    evidence: ["documents"],
    methods: ["applied", "mixed"],
    titles: {
      generic: "Sistema de análisis de documentos con IA para extraer, clasificar o validar información clave",
    },
    angle: "procesamiento inteligente de PDFs, normas, expedientes o reportes",
    methodology: "diseño e implementación de prototipo con validación funcional",
  },
];

const PROFILE_ARCHETYPES = {
  education_ai: {
    label: "IA aplicada a educación",
    summary: "Perfil con sensibilidad pedagógica y foco en mejorar procesos de aprendizaje, redacción y acompañamiento académico.",
    recommendedLine: "Diseño de experiencias de investigación asistidas por IA",
  },
  data_decision: {
    label: "Analítica y toma de decisiones",
    summary: "Perfil orientado a evidencia, indicadores y análisis estructurado para respaldar decisiones con datos.",
    recommendedLine: "Analítica aplicada a contextos académicos e institucionales",
  },
  digital_innovation: {
    label: "Innovación y transformación digital",
    summary: "Perfil con visión estratégica para traducir necesidades reales en soluciones tecnológicas y mejoras de proceso.",
    recommendedLine: "Adopción y diseño de servicios con IA",
  },
  social_research: {
    label: "Investigación social asistida por IA",
    summary: "Perfil interesado en comprender contextos humanos, percepciones y retos de implementación responsable.",
    recommendedLine: "Impacto social, ética y apropiación de IA",
  },
  optimization_systems: {
    label: "Optimización y sistemas inteligentes",
    summary: "Perfil con impulso hacia automatización, mejora continua y diseño de sistemas de apoyo a la investigación.",
    recommendedLine: "Sistemas de recomendación y optimización de flujos de investigación",
  },
};

const STEP_DEFINITIONS = [
  {
    id: "identity",
    title: "Identidad académica",
    description: "Conozcamos tu contexto y tu punto de partida en la investigación.",
  },
  {
    id: "interests",
    title: "Intereses de investigación",
    description: "Detectamos en qué tipo de problemas y contextos te interesa investigar.",
  },
  {
    id: "skills",
    title: "Habilidades y metodología",
    description: "Estimamos fortalezas metodológicas y nivel de autonomía para desarrollar un proyecto.",
  },
  {
    id: "motivations",
    title: "Motivaciones y enfoque",
    description: "Identificamos propósito, urgencia e intención de impacto para recomendar una línea clara.",
  },
];

const INTEREST_OPTIONS = [
  {
    value: "aec",
    label: "Construcción, BIM e ingeniería civil",
    description: "Procesos de obra, oficina técnica, metrados, seguridad, modelos BIM o control de proyecto.",
  },
  {
    value: "education",
    label: "Educación e investigación académica",
    description: "Formulación de tesis, acompañamiento académico, redacción o aprendizaje asistido por IA.",
  },
  {
    value: "business",
    label: "Negocios, operaciones y gestión",
    description: "Procesos operativos, productividad, control, automatización o decisiones de gestión.",
  },
  {
    value: "public",
    label: "Sector público o servicios institucionales",
    description: "Procesos documentarios, priorización, atención o mejora de servicios.",
  },
  {
    value: "health",
    label: "Salud y bienestar",
    description: "Seguimiento, clasificación, apoyo a decisiones o mejora de procesos en salud.",
  },
  {
    value: "technology",
    label: "Tecnología, datos y sistemas inteligentes",
    description: "Modelos, analítica, recomendadores, prototipos o servicios digitales con IA.",
  },
];

const PROBLEM_FOCUS_OPTIONS = [
  { value: "automation", label: "Automatizar tareas repetitivas", description: "Liberar tiempo y reducir fricción operacional." },
  { value: "prediction", label: "Predecir resultados", description: "Detectar patrones y anticipar comportamientos." },
  { value: "decision", label: "Mejorar decisiones", description: "Usar evidencia para priorizar acciones." },
  { value: "experience", label: "Mejorar experiencia del usuario", description: "Diseñar apoyo más claro, útil o guiado para personas." },
  { value: "ethics", label: "Abordar adopción, confianza o ética", description: "Comprender barreras, percepciones y uso responsable." },
  { value: "productivity", label: "Reducir tiempos de trabajo", description: "Acelerar ejecución de actividades técnicas o académicas." },
  { value: "quality", label: "Detectar errores o incumplimientos", description: "Control de calidad, validación o cumplimiento de criterios." },
  { value: "documents", label: "Analizar documentos o normativa", description: "Extraer, clasificar o consultar información desde archivos o textos." },
  { value: "safety", label: "Monitorear seguridad o riesgo", description: "Detectar condiciones inseguras o factores de riesgo." },
];

const EVIDENCE_OPTIONS = [
  { value: "tabular", label: "Datos tabulares", description: "Excel, CSV, bases de datos, metrados, indicadores o registros." },
  { value: "documents", label: "Documentos y PDFs", description: "Normas, expedientes, informes, tesis, memorias o reportes." },
  { value: "images", label: "Imágenes o video", description: "Fotografías, capturas, video de obra o inspección visual." },
  { value: "survey", label: "Encuestas o entrevistas", description: "Percepciones, experiencia de usuario o información declarativa." },
  { value: "none", label: "Aún no tengo datos claros", description: "Tengo el interés, pero todavía no defino la fuente de evidencia." },
];

const THESIS_OUTPUT_OPTIONS = [
  { value: "automation", label: "Automatización o script", description: "Una solución que reduzca tiempos o trabajo manual." },
  { value: "dashboard", label: "Dashboard o soporte a decisiones", description: "Una herramienta para visualizar y priorizar información." },
  { value: "predictive", label: "Modelo predictivo o clasificatorio", description: "Una solución que anticipe, detecte o clasifique." },
  { value: "prototype", label: "Prototipo o sistema funcional", description: "Una aplicación, servicio o herramienta usable." },
  { value: "chatbot", label: "Chatbot o asistente inteligente", description: "Un sistema conversacional para consulta o apoyo." },
  { value: "diagnostic", label: "Diagnóstico o estudio de adopción", description: "Una investigación sobre barreras, madurez o percepción." },
  { value: "strategy", label: "Propuesta de mejora o roadmap", description: "Una estrategia aplicada para transformar un proceso." },
];

const METHODOLOGY_OPTIONS = [
  { value: "applied", label: "Aplicada / desarrollo", description: "Quiero construir o proponer una solución concreta." },
  { value: "quantitative", label: "Cuantitativa", description: "Prefiero medir variables y trabajar con datos numéricos." },
  { value: "qualitative", label: "Cualitativa", description: "Prefiero comprender percepciones, contextos y experiencias." },
  { value: "mixed", label: "Mixta", description: "Quiero combinar medición con comprensión contextual." },
];

const IMPACT_OPTIONS = [
  { value: "personal", label: "Resolver un problema cercano", description: "Un reto concreto en mi aula, carrera o trabajo." },
  { value: "institutional", label: "Aportar a una institución", description: "Mejorar decisiones o procesos en una organización." },
  { value: "social", label: "Aportar a una problemática mayor", description: "Generar valor en una comunidad o contexto social." },
];

const MOTIVATION_OPTIONS = [
  { value: "graduate", label: "Avanzar mi tesis o proyecto final", description: "Necesito claridad para encaminar mi investigación." },
  { value: "publish", label: "Construir un tema con potencial de publicación", description: "Quiero un tema consistente y defendible." },
  { value: "solve-real", label: "Resolver un problema real", description: "Me interesa que la investigación tenga aplicación concreta." },
  { value: "build-solution", label: "Diseñar una solución o prototipo", description: "Quiero convertir una idea en sistema, servicio o herramienta." },
];

const URGENCY_OPTIONS = [
  { value: "start", label: "Estoy recién comenzando", description: "Necesito dirección general y delimitación del problema." },
  { value: "define", label: "Ya tengo ideas, pero necesito foco", description: "Busco priorizar y aterrizar una línea viable." },
  { value: "advance", label: "Ya estoy avanzando y quiero fortalecer el enfoque", description: "Necesito validar o enriquecer el camino elegido." },
];

const COLLABORATION_OPTIONS = [
  { value: "guided", label: "Prefiero guía estructurada", description: "Me ayuda tener pasos claros y validaciones frecuentes." },
  { value: "balanced", label: "Me funciona una colaboración equilibrada", description: "Quiero ayuda, pero también espacio para experimentar." },
  { value: "autonomous", label: "Soy bastante autónomo", description: "Necesito apoyo puntual y herramientas para acelerar." },
];

const DEMO_DATA = [
  {
    id: "demo-1",
    createdAt: "2026-04-16T10:00:00.000Z",
    session: APP_CONFIG.sessionLabel,
    student: {
      fullName: "Milagros Contreras Díaz",
      email: "milagros@demo.edu",
      career: "Administración y Negocios Digitales",
      cycle: "9no ciclo",
      institution: "Universidad Demo",
    },
    answers: {
      interestArea: "education",
      problemFocus: ["experience", "productivity"],
      evidencePreference: "documents",
      thesisOutput: "chatbot",
      methodologyPreference: "mixed",
      desiredImpact: "institutional",
      unitOfAnalysis: "estudiantes universitarios en etapa inicial de tesis",
      improvementGoal: "reducir bloqueos y mejorar la claridad del problema de investigación",
      literatureConfidence: 4,
      problemDefinitionConfidence: 4,
      dataAccessConfidence: 4,
      dataAnalysisConfidence: 3,
      writingConfidence: 5,
      aiToolsConfidence: 5,
      motivation: "graduate",
      urgency: "define",
      collaborationStyle: "balanced",
      openTopic: "Quiero investigar cómo la IA puede ayudar a estudiantes a formular mejor su problema de tesis y reducir bloqueos al inicio.",
    },
  },
  {
    id: "demo-2",
    createdAt: "2026-04-16T10:07:00.000Z",
    session: APP_CONFIG.sessionLabel,
    student: {
      fullName: "José Rivera León",
      email: "jose@demo.edu",
      career: "Ingeniería de Sistemas",
      cycle: "8vo ciclo",
      institution: "Universidad Demo",
    },
    answers: {
      interestArea: "aec",
      problemFocus: ["automation", "decision"],
      evidencePreference: "tabular",
      thesisOutput: "dashboard",
      methodologyPreference: "applied",
      desiredImpact: "institutional",
      unitOfAnalysis: "procesos de metrados y control en proyectos de ingeniería civil",
      improvementGoal: "disminuir tiempos de consolidación y mejorar trazabilidad para decisiones",
      literatureConfidence: 3,
      problemDefinitionConfidence: 4,
      dataAccessConfidence: 4,
      dataAnalysisConfidence: 5,
      writingConfidence: 3,
      aiToolsConfidence: 5,
      motivation: "build-solution",
      urgency: "advance",
      collaborationStyle: "autonomous",
      openTopic: "Me interesa un sistema que recomiende temas de investigación según afinidades y avance del estudiante.",
    },
  },
];

const state = {
  mode: getMode(),
  adminAuthorized: false,
  stepIndex: 0,
  form: getInitialForm(),
  profiles: [],
  cohortSummary: null,
  selectedProfileId: null,
  searchTerm: "",
  affinityFilter: "all",
  methodologyFilter: "all",
  status: "",
  error: "",
};

const root = document.querySelector("#app");

bootstrap();

async function bootstrap() {
  seedDemoData();

  if (state.mode === "admin") {
    await initializeAdminView();
  } else {
    renderStudentPage();
  }
}

function getMode() {
  const params = new URLSearchParams(window.location.search);
  return params.get("view") === "admin" ? "admin" : "student";
}

function getInitialForm() {
  return {
    fullName: "",
    email: "",
    career: "",
    cycle: "",
    institution: "",
    interestArea: "aec",
    problemFocus: ["automation"],
    evidencePreference: "tabular",
    thesisOutput: "automation",
    methodologyPreference: "applied",
    desiredImpact: "institutional",
    unitOfAnalysis: "",
    improvementGoal: "",
    literatureConfidence: 3,
    problemDefinitionConfidence: 3,
    dataAccessConfidence: 3,
    dataAnalysisConfidence: 3,
    writingConfidence: 3,
    aiToolsConfidence: 3,
    motivation: "graduate",
    urgency: "define",
    collaborationStyle: "balanced",
    openTopic: "",
  };
}

function seedDemoData() {
  const records = readLocalRecords();
  if (!records.length) {
    const seeded = DEMO_DATA.map(buildProfileRecordFromSeed);
    localStorage.setItem(APP_CONFIG.localStorageKey, JSON.stringify(seeded));
  }
}

function buildProfileRecordFromSeed(seed) {
  const profile = buildProfileV2(seed.answers, seed.student);
  return {
    ...seed,
    profile,
  };
}

function readLocalRecords() {
  try {
    return JSON.parse(localStorage.getItem(APP_CONFIG.localStorageKey) || "[]");
  } catch (error) {
    return [];
  }
}

function saveLocalRecords(records) {
  localStorage.setItem(APP_CONFIG.localStorageKey, JSON.stringify(records));
}

function renderStudentPage(resultRecord = null) {
  root.innerHTML = `
    <section class="app-section panel hero" id="experiencia">
      <div class="hero-copy">
        <span class="eyebrow">Brief onboarding · Perfil de investigación</span>
        <h1>Conoce tu <span>ruta ideal</span> para investigar con IA</h1>
        <p>
          Una experiencia guiada al estilo ThesIA para captar datos de tus estudiantes,
          perfilar afinidades, estimar su madurez metodológica y devolver un dashboard con
          líneas de investigación recomendadas.
        </p>
        <div class="hero-cta-row">
          <a class="btn btn-primary" href="#diagnostico">Empezar diagnóstico</a>
          <a class="btn btn-ghost" href="?view=admin">Ver panel docente</a>
        </div>
        <div class="hero-meta">
          <article class="stat-card">
            <strong>3 bloques</strong>
            <span>Intereses, habilidades y motivaciones.</span>
          </article>
          <article class="stat-card">
            <strong>Perfil + temas</strong>
            <span>Salida inmediata con recomendaciones concretas.</span>
          </article>
          <article class="stat-card">
            <strong>Sheets-ready</strong>
            <span>Persistencia pensada para cohortes y panel maestro.</span>
          </article>
        </div>
      </div>
      <div class="hero-visual">
        <div class="glow"></div>
        <div class="mockup-stack">
          <article class="dashboard-mockup list-card">
            <div class="mockup-frame">
              <aside class="mockup-sidebar">
                <div class="mockup-dot active"></div>
                <div class="mockup-dot"></div>
                <div class="mockup-dot"></div>
                <div class="mockup-dot"></div>
              </aside>
              <div class="mockup-main">
                <div class="mockup-title">
                  <strong>Hola, MILAGROS</strong>
                  <span>Colaboremos en tu investigación</span>
                </div>
                <div class="mockup-grid">
                  <div class="profile-card-mini">
                    <div class="avatar-mini"></div>
                    <div class="line short"></div>
                    <div class="line full"></div>
                    <div class="line full light"></div>
                    <div class="pill">Perfil recomendado</div>
                  </div>
                  <div class="form-card-mini">
                    <div class="line full"></div>
                    <div class="progress-mini"><span style="width:72%"></span></div>
                    <div class="chip-row">
                      <span class="chip">Campo de interés</span>
                      <span class="chip">Estilo</span>
                    </div>
                    <div class="line full"></div>
                    <div class="line full light"></div>
                    <div class="line short"></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="editor-mockup list-card">
            <div class="mockup-grid">
              <div class="assistant-column">
                <span class="badge-soft">Copiloto</span>
                <div class="line full"></div>
                <div class="line full light"></div>
                <div class="line short"></div>
                <div class="mockup-footer">
                  <span class="inline-badge">Perfil sugerido</span>
                  <span class="badge-soft">IA aplicada a educación</span>
                </div>
              </div>
              <div class="editor-column">
                <div class="line full"></div>
                <div class="line full light"></div>
                <div class="line full light"></div>
                <div class="outline-column">
                  <div class="line short"></div>
                  <div class="line full light"></div>
                  <div class="line full light"></div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="app-section section-grid" id="diagnostico">
      <div class="panel section-copy">
        <span class="mini-label">Flujo guiado</span>
        <h2>Diagnóstico breve, pero con salida <span>accionable</span></h2>
        <p>
          Este onboarding no solo recoge datos. Ordena intereses, mide fortalezas
          metodológicas y traduce el perfil en líneas de trabajo concretas para orientar
          la formulación de temas de investigación con IA.
        </p>
        <div class="accordion-list">
          <article class="accordion-item">
            <div class="accordion-head">
              <span>1. Intereses de investigación</span>
              <span>Descubre afinidad temática</span>
            </div>
            <p>Ubica el contexto donde más valor puedes generar y el tipo de problema que quieres abordar.</p>
          </article>
          <article class="accordion-item">
            <div class="accordion-head">
              <span>2. Habilidades y metodología</span>
              <span>Estima nivel de madurez</span>
            </div>
            <p>Mapea confianza metodológica y define el tipo de apoyo que necesita cada estudiante.</p>
          </article>
          <article class="accordion-item">
            <div class="accordion-head">
              <span>3. Motivaciones y enfoque</span>
              <span>Conecta propósito y viabilidad</span>
            </div>
            <p>Prioriza la línea sugerida según intención, urgencia académica e impacto esperado.</p>
          </article>
        </div>
      </div>
      <aside class="panel sticky-card">
        <div class="preview-grid">
          <article class="preview-card">
            <strong>Salida individual</strong>
            <p>Dashboard personal con afinidad dominante, fortalezas y temas recomendados.</p>
          </article>
          <article class="preview-card">
            <strong>Salida docente</strong>
            <p>Resumen de cohorte, filtros y fichas individuales para identificar perfiles del grupo.</p>
          </article>
          <article class="preview-card">
            <strong>Persistencia central</strong>
            <p>Todo listo para enviarse a Google Sheets o funcionar en modo demo local.</p>
          </article>
        </div>
      </aside>
    </section>

    <section class="app-section panel wizard-card" id="brief-form"></section>

    <section class="app-section panel result-card" id="result-panel">
      ${renderResultsState(resultRecord)}
    </section>

    <footer class="app-section footer-note">
      ThesIA onboarding · sesión ${APP_CONFIG.sessionLabel} · modo ${getPersistenceLabel()}
    </footer>
  `;

  renderWizard();
}

function renderWizard() {
  const mount = document.querySelector("#brief-form");
  const step = STEP_DEFINITIONS[state.stepIndex];
  const progress = ((state.stepIndex + 1) / STEP_DEFINITIONS.length) * 100;

  mount.innerHTML = `
    <div class="wizard-shell">
      <aside class="wizard-sidebar">
        ${STEP_DEFINITIONS.map(
          (item, index) => `
            <article class="wizard-step ${index === state.stepIndex ? "active" : ""}">
              <small>Paso ${index + 1}</small>
              <strong>${item.title}</strong>
              <span class="muted">${item.description}</span>
            </article>
          `
        ).join("")}
      </aside>
      <div class="wizard-main">
        <div class="wizard-topbar">
          <div class="wizard-copy">
            <span class="mini-label">Onboarding estudiante</span>
            <h2>${step.title}</h2>
            <p>${step.description}</p>
          </div>
          <div class="right">
            <small class="muted">Progreso</small>
            <div class="progress-bar"><span style="width:${progress}%"></span></div>
          </div>
        </div>
        <div id="step-content">${renderStepContentV2(step.id)}</div>
        ${state.error ? `<div class="error-text">${state.error}</div>` : ""}
        ${state.status ? `<div class="status-text">${state.status}</div>` : ""}
        <div class="wizard-actions">
          <button class="btn btn-ghost" data-action="prev" ${state.stepIndex === 0 ? "disabled" : ""}>Volver</button>
          <button class="btn btn-primary" data-action="next">${state.stepIndex === STEP_DEFINITIONS.length - 1 ? "Generar perfil" : "Continuar"}</button>
        </div>
      </div>
    </div>
  `;

  mount.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", handleWizardAction);
  });

  bindWizardInputs();
}

function renderStepContent(stepId) {
  if (stepId === "identity") {
    return `
      <div class="form-grid">
        ${renderField("Nombre completo", "fullName", "text", "Ej. Milagros Contreras Díaz")}
        ${renderField("Correo", "email", "email", "Ej. milagros@correo.com")}
        ${renderField("Carrera", "career", "text", "Ej. Educación, Ingeniería de Sistemas")}
        ${renderField("Ciclo / nivel", "cycle", "text", "Ej. 8vo ciclo, egresado, maestría")}
        ${renderField("Institución", "institution", "text", "Ej. Universidad Nacional de ...", true)}
      </div>
    `;
  }

  if (stepId === "interests") {
    return `
      <div class="question-block">
        <div class="question-header">
          <strong>¿Dónde sientes mayor afinidad para investigar?</strong>
          <span class="muted">Elige el contexto donde te gustaría concentrar tu proyecto.</span>
        </div>
        <div class="option-grid" data-question="interestArea">
          ${INTEREST_OPTIONS.map((item) => renderSelectableCard("interestArea", item.value, item.label, item.description, state.form.interestArea === item.value)).join("")}
        </div>
      </div>
      <div class="question-block">
        <div class="question-header">
          <strong>¿Qué tipo de problema quieres abordar?</strong>
          <span class="muted">Puedes elegir hasta 2 focos principales.</span>
        </div>
        <div class="option-grid" data-question="problemFocus">
          ${PROBLEM_FOCUS_OPTIONS.map((item) => renderSelectableCard("problemFocus", item.value, item.label, item.description, state.form.problemFocus.includes(item.value), true)).join("")}
        </div>
      </div>
      <div class="form-grid">
        <div class="field">
          <label>Tipo de evidencia con la que te sientes más cómodo</label>
          <div class="option-grid" data-question="evidencePreference">
            ${EVIDENCE_OPTIONS.map((item) => renderSelectableCard("evidencePreference", item.value, item.label, item.description, state.form.evidencePreference === item.value)).join("")}
          </div>
        </div>
        <div class="field">
          <label>Tipo de impacto que te gustaría lograr</label>
          <div class="option-grid" data-question="desiredImpact">
            ${IMPACT_OPTIONS.map((item) => renderSelectableCard("desiredImpact", item.value, item.label, item.description, state.form.desiredImpact === item.value)).join("")}
          </div>
        </div>
      </div>
    `;
  }

  if (stepId === "skills") {
    return `
      ${renderRatingQuestion("literatureConfidence", "Lectura y organización de literatura", "¿Qué tan cómodo te sientes revisando papers, antecedentes o bases teóricas?")}
      ${renderRatingQuestion("problemDefinitionConfidence", "Formulación del problema", "¿Qué tan preparado te sientes para delimitar objetivos y preguntas de investigación?")}
      ${renderRatingQuestion("dataAnalysisConfidence", "Análisis de datos", "¿Qué tan cómodo te sientes interpretando datos o evidencias para sostener hallazgos?")}
      ${renderRatingQuestion("writingConfidence", "Redacción académica", "¿Qué tan preparado te sientes para estructurar y escribir con claridad?")}
      ${renderRatingQuestion("aiToolsConfidence", "Herramientas de IA", "¿Qué tanto dominas herramientas de IA para explorar, sintetizar o iterar tu trabajo?")}
    `;
  }

  return `
    <div class="question-block">
      <div class="question-header">
        <strong>¿Qué te mueve hoy a investigar?</strong>
        <span class="muted">Esto nos ayuda a ponderar enfoque, urgencia y formato de recomendación.</span>
      </div>
      <div class="option-grid" data-question="motivation">
        ${MOTIVATION_OPTIONS.map((item) => renderSelectableCard("motivation", item.value, item.label, item.description, state.form.motivation === item.value)).join("")}
      </div>
    </div>
    <div class="form-grid">
      <div class="field">
        <label>¿En qué momento estás?</label>
        <div class="option-grid" data-question="urgency">
          ${URGENCY_OPTIONS.map((item) => renderSelectableCard("urgency", item.value, item.label, item.description, state.form.urgency === item.value)).join("")}
        </div>
      </div>
      <div class="field">
        <label>¿Qué tipo de acompañamiento te funciona mejor?</label>
        <div class="option-grid" data-question="collaborationStyle">
          ${COLLABORATION_OPTIONS.map((item) => renderSelectableCard("collaborationStyle", item.value, item.label, item.description, state.form.collaborationStyle === item.value)).join("")}
        </div>
      </div>
      <div class="field full">
        <label for="openTopic">Describe el problema o tema que más te interesa explorar</label>
        <textarea id="openTopic" name="openTopic" placeholder="Ej. Me interesa investigar cómo la IA podría ayudar a estudiantes a mejorar la formulación de su tesis.">${escapeHtml(state.form.openTopic)}</textarea>
        <span class="helper">No tiene que ser perfecto. Solo necesitamos una pista del reto que te importa.</span>
      </div>
    </div>
  `;
}

function renderStepContentV2(stepId) {
  if (stepId === "identity") {
    return `
      <div class="form-grid">
        ${renderField("Nombre completo", "fullName", "text", "Ej. Milagros Contreras Diaz")}
        ${renderField("Correo", "email", "email", "Ej. milagros@correo.com")}
        ${renderField("Carrera", "career", "text", "Ej. Ingenieria Civil, Sistemas, Educacion")}
        ${renderField("Ciclo / nivel", "cycle", "text", "Ej. 8vo ciclo, egresado, maestria")}
        ${renderField("Institucion", "institution", "text", "Ej. Universidad Nacional de ...", true)}
      </div>
    `;
  }

  if (stepId === "interests") {
    return `
      <div class="question-block">
        <div class="question-header">
          <strong>En que sector o contexto real quieres investigar?</strong>
          <span class="muted">Elegimos el territorio donde debe aterrizar la tesis.</span>
        </div>
        <div class="option-grid" data-question="interestArea">
          ${INTEREST_OPTIONS.map((item) => renderSelectableCard("interestArea", item.value, item.label, item.description, state.form.interestArea === item.value)).join("")}
        </div>
      </div>
      <div class="question-block">
        <div class="question-header">
          <strong>Que tipo de problema quieres resolver?</strong>
          <span class="muted">Puedes marcar hasta 2 focos para que el tema no salga generico.</span>
        </div>
        <div class="option-grid" data-question="problemFocus">
          ${PROBLEM_FOCUS_OPTIONS.map((item) => renderSelectableCard("problemFocus", item.value, item.label, item.description, state.form.problemFocus.includes(item.value), true)).join("")}
        </div>
      </div>
      <div class="form-grid">
        <div class="field">
          <label>Con que evidencia real podrias trabajar?</label>
          <div class="option-grid" data-question="evidencePreference">
            ${EVIDENCE_OPTIONS.map((item) => renderSelectableCard("evidencePreference", item.value, item.label, item.description, state.form.evidencePreference === item.value)).join("")}
          </div>
        </div>
        <div class="field">
          <label>Que esperas producir como tesis?</label>
          <div class="option-grid" data-question="thesisOutput">
            ${THESIS_OUTPUT_OPTIONS.map((item) => renderSelectableCard("thesisOutput", item.value, item.label, item.description, state.form.thesisOutput === item.value)).join("")}
          </div>
        </div>
        <div class="field full">
          <label>Que nivel de impacto buscas?</label>
          <div class="option-grid" data-question="desiredImpact">
            ${IMPACT_OPTIONS.map((item) => renderSelectableCard("desiredImpact", item.value, item.label, item.description, state.form.desiredImpact === item.value)).join("")}
          </div>
        </div>
      </div>
    `;
  }

  if (stepId === "skills") {
    return `
      <div class="question-block">
        <div class="question-header">
          <strong>Que enfoque metodologico te calza mejor hoy?</strong>
          <span class="muted">No es definitivo, pero nos ayuda a recomendar un tema viable y defendible.</span>
        </div>
        <div class="option-grid" data-question="methodologyPreference">
          ${METHODOLOGY_OPTIONS.map((item) => renderSelectableCard("methodologyPreference", item.value, item.label, item.description, state.form.methodologyPreference === item.value)).join("")}
        </div>
      </div>
      ${renderRatingQuestion("literatureConfidence", "Lectura de literatura y antecedentes", "Que tan comodo te sientes revisando papers, normas, documentos tecnicos o bases teoricas?")}
      ${renderRatingQuestion("problemDefinitionConfidence", "Formulacion del problema", "Que tan preparado te sientes para delimitar problema, objetivos y pregunta de investigacion?")}
      ${renderRatingQuestion("dataAccessConfidence", "Acceso a datos o evidencia", "Que tan viable ves conseguir informacion, registros, documentos, encuestas o imagenes para tu estudio?")}
      ${renderRatingQuestion("dataAnalysisConfidence", "Analisis de datos o evidencias", "Que tan comodo te sientes interpretando datos, documentos o resultados de validacion?")}
      ${renderRatingQuestion("writingConfidence", "Redaccion academica", "Que tan preparado te sientes para estructurar y redactar capitulos o entregables?")}
      ${renderRatingQuestion("aiToolsConfidence", "Uso estrategico de IA", "Que tanto dominas herramientas de IA para explorar, sintetizar, programar o iterar?")}
    `;
  }

  return `
    <div class="question-block">
      <div class="question-header">
        <strong>Que te mueve a investigar este tema?</strong>
        <span class="muted">Esto nos ayuda a priorizar enfoque, velocidad y formato de recomendacion.</span>
      </div>
      <div class="option-grid" data-question="motivation">
        ${MOTIVATION_OPTIONS.map((item) => renderSelectableCard("motivation", item.value, item.label, item.description, state.form.motivation === item.value)).join("")}
      </div>
    </div>
    <div class="form-grid">
      <div class="field">
        <label>En que momento estas?</label>
        <div class="option-grid" data-question="urgency">
          ${URGENCY_OPTIONS.map((item) => renderSelectableCard("urgency", item.value, item.label, item.description, state.form.urgency === item.value)).join("")}
        </div>
      </div>
      <div class="field">
        <label>Que tipo de acompanamiento te funciona mejor?</label>
        <div class="option-grid" data-question="collaborationStyle">
          ${COLLABORATION_OPTIONS.map((item) => renderSelectableCard("collaborationStyle", item.value, item.label, item.description, state.form.collaborationStyle === item.value)).join("")}
        </div>
      </div>
      <div class="field full">
        <label for="unitOfAnalysis">Unidad de analisis o escenario</label>
        <input id="unitOfAnalysis" name="unitOfAnalysis" type="text" placeholder="Ej. metrados de edificaciones multifamiliares, estudiantes de tesis I, expedientes tecnicos municipales" value="${escapeHtml(state.form.unitOfAnalysis)}">
        <span class="helper">Se especifico para quien, donde o sobre que proceso se hara la tesis.</span>
      </div>
      <div class="field full">
        <label for="improvementGoal">Que mejora o resultado te gustaria demostrar?</label>
        <input id="improvementGoal" name="improvementGoal" type="text" placeholder="Ej. reducir tiempo de revision, predecir desviaciones, mejorar trazabilidad, detectar incumplimientos" value="${escapeHtml(state.form.improvementGoal)}">
      </div>
      <div class="field full">
        <label for="openTopic">Describe el problema o tema que mas te interesa explorar</label>
        <textarea id="openTopic" name="openTopic" placeholder="Ej. Quiero automatizar la revision de reportes tecnicos o disenar un asistente para consultar normativa.">${escapeHtml(state.form.openTopic)}</textarea>
        <span class="helper">No buscamos una redaccion perfecta; buscamos senales concretas para construir un mejor tema.</span>
      </div>
    </div>
  `;
}

function renderField(label, name, type, placeholder, full = false) {
  return `
    <div class="field ${full ? "full" : ""}">
      <label for="${name}">${label}</label>
      <input id="${name}" name="${name}" type="${type}" placeholder="${placeholder}" value="${escapeHtml(state.form[name])}">
    </div>
  `;
}

function renderSelectableCard(question, value, label, description, selected, multi = false) {
  return `
    <button
      type="button"
      class="option-card ${selected ? "selected" : ""}"
      data-question="${question}"
      data-value="${value}"
      data-multi="${multi ? "true" : "false"}"
    >
      <strong>${label}</strong>
      <span>${description}</span>
    </button>
  `;
}

function renderRatingQuestion(name, label, description) {
  return `
    <div class="question-block">
      <div class="question-header">
        <strong>${label}</strong>
        <span class="muted">${description}</span>
      </div>
      <div class="rating-row" data-question="${name}">
        ${[1, 2, 3, 4, 5].map((value) => `
          <button
            type="button"
            class="rating-card ${Number(state.form[name]) === value ? "selected" : ""}"
            data-question="${name}"
            data-value="${value}"
          >
            <span class="rating-value">${value}</span>
            <span>${getRatingLabel(value)}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function getRatingLabel(value) {
  return ["Muy bajo", "Básico", "Intermedio", "Sólido", "Avanzado"][value - 1];
}

function bindWizardInputs() {
  document.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.form[event.target.name] = event.target.value;
    });
  });

  document.querySelectorAll("[data-question]").forEach((element) => {
    if (element.classList.contains("option-card") || element.classList.contains("rating-card")) {
      element.addEventListener("click", handleQuestionClick);
    }
  });
}

function handleQuestionClick(event) {
  const button = event.currentTarget;
  const question = button.dataset.question;
  const value = button.dataset.value;
  const isMulti = button.dataset.multi === "true";

  if (question === "problemFocus" && isMulti) {
    const nextValues = new Set(state.form.problemFocus);
    if (nextValues.has(value)) {
      nextValues.delete(value);
    } else if (nextValues.size < 2) {
      nextValues.add(value);
    } else {
      const [first] = nextValues;
      nextValues.delete(first);
      nextValues.add(value);
    }
    state.form.problemFocus = Array.from(nextValues);
  } else if (question.endsWith("Confidence")) {
    state.form[question] = Number(value);
  } else {
    state.form[question] = value;
  }

  renderWizard();
}

async function handleWizardAction(event) {
  const action = event.currentTarget.dataset.action;
  state.error = "";
  state.status = "";

  if (action === "prev") {
    state.stepIndex = Math.max(0, state.stepIndex - 1);
    renderWizard();
    return;
  }

  const validationError = validateStep(STEP_DEFINITIONS[state.stepIndex].id);
  if (validationError) {
    state.error = validationError;
    renderWizard();
    return;
  }

  if (state.stepIndex < STEP_DEFINITIONS.length - 1) {
    state.stepIndex += 1;
    renderWizard();
    return;
  }

  const student = {
    fullName: state.form.fullName.trim(),
    email: state.form.email.trim(),
    career: state.form.career.trim(),
    cycle: state.form.cycle.trim(),
    institution: state.form.institution.trim(),
  };

  const profile = buildProfileV2(state.form, student);
  const record = {
    id: `profile-${Date.now()}`,
    createdAt: new Date().toISOString(),
    session: APP_CONFIG.sessionLabel,
    student,
    answers: structuredClone(state.form),
    profile,
  };

  try {
    await saveProfileRecord(record);
    state.status = "Perfil generado y registrado correctamente.";
    renderResultPanel(record);
    window.location.hash = "#result-panel";
  } catch (error) {
    state.error = "Se generó el perfil, pero no se pudo guardar en el backend configurado. Puedes revisar la configuración del endpoint.";
    renderResultPanel(record);
  }

  renderWizard();
}

function validateStep(stepId) {
  if (stepId === "identity") {
    if (!state.form.fullName.trim()) return "Ingresa el nombre del estudiante.";
    if (!state.form.email.trim()) return "Ingresa un correo para poder identificar el registro.";
    if (!state.form.career.trim()) return "Completa la carrera o programa.";
    if (!state.form.institution.trim()) return "Completa la institución.";
  }

  if (stepId === "interests") {
    if (!state.form.problemFocus.length) return "Elige al menos un foco de problema.";
    if (!state.form.thesisOutput) return "Elige que tipo de salida esperas producir en la tesis.";
    if (!state.form.evidencePreference) return "Indica con que evidencia podrias trabajar.";
  }

  if (stepId === "skills") {
    if (!state.form.methodologyPreference) return "Selecciona el enfoque metodologico que mejor te represente.";
  }

  if (stepId === "motivations") {
    if (!state.form.unitOfAnalysis.trim()) return "Describe la unidad de analisis o escenario donde se aplicaria la tesis.";
    if (!state.form.improvementGoal.trim()) return "Indica que mejora o resultado esperas demostrar.";
    if (!state.form.openTopic.trim()) return "Describe brevemente el problema o tema que le interesa al estudiante.";
  }

  return "";
}

function buildProfile(form, student) {
  const scores = {
    education_ai: 0,
    data_decision: 0,
    digital_innovation: 0,
    social_research: 0,
    optimization_systems: 0,
  };

  const interestWeight = {
    education: { education_ai: 4, social_research: 1 },
    health: { data_decision: 2, social_research: 2, optimization_systems: 1 },
    business: { data_decision: 2, digital_innovation: 3, optimization_systems: 2 },
    technology: { digital_innovation: 2, optimization_systems: 4, data_decision: 1 },
    society: { social_research: 4, education_ai: 1 },
  };

  const focusWeight = {
    automation: { optimization_systems: 3, digital_innovation: 2 },
    prediction: { data_decision: 3, optimization_systems: 1 },
    decision: { data_decision: 3, digital_innovation: 1 },
    experience: { education_ai: 2, social_research: 1, digital_innovation: 1 },
    ethics: { social_research: 3, education_ai: 1 },
    productivity: { education_ai: 2, optimization_systems: 2, digital_innovation: 1 },
  };

  applyWeights(scores, interestWeight[form.interestArea]);
  form.problemFocus.forEach((focus) => applyWeights(scores, focusWeight[focus]));

  if (form.evidencePreference === "quantitative") {
    scores.data_decision += 2;
    scores.optimization_systems += 1;
  } else if (form.evidencePreference === "qualitative") {
    scores.social_research += 2;
    scores.education_ai += 1;
  } else {
    scores.education_ai += 1;
    scores.digital_innovation += 1;
  }

  if (form.desiredImpact === "institutional") {
    scores.digital_innovation += 2;
    scores.data_decision += 1;
  } else if (form.desiredImpact === "social") {
    scores.social_research += 2;
    scores.education_ai += 1;
  } else {
    scores.education_ai += 1;
    scores.optimization_systems += 1;
  }

  const methodologicalAverage = average([
    form.literatureConfidence,
    form.problemDefinitionConfidence,
    form.dataAnalysisConfidence,
    form.writingConfidence,
  ]);

  scores.data_decision += form.dataAnalysisConfidence >= 4 ? 2 : 0;
  scores.education_ai += form.writingConfidence >= 4 ? 1 : 0;
  scores.optimization_systems += form.aiToolsConfidence >= 4 ? 2 : 0;
  scores.digital_innovation += form.aiToolsConfidence >= 4 ? 1 : 0;
  scores.social_research += form.literatureConfidence >= 4 ? 1 : 0;

  if (form.motivation === "graduate") scores.education_ai += 1;
  if (form.motivation === "publish") scores.social_research += 1;
  if (form.motivation === "solve-real") scores.digital_innovation += 2;
  if (form.motivation === "build-solution") scores.optimization_systems += 2;

  if (form.urgency === "start") scores.education_ai += 1;
  if (form.urgency === "define") scores.digital_innovation += 1;
  if (form.urgency === "advance") scores.data_decision += 1;

  if (form.collaborationStyle === "guided") scores.education_ai += 1;
  if (form.collaborationStyle === "autonomous") scores.optimization_systems += 1;

  const rankedClusters = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .map(([key, value]) => ({ key, value }));

  const primary = PROFILE_ARCHETYPES[rankedClusters[0].key];
  const secondary = PROFILE_ARCHETYPES[rankedClusters[1].key];
  const normalizedBars = rankedClusters.map(({ key, value }) => ({
    key,
    label: PROFILE_ARCHETYPES[key].label,
    score: value,
    percent: normalizeScore(value, rankedClusters[0].value),
  }));

  const methodologyLevel = getMethodologyLevel(methodologicalAverage, form.aiToolsConfidence);
  const strengths = inferStrengths(form);
  const risks = inferRisks(form);
  const themes = RESEARCH_TOPICS[rankedClusters[0].key].slice(0, 3).map((item, index) => ({
    ...item,
    fitScore: Math.max(68, normalizedBars[0].percent - index * 6),
  }));

  const summary = buildNarrativeSummary({
    student,
    form,
    primary,
    secondary,
    methodologicalAverage,
    methodologyLevel,
    strengths,
  });

  return {
    primaryCluster: primary.label,
    secondaryCluster: secondary.label,
    primaryKey: rankedClusters[0].key,
    recommendedLine: primary.recommendedLine,
    methodologyLevel,
    methodologyScore: Number(methodologicalAverage.toFixed(1)),
    scores: normalizedBars,
    strengths,
    risks,
    summary,
    themes,
  };
}

function buildProfileV2(form, student) {
  const methodologyAverage = average([
    form.literatureConfidence,
    form.problemDefinitionConfidence,
    form.dataAccessConfidence,
    form.dataAnalysisConfidence,
    form.writingConfidence,
  ]);

  const clusterScores = buildClusterScoresV2(form, student, methodologyAverage);
  const rankedClusters = Object.entries(clusterScores)
    .sort(([, a], [, b]) => b - a)
    .map(([key, value]) => ({ key, value }));

  const primary = PROFILE_ARCHETYPES[rankedClusters[0].key];
  const secondary = PROFILE_ARCHETYPES[rankedClusters[1].key];
  const normalizedBars = rankedClusters.map(({ key, value }) => ({
    key,
    label: PROFILE_ARCHETYPES[key].label,
    score: value,
    percent: normalizeScore(value, rankedClusters[0].value),
  }));

  const methodologyLevel = getMethodologyLevel(methodologyAverage, form.aiToolsConfidence);
  const strengths = inferStrengthsV2(form);
  const risks = inferRisksV2(form);
  const scoredTopics = TOPIC_BLUEPRINTS
    .map((blueprint) => scoreTopicBlueprint(blueprint, form, student, rankedClusters))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item, index) => materializeTopicFromBlueprint(item.blueprint, form, student, item.score, index));

  const summary = buildNarrativeSummaryV2({
    student,
    form,
    primary,
    secondary,
    methodologyAverage,
    methodologyLevel,
    strengths,
    topTheme: scoredTopics[0],
  });

  return {
    primaryCluster: primary.label,
    secondaryCluster: secondary.label,
    primaryKey: rankedClusters[0].key,
    recommendedLine: scoredTopics[0]?.line || primary.recommendedLine,
    methodologyLevel,
    methodologyScore: Number(methodologyAverage.toFixed(1)),
    scores: normalizedBars,
    strengths,
    risks,
    summary,
    themes: scoredTopics,
  };
}

function buildClusterScoresV2(form, student, methodologyAverage) {
  const scores = {
    education_ai: 0,
    data_decision: 0,
    digital_innovation: 0,
    social_research: 0,
    optimization_systems: 0,
  };

  const interestWeight = {
    aec: { optimization_systems: 4, data_decision: 2, digital_innovation: 1 },
    education: { education_ai: 4, social_research: 1, digital_innovation: 1 },
    business: { digital_innovation: 3, data_decision: 2, optimization_systems: 2 },
    public: { social_research: 2, data_decision: 2, digital_innovation: 2 },
    health: { data_decision: 2, social_research: 2, optimization_systems: 1 },
    technology: { optimization_systems: 3, data_decision: 2, digital_innovation: 2 },
  };

  const focusWeight = {
    automation: { optimization_systems: 3, digital_innovation: 2 },
    prediction: { data_decision: 4, optimization_systems: 1 },
    decision: { data_decision: 3, digital_innovation: 1 },
    experience: { education_ai: 2, social_research: 1, digital_innovation: 1 },
    ethics: { social_research: 3, education_ai: 1 },
    productivity: { optimization_systems: 2, digital_innovation: 1, education_ai: 1 },
    quality: { optimization_systems: 2, data_decision: 2 },
    documents: { education_ai: 1, digital_innovation: 2, optimization_systems: 2 },
    safety: { optimization_systems: 2, data_decision: 2, social_research: 1 },
  };

  const outputWeight = {
    automation: { optimization_systems: 3, digital_innovation: 2 },
    dashboard: { data_decision: 3, digital_innovation: 1 },
    predictive: { data_decision: 4, optimization_systems: 1 },
    prototype: { optimization_systems: 2, digital_innovation: 3 },
    chatbot: { education_ai: 2, digital_innovation: 3 },
    diagnostic: { social_research: 3, education_ai: 1 },
    strategy: { digital_innovation: 3, social_research: 1, data_decision: 1 },
  };

  const methodWeight = {
    applied: { optimization_systems: 2, digital_innovation: 2 },
    quantitative: { data_decision: 3, optimization_systems: 1 },
    qualitative: { social_research: 3, education_ai: 1 },
    mixed: { education_ai: 1, digital_innovation: 1, social_research: 2, data_decision: 1 },
  };

  const evidenceWeight = {
    tabular: { data_decision: 3, optimization_systems: 1 },
    documents: { optimization_systems: 2, digital_innovation: 1, education_ai: 1 },
    images: { optimization_systems: 3, data_decision: 1 },
    survey: { social_research: 2, education_ai: 1, data_decision: 1 },
    none: { education_ai: 1, social_research: 1 },
  };

  applyWeights(scores, interestWeight[form.interestArea]);
  form.problemFocus.forEach((focus) => applyWeights(scores, focusWeight[focus]));
  applyWeights(scores, outputWeight[form.thesisOutput]);
  applyWeights(scores, methodWeight[form.methodologyPreference]);
  applyWeights(scores, evidenceWeight[form.evidencePreference]);

  if (form.desiredImpact === "institutional") {
    scores.data_decision += 2;
    scores.digital_innovation += 2;
  } else if (form.desiredImpact === "social") {
    scores.social_research += 2;
    scores.education_ai += 1;
  } else {
    scores.optimization_systems += 1;
    scores.education_ai += 1;
  }

  if (form.motivation === "build-solution") scores.optimization_systems += 2;
  if (form.motivation === "solve-real") scores.digital_innovation += 2;
  if (form.motivation === "graduate") scores.education_ai += 1;
  if (form.motivation === "publish") scores.social_research += 1;

  if (form.dataAnalysisConfidence >= 4) scores.data_decision += 2;
  if (form.aiToolsConfidence >= 4) scores.optimization_systems += 1;
  if (form.problemDefinitionConfidence >= 4) scores.digital_innovation += 1;
  if (form.writingConfidence >= 4) scores.education_ai += 1;
  if (form.dataAccessConfidence >= 4) scores.digital_innovation += 1;

  const keywordBoosts = inferKeywordClusterBoosts(`${student.career} ${form.unitOfAnalysis} ${form.improvementGoal} ${form.openTopic}`);
  applyWeights(scores, keywordBoosts);

  if (methodologyAverage <= 2.8) {
    scores.education_ai += 1;
    scores.social_research += 1;
  }

  return scores;
}

function scoreTopicBlueprint(blueprint, form, student, rankedClusters) {
  let score = 40;
  const topCluster = rankedClusters[0]?.key;
  const secondCluster = rankedClusters[1]?.key;
  const contextText = `${student.career} ${student.institution} ${form.unitOfAnalysis} ${form.improvementGoal} ${form.openTopic}`.toLowerCase();

  if (blueprint.cluster === topCluster) score += 18;
  if (blueprint.cluster === secondCluster) score += 8;
  if (blueprint.sectors.includes(form.interestArea)) score += 18;
  if (form.problemFocus.some((focus) => blueprint.focuses.includes(focus))) score += 16;
  if (blueprint.outputs.includes(form.thesisOutput)) score += 16;
  if (blueprint.evidence.includes(form.evidencePreference)) score += 12;
  if (blueprint.methods.includes(form.methodologyPreference)) score += 10;

  if (form.dataAccessConfidence >= 4 && form.evidencePreference !== "none") score += 6;
  if (form.aiToolsConfidence >= 4 && ["automation", "prototype", "chatbot", "predictive"].includes(form.thesisOutput)) score += 5;
  if (form.dataAnalysisConfidence >= 4 && ["tabular", "images"].includes(form.evidencePreference)) score += 5;
  if (form.writingConfidence >= 4 && ["documents", "survey"].includes(form.evidencePreference)) score += 3;

  score += getKeywordMatchBonus(blueprint, contextText);

  return { blueprint, score };
}

function materializeTopicFromBlueprint(blueprint, form, student, rawScore, index) {
  const titles = blueprint.titles || {};
  const baseTitle = titles[form.interestArea] || titles.generic || "Tema de investigacion sugerido";
  const title = createConcreteThesisTitle(baseTitle, form, student, index);
  const line = `${PROFILE_ARCHETYPES[blueprint.cluster].recommendedLine}`;
  const fitScore = Math.min(100, Math.max(74, Math.round(rawScore - index * 3)));
  return {
    id: blueprint.id,
    title,
    angle: buildThemeAngle(blueprint, form),
    methodology: blueprint.methodology,
    fitScore,
    line,
  };
}

function createConcreteThesisTitle(baseTitle, form, student, index) {
  const unit = compactPhrase(form.unitOfAnalysis, 82);
  const goal = compactPhrase(form.improvementGoal, 88);
  const suffixes = [];
  const normalizedBase = normalizeComparableText(baseTitle);
  const normalizedUnit = normalizeComparableText(unit);

  if (unit) {
    const lowerUnit = unit.toLowerCase();
    if (!hasMeaningfulOverlap(normalizedBase, normalizedUnit)) {
      suffixes.push(`en ${lowerUnit}`);
    }
  }

  if (goal && index === 0) {
    suffixes.push(`orientado a ${goal.toLowerCase()}`);
  }

  const careerHint = student.career?.toLowerCase().includes("civil") && !normalizedBase.includes("ingenieria civil")
    ? "para ingenieria civil"
    : "";

  if (careerHint) suffixes.push(careerHint);

  return [baseTitle, ...suffixes].join(" ").replace(/\s+/g, " ").trim();
}

function buildThemeAngle(blueprint, form) {
  const fragments = [blueprint.angle];
  if (form.improvementGoal.trim()) fragments.push(compactPhrase(form.improvementGoal, 72));
  return fragments.join(", ");
}

function buildNarrativeSummaryV2({ student, form, primary, secondary, methodologyAverage, methodologyLevel, strengths, topTheme }) {
  const evidenceMap = {
    tabular: "cuenta con una base de datos o registros tabulares potenciales",
    documents: "tiene mejor ajuste para trabajar con documentos, normas o reportes",
    images: "podria sostener un estudio con imagenes o evidencia visual",
    survey: "puede apoyarse en encuestas o percepciones de usuarios",
    none: "todavia necesita consolidar la fuente principal de evidencia",
  };

  const outputMap = {
    automation: "una solucion de automatizacion",
    dashboard: "un dashboard para decisiones",
    predictive: "un modelo predictivo o clasificatorio",
    prototype: "un prototipo funcional",
    chatbot: "un asistente inteligente o chatbot",
    diagnostic: "un diagnostico aplicado",
    strategy: "una propuesta de mejora o roadmap",
  };

  const strongest = strengths[0]
    ? strengths[0].replace(/\.$/, "").toLowerCase()
    : "requiere una ruta guiada para consolidar el enfoque";

  const topTopicText = topTheme
    ? `La sugerencia mas consistente es ${topTheme.title.toLowerCase()}.`
    : "";

  return `${student.fullName} muestra un perfil principal en ${primary.label.toLowerCase()} y una afinidad secundaria hacia ${secondary.label.toLowerCase()}. Sus respuestas apuntan a desarrollar ${outputMap[form.thesisOutput]} en el contexto de ${form.unitOfAnalysis.toLowerCase()}, buscando ${form.improvementGoal.toLowerCase()}. En evidencia, ${evidenceMap[form.evidencePreference]}; metodologicamente se ubica en un nivel ${methodologyLevel.toLowerCase()} (${methodologyAverage.toFixed(1)}/5). Como fortaleza inicial, ${strongest}. ${topTopicText}`;
}

function inferStrengthsV2(form) {
  const strengths = inferStrengths(form);
  if (form.dataAccessConfidence >= 4) strengths.push("Tiene acceso razonablemente viable a datos o evidencia para ejecutar la tesis.");
  if (form.methodologyPreference === "applied") strengths.push("Tiene orientacion a construir una solucion concreta y evaluable.");
  return strengths.slice(0, 4);
}

function inferRisksV2(form) {
  const risks = inferRisks(form);
  if (form.dataAccessConfidence <= 2) risks.unshift("Debe asegurar pronto la disponibilidad de datos, documentos o usuarios para no forzar un tema inviable.");
  if (form.evidencePreference === "none") risks.unshift("Conviene elegir un tema con evidencia accesible antes de comprometer un diseno metodologico.");
  return Array.from(new Set(risks)).slice(0, 4);
}

function inferKeywordClusterBoosts(text) {
  const lower = String(text || "").toLowerCase();
  const boosts = {};

  const keywordMap = [
    { words: ["obra", "bim", "metrados", "revit", "etabs", "civil", "construccion", "expediente", "norma"], weights: { optimization_systems: 2, data_decision: 1 } },
    { words: ["tesis", "estudiante", "redaccion", "academ", "aprendizaje", "docente"], weights: { education_ai: 2, social_research: 1 } },
    { words: ["dashboard", "indicador", "priorizacion", "decision", "control"], weights: { data_decision: 2, digital_innovation: 1 } },
    { words: ["chatbot", "asistente", "consulta", "documento", "pdf"], weights: { digital_innovation: 2, optimization_systems: 1 } },
    { words: ["encuesta", "adopcion", "percepcion", "etica", "usuarios"], weights: { social_research: 2, education_ai: 1 } },
    { words: ["predic", "clasific", "modelo", "riesgo", "costo", "plazo"], weights: { data_decision: 2, optimization_systems: 1 } },
  ];

  keywordMap.forEach((entry) => {
    if (entry.words.some((word) => lower.includes(word))) {
      applyWeights(boosts, entry.weights);
    }
  });

  return boosts;
}

function getKeywordMatchBonus(blueprint, text) {
  const keywordSets = {
    "aec-automation-metrados": ["metrado", "metrados", "reporte", "obra", "civil", "construccion", "automat"],
    "aec-computer-vision-epp": ["epp", "seguridad", "casco", "vision", "imagen", "video", "obra"],
    "aec-predictive-cost-time": ["costo", "plazo", "desviacion", "riesgo", "predic", "cronograma"],
    "aec-chatbot-normas": ["norma", "pdf", "consulta", "chatbot", "documento", "reglamento"],
    "thesis-copilot-formulation": ["tesis", "problema", "formulacion", "estudiante", "investigacion"],
    "thesis-writing-feedback": ["redaccion", "texto", "retroaliment", "escritura", "coherencia"],
    "dashboard-decision-support": ["dashboard", "indicador", "prioriz", "decision", "visualizacion"],
    "digital-adoption-ai": ["adopcion", "aceptacion", "percepcion", "confianza", "etica"],
    "process-improvement-ai": ["proceso", "mejora", "tiempo", "error", "automatizacion"],
    "document-analysis-ai": ["documento", "pdf", "norma", "clasificar", "extraer", "validar"],
  };

  const terms = keywordSets[blueprint.id] || [];
  return terms.reduce((bonus, term) => bonus + (text.includes(term) ? 3 : 0), 0);
}

function compactPhrase(text, maxLength) {
  const clean = String(text || "").trim().replace(/\.$/, "");
  if (!clean) return "";
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, Math.max(1, maxLength - 3)).trim()}...`;
}

function normalizeComparableText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hasMeaningfulOverlap(base, fragment) {
  if (!base || !fragment) return false;
  const baseWords = new Set(base.split(/[^a-z0-9]+/).filter((word) => word.length >= 5));
  const fragmentWords = fragment.split(/[^a-z0-9]+/).filter((word) => word.length >= 5);
  return fragmentWords.some((word) => baseWords.has(word));
}

function applyWeights(target, weights) {
  Object.entries(weights || {}).forEach(([key, value]) => {
    target[key] = (target[key] || 0) + value;
  });
}

function average(values) {
  return values.reduce((sum, current) => sum + current, 0) / values.length;
}

function normalizeScore(value, max) {
  if (!max) return 0;
  return Math.round((value / max) * 100);
}

function getMethodologyLevel(methodologyAverage, aiScore) {
  if (methodologyAverage >= 4.2 && aiScore >= 4) return "Avanzado guiado";
  if (methodologyAverage >= 3.2) return "Intermedio con buena base";
  return "En consolidación";
}

function inferStrengths(form) {
  const strengths = [];
  if (form.writingConfidence >= 4) strengths.push("Buena claridad para estructurar y redactar.");
  if (form.problemDefinitionConfidence >= 4) strengths.push("Muestra criterio para delimitar preguntas y objetivos.");
  if (form.dataAnalysisConfidence >= 4) strengths.push("Tiene afinidad para interpretar evidencia y sostener decisiones.");
  if (form.aiToolsConfidence >= 4) strengths.push("Puede incorporar IA como acelerador de exploración y refinamiento.");
  if (form.literatureConfidence >= 4) strengths.push("Tiene base para revisar antecedentes y construir marco teórico.");
  return strengths.slice(0, 3);
}

function inferRisks(form) {
  const risks = [];
  if (form.problemDefinitionConfidence <= 2) risks.push("Necesita acompañamiento para delimitar el problema con precisión.");
  if (form.dataAnalysisConfidence <= 2) risks.push("Conviene diseñar un plan metodológico que no dependa demasiado de análisis complejo.");
  if (form.writingConfidence <= 2) risks.push("Requerirá soporte más explícito en redacción académica.");
  if (form.aiToolsConfidence <= 2) risks.push("Primero debe fortalecer uso estratégico de herramientas de IA.");
  return risks.length ? risks : ["No se observan riesgos críticos, pero sí conviene mantener validaciones periódicas del enfoque."];
}

function buildNarrativeSummary({ student, form, primary, secondary, methodologicalAverage, methodologyLevel, strengths }) {
  const evidenceMap = {
    qualitative: "prefiere evidencia cualitativa y lectura contextual",
    quantitative: "se siente más cómodo trabajando con evidencia cuantitativa",
    mixed: "tiene apertura a combinar datos y comprensión contextual",
  };

  const impactMap = {
    personal: "busca resolver un problema cercano y visible en su entorno inmediato",
    institutional: "apunta a mejorar decisiones o procesos con impacto institucional",
    social: "quiere conectar la investigación con una problemática de alcance social",
  };

  const strengthText = strengths.length
    ? strengths[0].replace(/\.$/, "").toLowerCase()
    : "requiere una ruta de acompañamiento progresiva";

  return `${student.fullName} presenta un perfil orientado a ${primary.label.toLowerCase()}, con una afinidad secundaria hacia ${secondary.label.toLowerCase()}. Su respuesta sugiere que ${impactMap[form.desiredImpact]} y que ${evidenceMap[form.evidencePreference]}. En términos metodológicos se ubica en un nivel ${methodologyLevel.toLowerCase()} (${methodologicalAverage.toFixed(1)}/5), por lo que conviene plantear un proyecto viable, con foco claro y entregables iterativos. Como fortaleza principal, ${strengthText}; por eso la línea recomendada es ${primary.recommendedLine.toLowerCase()}, aterrizada a un tema concreto que pueda convertirse rápidamente en problema, objetivos y estrategia de investigación.`;
}

function renderResultPanel(record) {
  const panel = document.querySelector("#result-panel");
  if (!panel) return;
  panel.innerHTML = renderResultsState(record);
}

function renderResultsState(record) {
  if (!record) {
    return `
      <div class="panel-title">
        <div>
          <span class="mini-label">Resultado individual</span>
          <h2>Tu dashboard aparecerá aquí</h2>
          <p>
            Al terminar el brief, el estudiante verá un perfil resumido, nivel metodológico
            estimado y temas sugeridos para orientar su investigación.
          </p>
        </div>
        <div class="chip-panel">
          <strong>Salida esperada</strong>
          <div class="tag-grid">
            <span class="tag">Afinidad dominante</span>
            <span class="tag">Temas sugeridos</span>
            <span class="tag">Nivel metodológico</span>
            <span class="tag">Línea recomendada</span>
          </div>
        </div>
      </div>
    `;
  }

  const { student, profile } = record;
  return `
    <div class="panel-title">
      <div>
        <span class="mini-label">Resultado individual</span>
        <h2>Resumen de perfil para ${student.fullName.split(" ")[0]}</h2>
        <p>${profile.summary}</p>
      </div>
      <div class="chip-panel">
        <strong>Sesión</strong>
        <p class="muted">${record.session}</p>
        <div class="tag-grid">
          <span class="tag">${profile.primaryCluster}</span>
          <span class="tag">${profile.methodologyLevel}</span>
        </div>
      </div>
    </div>

    <div class="results-grid">
      <div class="profile-summary">
        <article class="profile-hero list-card">
          <div class="profile-avatar">${initials(student.fullName)}</div>
          <div>
            <h3>${student.fullName}</h3>
            <p>${student.career} · ${student.cycle} · ${student.institution}</p>
          </div>
        </article>

        <div class="result-cards">
          <article class="mini-card">
            <strong>Afinidad principal</strong>
            <p>${profile.primaryCluster}</p>
          </article>
          <article class="mini-card">
            <strong>Afinidad secundaria</strong>
            <p>${profile.secondaryCluster}</p>
          </article>
          <article class="mini-card">
            <strong>Nivel metodológico</strong>
            <p>${profile.methodologyLevel}</p>
          </article>
        </div>

        <article class="summary-card">
          <strong>Lectura del perfil</strong>
          <p>${profile.summary}</p>
        </article>

        <article class="summary-card">
          <strong>Mapa de afinidad</strong>
          <div class="bar-list">
            ${profile.scores.map((item) => `
              <div class="bar-item">
                <div class="bar-meta">
                  <span>${item.label}</span>
                  <strong>${item.percent}%</strong>
                </div>
                <div class="bar-track"><span style="width:${item.percent}%"></span></div>
              </div>
            `).join("")}
          </div>
        </article>

        <article class="summary-card">
          <strong>Fortalezas observadas</strong>
          <div class="tag-grid">
            ${profile.strengths.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
        </article>
      </div>

      <div class="recommendation-list">
        <article class="recommendation-card">
          <strong>Línea sugerida</strong>
          <p>${profile.recommendedLine}</p>
        </article>
        ${profile.themes.map((topic) => `
          <article class="topic-card">
            <strong>${topic.title}</strong>
            <p>${topic.angle}</p>
            <div class="mockup-footer">
              <span class="badge-soft">${topic.methodology}</span>
              <span class="inline-badge">Fit ${topic.fitScore}%</span>
            </div>
          </article>
        `).join("")}
        <article class="recommendation-card">
          <strong>Riesgos o alertas</strong>
          <div class="list-stack">
            ${profile.risks.map((risk) => `<p>${risk}</p>`).join("")}
          </div>
        </article>
      </div>
    </div>
  `;
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0].toUpperCase())
    .join("");
}

async function saveProfileRecord(record) {
  if (APP_CONFIG.backendUrl) {
    await sendToBackend(record);
  }

  const records = readLocalRecords();
  records.unshift(record);
  saveLocalRecords(records);
}

async function sendToBackend(record) {
  const response = await fetch(APP_CONFIG.backendUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      action: "submitProfile",
      adminKey: APP_CONFIG.adminKey,
      payload: record,
    }),
  });

  if (!response.ok) {
    throw new Error("Backend request failed");
  }
}

async function initializeAdminView() {
  root.innerHTML = `
    <section class="admin-page">
      <section class="panel admin-hero">
        <div class="admin-header-row">
          <div>
            <span class="eyebrow">Panel docente · ThesIA</span>
            <h1>Resumen maestro de <span>cohorte</span></h1>
            <p>
              Filtra estudiantes, revisa afinidades dominantes y detecta líneas de investigación
              más prometedoras para tu grupo.
            </p>
          </div>
          <div class="chip-panel">
            <strong>Acceso ligero</strong>
            <p class="muted">Usa la clave administrativa para consultar el dashboard consolidado.</p>
            <div class="code-box">${APP_CONFIG.adminKey}</div>
          </div>
        </div>
        <div class="admin-meta">
          <span class="badge-soft">Fuente: ${getPersistenceLabel()}</span>
          <span class="badge-soft">Sesión: ${APP_CONFIG.sessionLabel}</span>
        </div>
      </section>

      <section class="panel control-panel">
        <div class="panel-title">
          <div>
            <span class="mini-label">Acceso al dashboard</span>
            <h2>Activa la vista docente</h2>
            <p>Si el backend está conectado, la clave se enviará para obtener perfiles y métricas. En modo demo, leerá el almacenamiento local.</p>
          </div>
        </div>
        <div class="filter-stack">
          <div class="field">
            <label for="admin-key">Clave administrativa</label>
            <input id="admin-key" type="password" placeholder="Ingresa la clave docente" value="${APP_CONFIG.adminKey}">
          </div>
          <button class="btn btn-primary" id="unlock-admin">Ingresar al panel</button>
          <div id="admin-message" class="muted"></div>
        </div>
      </section>
    </section>
  `;

  document.querySelector("#unlock-admin").addEventListener("click", async () => {
    const key = document.querySelector("#admin-key").value.trim();
    const message = document.querySelector("#admin-message");

    if (!key) {
      message.textContent = "Ingresa la clave para continuar.";
      return;
    }

    if (key !== APP_CONFIG.adminKey) {
      message.textContent = "La clave no coincide con la configuración actual.";
      return;
    }

    message.textContent = "Cargando cohortes y perfiles...";
    state.adminAuthorized = true;
    state.profiles = await loadProfilesForAdmin(key);
    state.cohortSummary = buildCohortSummary(state.profiles);
    state.selectedProfileId = state.profiles[0]?.id || null;
    renderAdminDashboard();
  });
}

async function loadProfilesForAdmin(key) {
  if (APP_CONFIG.backendUrl) {
    const endpoint = new URL(APP_CONFIG.backendUrl);
    endpoint.searchParams.set("action", "listProfiles");
    endpoint.searchParams.set("adminKey", key);

    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("No se pudieron cargar los perfiles desde el backend.");
    }

    const data = await response.json();
    return Array.isArray(data.records) ? data.records : [];
  }

  return readLocalRecords();
}

function buildCohortSummary(records) {
  const total = records.length;
  const affinityCounter = {};
  const levelCounter = {};
  const topicCounter = {};

  records.forEach((record) => {
    affinityCounter[record.profile.primaryCluster] = (affinityCounter[record.profile.primaryCluster] || 0) + 1;
    levelCounter[record.profile.methodologyLevel] = (levelCounter[record.profile.methodologyLevel] || 0) + 1;

    record.profile.themes.slice(0, 2).forEach((topic) => {
      topicCounter[topic.title] = (topicCounter[topic.title] || 0) + 1;
    });
  });

  return {
    total,
    topAffinities: sortCounter(affinityCounter),
    topLevels: sortCounter(levelCounter),
    topTopics: sortCounter(topicCounter),
    averageMethodology:
      total > 0
        ? (
            records.reduce((sum, record) => sum + record.profile.methodologyScore, 0) / total
          ).toFixed(1)
        : "0.0",
  };
}

function sortCounter(counter) {
  return Object.entries(counter)
    .sort(([, a], [, b]) => b - a)
    .map(([label, value]) => ({ label, value }));
}

function renderAdminDashboard() {
  const summary = state.cohortSummary;
  const filteredProfiles = applyAdminFilters(state.profiles);
  const selected = filteredProfiles.find((item) => item.id === state.selectedProfileId) || filteredProfiles[0] || null;
  const affinityOptions = ["all", ...new Set(state.profiles.map((item) => item.profile.primaryCluster))];
  const methodologyOptions = ["all", ...new Set(state.profiles.map((item) => item.profile.methodologyLevel))];

  root.innerHTML = `
    <section class="admin-page">
      <section class="panel admin-hero">
        <div class="admin-header-row">
          <div>
            <span class="eyebrow">Panel docente · Cohorte activa</span>
            <h1>Lectura estratégica del <span>grupo</span></h1>
            <p>
              Visualiza afinidades dominantes, madurez metodológica y temas de investigación
              que mejor encajan con los perfiles registrados.
            </p>
          </div>
          <div class="chip-panel">
            <strong>Estado</strong>
            <p class="muted">Panel autorizado y sincronizado con ${getPersistenceLabel()}.</p>
            <div class="tag-grid">
              <span class="tag">${summary.total} estudiantes</span>
              <span class="tag">Promedio ${summary.averageMethodology}/5</span>
            </div>
          </div>
        </div>
      </section>

      <section class="metric-grid">
        <article class="metric-card">
          <small>Total de respuestas</small>
          <strong>${summary.total}</strong>
          <span>Cohorte consolidada para la sesión actual.</span>
        </article>
        <article class="metric-card">
          <small>Afinidad líder</small>
          <strong>${summary.topAffinities[0]?.label || "Sin datos"}</strong>
          <span>${summary.topAffinities[0]?.value || 0} estudiantes comparten esta tendencia.</span>
        </article>
        <article class="metric-card">
          <small>Nivel metodológico frecuente</small>
          <strong>${summary.topLevels[0]?.label || "Sin datos"}</strong>
          <span>${summary.topLevels[0]?.value || 0} perfiles en este rango.</span>
        </article>
        <article class="metric-card">
          <small>Promedio metodológico</small>
          <strong>${summary.averageMethodology}/5</strong>
          <span>Indicador global de madurez del grupo.</span>
        </article>
      </section>

      <section class="dashboard-layout">
        <aside class="panel control-panel">
          <div class="panel-title">
            <div>
              <span class="mini-label">Cohorte</span>
              <h2>Radar docente</h2>
              <p>Una lectura rápida para detectar líneas dominantes y oportunidades de acompañamiento.</p>
            </div>
          </div>
          <div class="list-stack">
            <article class="summary-card">
              <strong>Filtros activos</strong>
              <div class="filter-stack">
                <div class="field">
                  <label for="search-student">Buscar estudiante</label>
                  <input id="search-student" type="text" value="${escapeHtml(state.searchTerm)}" placeholder="Ej. Milagros">
                </div>
                <div class="field">
                  <label for="affinity-filter">Afinidad</label>
                  <select id="affinity-filter">
                    ${affinityOptions.map((item) => `<option value="${escapeHtml(item)}" ${state.affinityFilter === item ? "selected" : ""}>${item === "all" ? "Todas" : item}</option>`).join("")}
                  </select>
                </div>
                <div class="field">
                  <label for="methodology-filter">Nivel metodológico</label>
                  <select id="methodology-filter">
                    ${methodologyOptions.map((item) => `<option value="${escapeHtml(item)}" ${state.methodologyFilter === item ? "selected" : ""}>${item === "all" ? "Todos" : item}</option>`).join("")}
                  </select>
                </div>
              </div>
            </article>
            <article class="summary-card">
              <strong>Afinidades dominantes</strong>
              <div class="bar-list">
                ${summary.topAffinities.map((item) => `
                  <div class="bar-item">
                    <div class="bar-meta">
                      <span>${item.label}</span>
                      <strong>${item.value}</strong>
                    </div>
                    <div class="bar-track"><span style="width:${Math.round((item.value / Math.max(summary.total, 1)) * 100)}%"></span></div>
                  </div>
                `).join("")}
              </div>
            </article>
            <article class="summary-card">
              <strong>Niveles metodológicos</strong>
              <div class="tag-grid">
                ${summary.topLevels.map((item) => `<span class="tag">${item.label} · ${item.value}</span>`).join("")}
              </div>
            </article>
            <article class="summary-card">
              <strong>Temas más recomendados</strong>
              <div class="list-stack">
                ${summary.topTopics.slice(0, 5).map((item) => `
                  <div class="list-row">
                    <span>${item.label}</span>
                    <strong>${item.value}</strong>
                  </div>
                `).join("")}
              </div>
            </article>
          </div>
        </aside>

        <div class="panel table-panel">
          <div class="panel-title">
            <div>
              <span class="mini-label">Detalle individual</span>
              <h2>Estudiantes y perfiles</h2>
              <p>Haz clic sobre cualquier fila para abrir la ficha resumida del estudiante.</p>
            </div>
          </div>

          <div class="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Estudiante</th>
                  <th>Carrera</th>
                  <th>Afinidad</th>
                  <th>Nivel</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                ${filteredProfiles.length ? filteredProfiles.map((record) => `
                  <tr class="student-row ${record.id === state.selectedProfileId ? "active" : ""}" data-profile-id="${record.id}">
                    <td>${record.student.fullName}</td>
                    <td>${record.student.career}</td>
                    <td>${record.profile.primaryCluster}</td>
                    <td>${record.profile.methodologyLevel}</td>
                    <td>${record.profile.methodologyScore}/5</td>
                  </tr>
                `).join("") : `
                  <tr>
                    <td colspan="5"><div class="empty-state">No hay resultados para los filtros actuales.</div></td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>

          ${selected ? renderAdminDetail(selected) : ""}
        </div>
      </section>
    </section>
  `;

  document.querySelectorAll(".student-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedProfileId = row.dataset.profileId;
      renderAdminDashboard();
    });
  });

  const searchInput = document.querySelector("#search-student");
  const affinitySelect = document.querySelector("#affinity-filter");
  const methodologySelect = document.querySelector("#methodology-filter");

  searchInput?.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    renderAdminDashboard();
  });

  affinitySelect?.addEventListener("change", (event) => {
    state.affinityFilter = event.target.value;
    renderAdminDashboard();
  });

  methodologySelect?.addEventListener("change", (event) => {
    state.methodologyFilter = event.target.value;
    renderAdminDashboard();
  });
}

function applyAdminFilters(records) {
  return records.filter((record) => {
    const matchesSearch =
      !state.searchTerm ||
      `${record.student.fullName} ${record.student.career} ${record.student.institution}`
        .toLowerCase()
        .includes(state.searchTerm.toLowerCase());
    const matchesAffinity =
      state.affinityFilter === "all" || record.profile.primaryCluster === state.affinityFilter;
    const matchesMethodology =
      state.methodologyFilter === "all" || record.profile.methodologyLevel === state.methodologyFilter;

    return matchesSearch && matchesAffinity && matchesMethodology;
  });
}

function renderAdminDetail(record) {
  return `
    <section class="detail-layout">
      <article class="detail-card">
        <strong>${record.student.fullName}</strong>
        <p>${record.student.career} · ${record.student.cycle}</p>
        <p>${record.student.institution}</p>
        <div class="tag-grid" style="margin-top:0.8rem;">
          <span class="tag">${record.profile.primaryCluster}</span>
          <span class="tag">${record.profile.secondaryCluster}</span>
        </div>
      </article>
      <article class="detail-card">
        <strong>Lectura rápida</strong>
        <p>${record.profile.summary}</p>
      </article>
      <article class="detail-card">
        <strong>Fortalezas</strong>
        <div class="list-stack">
          ${record.profile.strengths.map((item) => `<p>${item}</p>`).join("")}
        </div>
      </article>
      <article class="detail-card">
        <strong>Alertas o soporte sugerido</strong>
        <div class="list-stack">
          ${record.profile.risks.map((item) => `<p>${item}</p>`).join("")}
        </div>
      </article>
      <article class="detail-card full">
        <strong>Temas sugeridos</strong>
        <div class="recommendation-list">
          ${record.profile.themes.map((topic) => `
            <article class="topic-card">
              <strong>${topic.title}</strong>
              <p>${topic.angle}</p>
              <div class="mockup-footer">
                <span class="badge-soft">${topic.methodology}</span>
                <span class="inline-badge">Fit ${topic.fitScore}%</span>
              </div>
            </article>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function getPersistenceLabel() {
  return APP_CONFIG.backendUrl ? "Google Sheets / Apps Script" : "demo local";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
