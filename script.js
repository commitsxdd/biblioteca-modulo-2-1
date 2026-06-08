const SITE_CONFIG = {
  githubUsername: "commitsxdd",
};

const resources = [
  {
    order: 1,
    title: "Tema 1",
    filename: "temas 1.pptx",
    type: "presentation",
    topic: "Tema 1",
    category: "Fundamentos",
    description: "Presentación introductoria correspondiente al primer tema del módulo.",
    driveUrl:
      "https://docs.google.com/presentation/d/114gCG3d_YgNzSXhHhrS-ajLGy5QW03uE/edit?usp=drive_link",
  },
  {
    order: 2,
    title: "Tema 2 · Presentación",
    filename: "tema 2 p.pptx",
    type: "presentation",
    topic: "Tema 2",
    category: "Fundamentos",
    description: "Material de exposición y síntesis visual preparado para el tema 2.",
    driveUrl:
      "https://docs.google.com/presentation/d/1gFsLejXxB0_BuepUsYrqQSX1mc3GyBc0/edit?usp=drive_link",
  },
  {
    order: 3,
    title: "Tema 2 · Documento",
    filename: "tema 2 w.docx",
    type: "document",
    topic: "Tema 2",
    category: "Fundamentos",
    description: "Documento de investigación y desarrollo escrito del tema 2.",
    driveUrl:
      "https://docs.google.com/document/d/1ZaNIhk-9GIXvuXHe36-DCirJiz5ovtcF/edit?usp=drive_link",
  },
  {
    order: 4,
    title: "Tema 3 · Documento",
    filename: "tema 3 w.docx",
    type: "document",
    topic: "Tema 3",
    category: "Fundamentos",
    description: "Contenido escrito, conceptos principales y actividades del tema 3.",
    driveUrl:
      "https://docs.google.com/document/d/1srBLzNiXynzf76_PplS4QPqmwQdx_e_K/edit?usp=drive_link",
  },
  {
    order: 5,
    title: "Tema 3 · Presentación",
    filename: "tema 3 w.pptx",
    type: "presentation",
    topic: "Tema 3",
    category: "Fundamentos",
    description: "Presentación de apoyo con los puntos principales del tema 3.",
    driveUrl:
      "https://docs.google.com/presentation/d/17KI4D1yDRQ0mqJGakZR5MeywR4kGFPM0/edit?usp=drive_link",
  },
  {
    order: 6,
    title: "Tema 4 · Presentación",
    filename: "tema 4 p.pptx",
    type: "presentation",
    topic: "Tema 4",
    category: "Fundamentos",
    description: "Diapositivas elaboradas para presentar el contenido del tema 4.",
    driveUrl:
      "https://docs.google.com/presentation/d/1RJVFEMs06yfNs6HSwUleDcWpVi1dqpnF/edit?usp=drive_link",
  },
  {
    order: 7,
    title: "Tema 4 · Documento",
    filename: "tema 4 w.docx",
    type: "document",
    topic: "Tema 4",
    category: "Fundamentos",
    description: "Desarrollo escrito y evidencias de aprendizaje correspondientes al tema 4.",
    driveUrl:
      "https://docs.google.com/document/d/1qXnwp0NeREzfxUCSwwrf1Obr69_4iAYX/edit?usp=drive_link",
  },
  {
    order: 8,
    title: "Tema 5 · Presentación",
    filename: "tema 5 p.pptx",
    type: "presentation",
    topic: "Tema 5",
    category: "Fundamentos",
    description: "Recurso visual para exponer los conceptos y resultados del tema 5.",
    driveUrl:
      "https://docs.google.com/presentation/d/18YYKQXL-CZiUy3s_wCbWhnmJXLCNV3Ag/edit?usp=drive_link",
  },
  {
    order: 9,
    title: "Tema 5 · Documento",
    filename: "tema 5 w.docx",
    type: "document",
    topic: "Tema 5",
    category: "Fundamentos",
    description: "Documento completo con la investigación realizada para el tema 5.",
    driveUrl:
      "https://docs.google.com/document/d/1ZRF8Z7diJoH6Rzxsh055BGtQ_OrAe_Eu/edit?usp=drive_link",
  },
  {
    order: 10,
    title: "Tema 6 · Documento",
    filename: "tema 6.docx",
    type: "document",
    topic: "Tema 6",
    category: "Fundamentos",
    description: "Desarrollo documental de los contenidos estudiados en el tema 6.",
    driveUrl:
      "https://docs.google.com/document/d/1tXlfZGVO37xde3v1YdW9WItn3zRPq5M3/edit?usp=drive_link",
  },
  {
    order: 11,
    title: "Tema 6 · Presentación",
    filename: "tema 6.pptx",
    type: "presentation",
    topic: "Tema 6",
    category: "Fundamentos",
    description: "Presentación de síntesis y apoyo para los contenidos del tema 6.",
    driveUrl:
      "https://docs.google.com/presentation/d/1h7mLid1STdHya-tKrxEsKpIL3-9cI57s/edit?usp=drive_link",
  },
  {
    order: 12,
    title: "Modelado de Casos de Uso",
    filename: "Tema_07_Modelado_Casos_Uso_Completo.docx",
    type: "document",
    topic: "Tema 7",
    category: "UML",
    uml: true,
    description: "Documento completo sobre actores, relaciones y modelado de casos de uso.",
    driveUrl:
      "https://docs.google.com/document/d/1HqZYtqya13yv8QU8mOn7WKJ2usgM0SuK/edit?usp=drive_link",
  },
  {
    order: 13,
    title: "Diagrama de Clases",
    filename: "Tema_08_Diagrama_Clases_Completo.docx",
    type: "document",
    topic: "Tema 8",
    category: "UML",
    uml: true,
    description: "Documento completo sobre clases, atributos, métodos y relaciones UML.",
    driveUrl:
      "https://docs.google.com/document/d/1OuoMxYFQG-o0bY4uRxQ28qSXJE9kHot7/edit?usp=drive_link",
  },
  {
    order: 14,
    title: "Diagrama de Secuencia",
    filename: "Tema_09_Diagrama_Secuencia_Completo.docx",
    type: "document",
    topic: "Tema 9",
    category: "UML",
    uml: true,
    description: "Documento sobre la interacción temporal entre objetos y participantes.",
    driveUrl:
      "https://docs.google.com/document/d/1G3OM2ncApbr2hqbiPcFWQygCI100NRqg/edit?usp=drive_link",
  },
  {
    order: 15,
    title: "Diagrama de Actividades",
    filename: "Tema_10_Diagrama_Actividades_Completo.docx",
    type: "document",
    topic: "Tema 10",
    category: "UML",
    uml: true,
    description: "Documento completo sobre flujos, decisiones y procesos de actividades.",
    driveUrl:
      "https://docs.google.com/document/d/1uRDfDNEdjB9rk1NNPZoMrFJt0zU3pcSD/edit?usp=drive_link",
  },
  {
    order: 16,
    title: "Diagrama de Estados",
    filename: "Tema_11_Diagrama_Estados_Completo.docx",
    type: "document",
    topic: "Tema 11",
    category: "UML",
    uml: true,
    description: "Documento sobre estados, eventos, transiciones y comportamiento de objetos.",
    driveUrl:
      "https://docs.google.com/document/d/10HJBB2KBFxLeUNWf14LY8GWPq-3IvOjK/edit?usp=drive_link",
  },
  {
    order: 17,
    title: "Diagrama de Actividades · Presentación",
    filename: "Diagrama de Actividades.pptx",
    type: "presentation",
    topic: "UML",
    category: "UML",
    uml: true,
    description: "Presentación visual dedicada a la construcción de diagramas de actividades.",
    driveUrl:
      "https://docs.google.com/presentation/d/10GBWadF9uO6JrNW21IHME7wIKH8xdZMz/edit?usp=drive_link",
  },
  {
    order: 18,
    title: "Diagrama de Clases · Presentación",
    filename: "Diagrama de Clases.pptx",
    type: "presentation",
    topic: "UML",
    category: "UML",
    uml: true,
    description: "Presentación visual sobre la estructura y relaciones de un diagrama de clases.",
    driveUrl:
      "https://docs.google.com/presentation/d/1E5NIMGmsQZPpRs1YljEtdFcMzKvGuQiD/edit?usp=drive_link",
  },
  {
    order: 19,
    title: "Diagrama de Estados · Presentación",
    filename: "Diagrama de Estados.pptx",
    type: "presentation",
    topic: "UML",
    category: "UML",
    uml: true,
    description: "Presentación con los conceptos y elementos de los diagramas de estados.",
    driveUrl:
      "https://docs.google.com/presentation/d/1UnPG9M0LN5rWmIfkPb0Opmdsewy8K55X/edit?usp=drive_link",
  },
  {
    order: 20,
    title: "Diagrama de Secuencia · Presentación",
    filename: "Diagrama de Secuencia.pptx",
    type: "presentation",
    topic: "UML",
    category: "UML",
    uml: true,
    description: "Presentación de los componentes y mensajes de un diagrama de secuencia.",
    driveUrl:
      "https://docs.google.com/presentation/d/1OtMZ9jL4ZJNP5ABcD_0oYHAXYTNuKqR-/edit?usp=drive_link",
  },
  {
    order: 21,
    title: "Modelado de Casos de Uso · Presentación",
    filename: "Modelado de Casos de Uso.pptx",
    type: "presentation",
    topic: "UML",
    category: "UML",
    uml: true,
    description: "Presentación sobre actores, casos, límites y relaciones del sistema.",
    driveUrl:
      "https://docs.google.com/presentation/d/1bPOS_8x58pGYIqAt1wogTmttjVlkbgRC/edit?usp=drive_link",
  },
  {
    order: 22,
    title: "Autoevaluación",
    filename: "autoevaluacion.docx",
    type: "document",
    topic: "Evaluación",
    category: "Evaluación",
    description: "Documento de autoevaluación y reflexión sobre el aprendizaje del módulo.",
    driveUrl:
      "https://docs.google.com/document/d/1y81lFh4TrsfBHCS1xVFgLLI80CjSFxtQ/edit?usp=drive_link",
  },
];

