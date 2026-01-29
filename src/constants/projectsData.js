import foto1 from "../Assets/Pivvot_reducida.jpg";
import foto2 from "../Assets/flutter.png";
import foto3 from "../Assets/Flotu.png";
import foto4 from "../Assets/Ciudad-Conecta.png";
import foto5 from "../Assets/Willard-Portal.png";
import foto6 from "../Assets/Holafomo.png";
import foto7 from "../Assets/Quick-Grow.png";
import foto8 from "../Assets/AMB.png";

export const projectData = [
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
    techStack: ["PHP", "SQL", "JavaScript", "Tailwind"],
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
    techStack: ["React", "SQL", "AWS", "Tailwind", "Node Js"],
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
  },
];

export const getProjectsTexts = (language) => ({
  title: language === "es" ? "PROYECTOS" : "PROJECTS",
  description:
    language === "es"
      ? "Una colección de proyectos innovadores en los que he trabajado, abarcando desde aplicaciones web hasta soluciones móviles, con un enfoque en la calidad, escalabilidad y experiencia del usuario."
      : "A collection of innovative projects I have worked on, ranging from web applications to mobile solutions, with a focus on quality, scalability, and user experience.",
  liveLink: language === "es" ? "Sitio en vivo" : "Live Site",
  link: language === "es" ? "Enlace" : "Link",
});
