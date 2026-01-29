import React, { useContext } from "react";
import { useLanguage } from "../Context/LanguageContext";
import ProjectUI from "../components/ui/ProjectUI";
import { projectData, getProjectsTexts } from "../constants/projectsData";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const texts = getProjectsTexts(language);

  return (
    <ProjectUI
      projectData={projectData}
      language={language}
      title={texts.title}
      description={texts.description}
      liveLink={texts.liveLink}
      linkText={texts.link}
    />
  );
};

export default ProjectsSection;