const iconPaths = {
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  library:
    '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  presentation:
    '<path d="M3 4h18"/><path d="M5 4v12h14V4"/><path d="m8 20 4-4 4 4"/><path d="M12 16v5"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/>',
  diagram:
    '<rect x="8" y="2" width="8" height="5" rx="1"/><rect x="2" y="17" width="8" height="5" rx="1"/><rect x="14" y="17" width="8" height="5" rx="1"/><path d="M12 7v5M6 17v-2h12v2"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5-.1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/>',
  "arrow-up-right": '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  moon: '<path d="M20 15.3A9 9 0 1 1 8.7 4 7 7 0 0 0 20 15.3Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
  "arrow-down": '<path d="M12 5v14M19 12l-7 7-7-7"/>',
  sparkles: '<path d="m12 3-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3Z"/><path d="m19 13-.7 2.3L16 16l2.3.7L19 19l.7-2.3L22 16l-2.3-.7L19 13Z"/><path d="m5 14-.7 2.3L2 17l2.3.7L5 20l.7-2.3L8 17l-2.3-.7L5 14Z"/>',
  cloud: '<path d="M17.5 19H7a5 5 0 1 1 1.9-9.6A7 7 0 0 1 22 13a4 4 0 0 1-4.5 6Z"/>',
  code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
  files: '<path d="M15 2H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M9 22h9a2 2 0 0 0 2-2V7"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  sort: '<path d="M3 6h18M6 12h12M10 18h4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
  external: '<path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  "search-x": '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8.5 8.5l5 5M13.5 8.5l-5 5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};

