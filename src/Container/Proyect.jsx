import React, { useContext } from "react";
import { useLanguage } from "../Context/LanguageContext";
import foto1 from "../Assets/Pivvot_reducida.jpg";
import foto2 from "../Assets/flutter.png";
import foto3 from "../Assets/Flotu.png";
import foto4 from "../Assets/Ciudad-Conecta.png";
import foto5 from "../Assets/Willard-Portal.png";
import foto6 from "../Assets/Holafomo.png";
import foto7 from "../Assets/Quick-Grow.png";
import foto8 from "../Assets/AMB.png";

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
  SiShopify ,
} from "react-icons/si";

import { FaGithub, FaLink, FaGlobe, FaMicrosoft, FaCode } from 'react-icons/fa';

const techIcons = {
  "React": <SiReact />,
  "Sass": <SiSass />,
  "Typescript": <SiTypescript />,
  "Expo": <SiExpo />,
  "Node Js": <SiNodedotjs />,
  "Flutter": <SiFlutter />,
  "PostgreSQL": <SiPostgresql />,
  "Firebase": <SiFirebase />,
  "CSS": <SiCss3 />,
  "HTML": <SiHtml5 />,
  "JavaScript": <SiJavascript />,
  "SQL": <SiMysql />,
  "SQLite": <SiSqlite />,
  "MongoDB": <SiMongodb />,
  "Tailwind": <SiTailwindcss />,
  "Vue": <SiVuedotjs />,
  "GitHub": <SiGithub />,
  "React Native": <SiReact />,
  "Azure": <FaMicrosoft />,
  "C#": <FaCode />,
  "PHP": <SiPhp />,
  "AWS": <SiAmazonaws />,
  "Shopify": <SiShopify />,
  "Liquid": <FaCode />,
  "NestJs": <SiNodedotjs />,
};


