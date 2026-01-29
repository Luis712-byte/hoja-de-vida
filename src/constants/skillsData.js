export const getSkillsCategories = (language) => [
    {
        id: "frontend-design",
        title: language === "es" ? "Frontend - Diseño" : "Frontend - Design",
        note: language === "es" ? "Interfaz y estilos" : "Interface & styles",
        skills: [
            { name: "HTML", icon: "html", descEs: "Estructura páginas web.", descEn: "Structure web pages." },
            { name: "CSS", icon: "css", descEs: "Estiliza y diseña páginas web.", descEn: "Style and design web pages." },
            { name: "SASS", icon: "sass", descEs: "CSS eficiente y avanzado.", descEn: "Efficient and advanced CSS." },
            { name: "Figma", icon: "figma", descEs: "Diseño colaborativo en la nube.", descEn: "Collaborative design in the cloud." },
        ],
    },
    {
        id: "frontend-functional",
        title: language === "es" ? "Frontend - Funcional" : "Frontend - Functional",
        note: language === "es" ? "Lógica e interactividad" : "Logic & interactivity",
        skills: [
            { name: "JavaScript", icon: "js", descEs: "Agrega interactividad web.", descEn: "Adds web interactivity." },
            { name: "TypeScript", icon: "ts", descEs: "JavaScript con tipos.", descEn: "JavaScript with types." },
            { name: "React", icon: "react", descEs: "Componentes y UI reactivas.", descEn: "Component-based reactive UI." },
            { name: "Angular", icon: "angular", descEs: "Framework robusto de SPA.", descEn: "Robust SPA framework." },
        ],
    },
    {
        id: "mobile",
        title: language === "es" ? "Móvil" : "Mobile",
        note: language === "es" ? "Apps multiplataforma" : "Cross-platform apps",
        skills: [
            { name: "React Native", icon: "react", descEs: "Apps móviles con React.", descEn: "Mobile apps with React." },
            { name: "Flutter", icon: "flutter", descEs: "Apps multiplataforma.", descEn: "Multiplatform apps." },
        ],
    },
    {
        id: "backend",
        title: language === "es" ? "Backend" : "Backend",
        note: language === "es" ? "APIs y lógica" : "APIs & logic",
        skills: [
            { name: "Node.js", icon: "nodejs", descEs: "JavaScript en servidores.", descEn: "JavaScript on servers." },
            { name: "PHP", icon: "php", descEs: "Desarrolla aplicaciones dinámicas.", descEn: "Develops dynamic applications." },
            { name: "Java", icon: "java", descEs: "Lenguaje robusto y escalable.", descEn: "Robust and scalable language." },
            { name: "C#", icon: "cs", descEs: "Desarrollo backend moderno.", descEn: "Modern backend development." },
            { name: ".NET", icon: "dotnet", descEs: "Plataforma Microsoft multiplataforma.", descEn: "Microsoft cross-platform." },
            { name: "Laravel", icon: "laravel", descEs: "Framework PHP elegante.", descEn: "Elegant PHP framework." },
            { name: "Ruby on Rails", icon: "rails", descEs: "Framework web rápido.", descEn: "Rapid web framework." },
            { name: "Golang", icon: "go", descEs: "Lenguaje concurrente eficiente.", descEn: "Efficient concurrent language." },
        ],
    },
    {
        id: "databases",
        title: language === "es" ? "Bases de datos" : "Databases",
        note: language === "es" ? "Almacenamiento y consultas" : "Storage & queries",
        skills: [
            { name: "PostgreSQL", icon: "postgres", descEs: "Base de datos avanzada.", descEn: "Advanced database." },
            { name: "MySQL", icon: "mysql", descEs: "Gestión de datos relacionales.", descEn: "Relational data management." },
            { name: "Firebase", icon: "firebase", descEs: "Realtime & auth en apps.", descEn: "Realtime & auth for apps." }
        ],
    },
    {
        id: "tools",
        title: language === "es" ? "Herramientas" : "Tools",
        note: language === "es" ? "Flujo de trabajo" : "Workflow",
        skills: [
            { name: "Git", icon: "git", descEs: "Control de versiones.", descEn: "Version control." },
            { name: "GitHub", icon: "github", descEs: "Colabora en proyectos de código.", descEn: "Collaborate on code projects." },
            { name: "Docker", icon: "docker", descEs: "Containerización de aplicaciones.", descEn: "Application containerization." },
            { name: "GitLab", icon: "gitlab", descEs: "CI/CD y repositorios.", descEn: "CI/CD and repositories." },
        ],
    },
];

export const getSkillsTexts = (language) => ({
    title: language === "es" ? "Habilidades Técnicas" : "Technical Skills",
    description:
        language === "es"
            ? "Tecnologías agrupadas por categorías para que puedas identificar rápidamente áreas de experiencia."
            : "Technologies grouped by categories so you can quickly identify areas of expertise.",
    ariaLabel: language === "es" ? "Habilidades Técnicas" : "Technical Skills",
});