const state = {
  filter: "all",
  search: "",
  sort: "module",
  view: "grid",
};

const resourceGrid = document.querySelector("#resourceGrid");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const gridViewButton = document.querySelector("#gridViewButton");
const listViewButton = document.querySelector("#listViewButton");

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || ""}</svg>`;
}

function initializeIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
}

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getDriveId(url) {
  return url.match(/\/d\/([^/]+)/)?.[1] || "";
}

function getDownloadUrl(resource) {
  const folder = resource.type === "presentation" ? "presentation" : "document";
  const format = resource.type === "presentation" ? "pptx" : "docx";
  return `https://docs.google.com/${folder}/d/${getDriveId(resource.driveUrl)}/export?format=${format}`;
}

function getVisibleResources() {
  const query = normalize(state.search.trim());
  const filtered = resources.filter((resource) => {
    const matchesFilter =
      state.filter === "all" ||
      resource.type === state.filter ||
      (state.filter === "uml" && resource.uml);
    const searchable = normalize(
      `${resource.title} ${resource.filename} ${resource.topic} ${resource.category} ${resource.description}`,
    );
    return matchesFilter && (!query || searchable.includes(query));
  });

  return filtered.sort((a, b) => {
    if (state.sort === "az") return a.title.localeCompare(b.title, "es");
    if (state.sort === "za") return b.title.localeCompare(a.title, "es");
    if (state.sort === "type") {
      return a.type.localeCompare(b.type) || a.order - b.order;
    }
    return a.order - b.order;
  });
}