const projectData = [
  {
    id: 1,
    title: {
      es: "PIVVOT MOBILITY",
      en: "PIVVOT MOBILITY",
    },
    subtitle: {
      es: "Proyecto de aplicación de scooter",
      en: "Scooter app project",
    },
    thumbnail: foto1,
    description: {
      es: "PIVVOT MOBILITY es una aplicación diseñada para facilitar la movilidad urbana mediante el alquiler de scooters eléctricos. Permite a los usuarios localizar, desbloquear y gestionar viajes de manera eficiente.",
      en: "PIVVOT MOBILITY is an app designed to facilitate urban mobility through electric scooter rentals. It allows users to locate, unlock, and manage trips efficiently.",
    },
    techStack: ["React Native", "Sass", "Typescript", "Expo", "Node Js"],
    Link: "https://play.google.com/store/apps/details?id=com.pivvot.scooter&hl=es_CO",
  },
  {
    id: 2,
    title: {
      es: "Go Service",
      en: "Go Service",
    },
    subtitle: {
      es: "Biblioteca digital",
      en: "Digital library",
    },
    thumbnail: foto2,
    description: {
      es: "Go Service es una biblioteca digital que permite a los usuarios buscar, reservar y gestionar libros y catálogos de manera sencilla y eficiente. Ideal para estudiantes y entusiastas de la lectura.",
      en: "Go Service is a digital library that allows users to search, reserve, and manage books and catalogs simply and efficiently. Ideal for students and reading enthusiasts.",
    },
    techStack: ["Flutter", "PostgreSQL"],
    github: "https://github.com/Luis712-byte/Proyecto-Flutter",
  },
  {
    id: 3,
    title: {
      es: "Flotu",
      en: "Flotu",
    },
    subtitle: {
      es: "Micromovilidad Sostenible",
      en: "Sustainable Micromobility",
    },
    thumbnail: foto3,
    description: {
      es: "Flotu es una plataforma de micromovilidad que permite alquilar scooters, bicicletas y motos eléctricas en Barranquilla. Su objetivo es ofrecer una alternativa de transporte ecológica y eficiente, facilitando la movilidad urbana sin complicaciones.",
      en: "Flotu is a micromobility platform that allows users to rent electric scooters, bicycles, and motorcycles in Barranquilla. Its goal is to provide an eco-friendly and efficient transportation alternative, facilitating urban mobility without hassle.",
    },
    techStack: ["React", "Node Js", "SQL", "Tailwind"],
    liveSite: "https://www.flotu.com/",
  },
  {
    id: 4,
    title: {
      es: "Ciudad Conecta",
      en: "Ciudad Conecta",
    },
    subtitle: {
      es: "Una plataforma de conexión ciudadana",
      en: "A platform for citizen connection",
    },
    thumbnail: foto4,
    description: {
      es: "Ciudad Conecta es una plataforma interactiva que facilita la comunicación y la participación ciudadana a través de herramientas digitales innovadoras, construida con C# y desplegada en Azure.",
      en: "Ciudad Conecta is an interactive platform that facilitates communication and citizen participation through innovative digital tools, built with C# and deployed on Azure.",
    },
    techStack: ["C#", "Azure", "SQL", "JavaScript"],
    liveSite: "https://ciudad-conecta-h6g8dqf7ehbve0dy.canadacentral-01.azurewebsites.net/",
    github: "https://github.com/Luis712-byte/Ciudad-Conecta",
  },
  {
    id: 5,
    title: {
      es: "Willard Portal",
      en: "Willard Portal",
    },
    subtitle: {
      es: "Plataforma de gestión de clientes y servicios",
      en: "Customer and service management platform",
    },
    thumbnail: foto5,
    description: {
      es: "Willard Portal es una plataforma diseñada para la gestión integral de clientes, garantías y servicios en Baterías Willard, construida con PHP, SQL y JavaScript.",
      en: "Willard Portal is a platform designed for the comprehensive management of customers, warranties, and services at Baterías Willard, built with PHP, SQL, and JavaScript.",
    },
    techStack: ["PHP", "SQL", "JavaScript","Tailwind"],
    liveSite: "https://will360.bateriaswillard.com/",
  },
  {
    id: 6,
    title: {
      es: "Holafomo",
      en: "Holafomo",
    },
    subtitle: {
      es: "Plataforma de marketing de influencia en tiempo real",
      en: "Real-time influence marketing platform",
    },
    thumbnail: foto6,
    description: {
      es: "Holafomo es una plataforma de marketing en tiempo real que utiliza notificaciones inteligentes para aumentar la conversión de sitios web, construida con React, SQL y desplegada en AWS.",
      en: "Holafomo is a real-time marketing platform that uses smart notifications to boost website conversion, built with React, SQL, and deployed on AWS.",
    },
    techStack: ["React", "SQL", "AWS", "Tailwind","Node Js"],
    liveSite: "https://holafomo.com/es",
  },
  {
    id: 7,
    title: {
      es: "Quick Grow",
      en: "Quick Grow",
    },
    subtitle: {
      es: "Cuidado Capilar y Belleza",
      en: "Hair Care & Beauty",
    },
    thumbnail: foto7,
    description: {
      es: "Quick Grow ofrece productos clínicamente probados para estimular el crecimiento del cabello, fortalecer uñas y mejorar la piel, combinando suplementos, colágeno vegano y tratamientos capilares.",
      en: "Quick Grow provides clinically tested products to boost hair growth, strengthen nails, and enhance skin health, combining supplements, vegan collagen, and hair treatments.",
    },
    techStack: ["Shopify", "Liquid", "JavaScript", "React", "Tailwind", "AWS"],
    liveSite: "https://quickgrow.co/",
  },
  {
    id: 8,
    title: {
      es: "AMB",
      en: "AMB",
    },
    subtitle: {
      es: "Servicios Públicos",
      en: "Public Services",
    },
    thumbnail: foto8,
    description: {
      es: "AMB gestiona el suministro de agua potable en Bucaramanga y su área metropolitana, promoviendo el cuidado ambiental y el acceso sostenible al recurso hídrico.",
      en: "AMB manages the potable water supply in Bucaramanga and its metropolitan area, promoting environmental care and sustainable access to water.",
    },
    techStack: ["PHP", "Tailwind", "NestJs", "AWS"],
    liveSite: "https://www.amb.com.co/amb/",
  }
];

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
  isReversed,
}) => {
  const { language } = useLanguage();
  const isLiveSiteVisible1 = id > 2;
  const isLiveSiteVisible2 = id <= 1;

  return (
    <article className="project border rounded-lg shadow-lg bg-white p-6">
      <div className="flex flex-col items-center">
        <div className="mb-6 md:mb-0">
          <a href={liveSite} target="_blank" rel="noreferrer">
            <img src={thumbnail} alt={title[language]} className="w-full h-64 object-cover rounded-t-lg shadow-md" />
          </a>
        </div>
        <div className="">
          <h3 className="text-xl font-bold text-gray-900">0{id}</h3>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">{title[language]}</h2>
          <p className="mt-4 text-gray-600">{description[language]}</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-gray-700">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-gray-100 border border-gray-300 shadow-sm px-3 py-1 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="text-base">{techIcons[tech]}</span>
                {tech}
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {isLiveSiteVisible2 && (
              <li>
                <a
                  href={Link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-blue-500 text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium shadow-sm transition-all duration-200"
                >
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
                    <FaLink />
                  </span>
                  {language === "es" ? "Enlace" : "Link"} →
                </a>
              </li>
            )}
            {github && (
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-gray-600 text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium shadow-sm transition-all duration-200"
                >
                  <span className="bg-gray-200 text-black p-2 rounded-full">
                    <FaGithub />
                  </span>
                  GitHub →
                </a>
              </li>
            )}
            {isLiveSiteVisible1 && (
              <li>
                <a
                  href={liveSite}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-green-600 text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-medium shadow-sm transition-all duration-200"
                >
                  <span className="bg-green-100 text-green-600 p-2 rounded-full">
                    <FaGlobe />
                  </span>
                  {language === "es" ? "Sitio en vivo" : "Live Site"} →
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  const { language } = useLanguage();
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">{language === "es" ? "Proyectos" : "Projects"}</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {language === "es"
            ? "Una colección de proyectos innovadores en los que he trabajado, abarcando desde aplicaciones web hasta soluciones móviles, con un enfoque en la calidad, escalabilidad y experiencia del usuario."
            : "A collection of innovative projects I have worked on, ranging from web applications to mobile solutions, with a focus on quality, scalability, and user experience."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
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
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
