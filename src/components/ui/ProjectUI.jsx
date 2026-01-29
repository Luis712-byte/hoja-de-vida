import React from "react";
import {
  SiReact,
  SiSass,
  SiTypescript,
  SiExpo,
  SiNodedotjs,
  SiPostgresql,
  SiFlutter,
  SiFirebase,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiTailwindcss,
  SiVuedotjs,
  SiGithub,
  SiPhp,
  SiAmazonaws,
  SiShopify,
} from "react-icons/si";
import { FaGithub, FaLink, FaGlobe, FaMicrosoft, FaCode } from "react-icons/fa";

const techIcons = {
  React: <SiReact />,
  Sass: <SiSass />,
  Typescript: <SiTypescript />,
  Expo: <SiExpo />,
  "Node Js": <SiNodedotjs />,
  Flutter: <SiFlutter />,
  PostgreSQL: <SiPostgresql />,
  Firebase: <SiFirebase />,
  CSS: <SiCss3 />,
  HTML: <SiHtml5 />,
  JavaScript: <SiJavascript />,
  SQL: <SiMysql />,
  SQLite: <SiSqlite />,
  MongoDB: <SiMongodb />,
  Tailwind: <SiTailwindcss />,
  Vue: <SiVuedotjs />,
  GitHub: <SiGithub />,
  "React Native": <SiReact />,
  Azure: <FaMicrosoft />,
  "C#": <FaCode />,
  PHP: <SiPhp />,
  AWS: <SiAmazonaws />,
  Shopify: <SiShopify />,
  Liquid: <FaCode />,
  NestJs: <SiNodedotjs />,
};

const ProjectArticle = ({
  id,
  title,
  subtitle,
  description,
  techStack,
  liveSite,
  github,
  Link,
  thumbnail,
  language,
  liveLink,
  linkText,
}) => {
  const isLiveSiteVisible1 = id > 2;
  const isLiveSiteVisible2 = id <= 1;

  return (
    <article className="project group h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-300">
      {/* Imagen */}
      <div className="relative overflow-hidden bg-gray-200 h-48">
        <a href={liveSite || Link} target="_blank" rel="noreferrer" className="block h-full">
          <img
            src={thumbnail}
            alt={title[language]}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-6">
        {/* Número y título */}
        <div className="mb-4">
          <span className="text-sm font-bold text-gray-400">0{id}</span>
          <h2 className="text-xl font-bold text-gray-900 mt-2 line-clamp-2">{title[language]}</h2>
          <p className="text-sm text-gray-500 mt-1">{subtitle[language]}</p>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{description[language]}</p>

        {/* Tech Stack */}
        <div className="mb-6">
          <ul className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm text-gray-600">{techIcons[tech]}</span>
                <span className="hidden sm:inline">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botones */}
        <ul className="flex flex-col gap-2 mt-auto">
          {isLiveSiteVisible2 && Link && (
            <li>
              <a
                href={Link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-50 border border-blue-300 text-blue-700 hover:bg-blue-100 px-3 py-2 rounded-lg font-medium text-sm shadow-sm transition-all duration-200"
              >
                <FaLink className="text-base" />
                {linkText} →
              </a>
            </li>
          )}
          {github && (
            <li>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg font-medium text-sm shadow-sm transition-all duration-200"
              >
                <FaGithub className="text-base" />
                GitHub →
              </a>
            </li>
          )}
          {isLiveSiteVisible1 && liveSite && (
            <li>
              <a
                href={liveSite}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-50 border border-green-300 text-green-700 hover:bg-green-100 px-3 py-2 rounded-lg font-medium text-sm shadow-sm transition-all duration-200"
              >
                <FaGlobe className="text-base" />
                {liveLink} →
              </a>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
};

const ProjectUI = ({ projectData, language, title, description, liveLink, linkText }) => {
  return (
    <section className="px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projectData.map((project) => (
            <ProjectArticle
              key={project.id}
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              techStack={project.techStack}
              liveSite={project.liveSite}
              github={project.github}
              Link={project.Link}
              thumbnail={project.thumbnail}
              language={language}
              liveLink={liveLink}
              linkText={linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectUI;