function createCard(resource) {
  const isPresentation = resource.type === "presentation";
  const extension = isPresentation ? "PPTX" : "DOCX";
  const typeLabel = isPresentation ? "Presentación" : "Documento";
  const fileIcon = isPresentation ? "presentation" : "file";
  const colors = isPresentation
    ? "--card-color: var(--orange); --card-soft: var(--orange-soft);"
    : "--card-color: var(--blue); --card-soft: var(--blue-soft);";

  return `
    <article class="resource-card" style="${colors}">
      <div class="card-top">
        <span class="file-icon">${icon(fileIcon)}</span>
        <span class="file-extension">${extension}</span>
      </div>
      <div>
        <h3>${resource.title}</h3>
        <p>${resource.description}</p>
      </div>
      <div class="card-meta">
        <span>${resource.topic}</span>
        <i class="meta-dot"></i>
        <span>${resource.category}</span>
        <i class="meta-dot"></i>
        <span>${typeLabel}</span>
      </div>
      <div class="card-actions">
        <a class="open-link" href="${resource.driveUrl}" target="_blank" rel="noreferrer">
          Abrir en Drive ${icon("external")}
        </a>
        <a
          class="download-link"
          href="${getDownloadUrl(resource)}"
          target="_blank"
          rel="noreferrer"
          title="Descargar ${resource.filename}"
          aria-label="Descargar ${resource.filename}"
        >
          ${icon("download")}
        </a>
      </div>
    </article>
  `;
}

function renderResources() {
  const visibleResources = getVisibleResources();
  resourceGrid.innerHTML = visibleResources.map(createCard).join("");
  resultCount.textContent = visibleResources.length;
  emptyState.hidden = visibleResources.length > 0;
  resourceGrid.hidden = visibleResources.length === 0;
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderResources();
}

function setupGithubLinks() {
  const isConfigured =
    SITE_CONFIG.githubUsername &&
    SITE_CONFIG.githubUsername !== "TU_USUARIO_GITHUB";
  const githubUrl = isConfigured
    ? `https://github.com/${SITE_CONFIG.githubUsername}`
    : "https://github.com/";

  document.querySelectorAll(".github-profile-link").forEach((link) => {
    link.href = githubUrl;
    if (!isConfigured) {
      link.title = "Configura tu usuario de GitHub en script.js";
    }
  });
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

document.querySelectorAll(".filter-shortcut").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filterTarget);
    document.querySelector("#biblioteca").scrollIntoView({ behavior: "smooth" });
  });
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderResources();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderResources();
});

document.querySelector("#clearSearchButton").addEventListener("click", () => {
  searchInput.value = "";
  state.search = "";
  setFilter("all");
  searchInput.focus();
});

gridViewButton.addEventListener("click", () => {
  state.view = "grid";
  resourceGrid.classList.remove("list-view");
  gridViewButton.classList.add("active");
  listViewButton.classList.remove("active");
});

listViewButton.addEventListener("click", () => {
  state.view = "list";
  resourceGrid.classList.add("list-view");
  listViewButton.classList.add("active");
  gridViewButton.classList.remove("active");
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

const sidebar = document.querySelector("#sidebar");
const mobileOverlay = document.querySelector("#mobileOverlay");

function closeMenu() {
  sidebar.classList.remove("open");
  mobileOverlay.classList.remove("open");
}

document.querySelector("#menuButton").addEventListener("click", () => {
  sidebar.classList.toggle("open");
  mobileOverlay.classList.toggle("open");
});

mobileOverlay.addEventListener("click", closeMenu);
document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("bibliodev-theme");

if (savedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
}

function updateThemeIcon() {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.innerHTML = icon(isDark ? "sun" : "moon");
  themeToggle.setAttribute("aria-label", isDark ? "Activar tema claro" : "Activar tema oscuro");
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  if (isDark) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("bibliodev-theme", "light");
  } else {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("bibliodev-theme", "dark");
  }
  updateThemeIcon();
});

window.addEventListener(
  "scroll",
  () => {
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
    document.querySelector(".page-progress").style.width = `${progress}%`;
  },
  { passive: true },
);

document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#totalStat").textContent = resources.length;
document.querySelector("#presentationStat").textContent = resources.filter(
  (resource) => resource.type === "presentation",
).length;
document.querySelector("#documentStat").textContent = resources.filter(
  (resource) => resource.type === "document",
).length;
document.querySelector("#umlStat").textContent = resources.filter(
  (resource) => resource.uml,
).length;

initializeIcons();
setupGithubLinks();
updateThemeIcon();
renderResources();
