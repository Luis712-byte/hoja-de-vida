import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import SkillUI from "../components/ui/SkillUI";
import { getSkillsCategories, getSkillsTexts } from "../constants/skillsData";

const Skill = () => {
  const { language } = useContext(LanguageContext);
  
  const categories = getSkillsCategories(language);
  const texts = getSkillsTexts(language);

  return (
    <SkillUI
      categories={categories}
      language={language}
      title={texts.title}
      description={texts.description}
      ariaLabel={texts.ariaLabel}
    />
  );
};

export default Skill;