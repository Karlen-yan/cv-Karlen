"use client";
import { useTranslation } from "react-i18next";

const LanguageButton = ({ language, currentLanguage, onChangeLanguage }) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(language);
    onChangeLanguage(language);
  };

  return (
    <button
      onClick={handleLanguageChange}
      disabled={currentLanguage === language}
    >
      {t(`${language}`)}
    </button>
  );
};

export default LanguageButton;
