"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import i18n from "./locales/i18n";

import {
  faPython,
  faJs,
  faJava,
  faVuejs,
  faPhp,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faBootstrap,
  faWordpress,
  faGit,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function AboutPage({ currentLanguage }) {
  const { t } = useTranslation();

  console.log("currentLanguage:", currentLanguage);

  const pythonColors = ["#3776AB", "#FFD43B", "#4B8BBE", "#FF4500"];
  const jsColors = ["#F7DF1E", "#323330", "#F0DB4F"];
  const iconColors = {
    java: "#007396",
    vuejs: "#42b883",
    php: "#8892BF",
    nodejs: "#43853d",
    server: "#f3b23f",
    code: "#f1e05a",
    codeBranch: "#f44d27",
    html5: "#e34c26",
    css3: "#2965f1",
    react: "#61dafb",
    bootstrap: "#7952b3",
    palette: "#757575",
    flask: "#FFFF00",
    chartLine: "#eb4034",
    wordpress: "#21759b",
    objectGroup: "#f7df1e",
    git: "#F05032",
    github: "#181717"
  };

  return (
    <div className="about__continer">
      <h1>
        {t("welcomeTitle")}
      </h1>

      <h2>
        {t("technicalSkillsTitle")}
      </h2>
      <div className="about__continer-icons">
        <FontAwesomeIcon
          icon={faPython}
          style={{ color: pythonColors[0], width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faJs}
          style={{ color: jsColors[0], width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faReact}
          style={{ color: iconColors.react, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faVuejs}
          style={{ color: iconColors.vuejs, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          style={{ color: iconColors.nodejs, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ color: iconColors.html5, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          style={{ color: iconColors.css3, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          style={{ color: iconColors.bootstrap, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faJava}
          style={{ color: iconColors.java, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faPhp}
          style={{ color: iconColors.php, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faGit}
          style={{ color: iconColors.git, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: iconColors.github, width: "12%", height: "auto" }}
        />
        <FontAwesomeIcon
          icon={faWordpress}
          style={{ color: iconColors.wordpress, width: "12%", height: "auto" }}
        />
      </div>

      <p>
        {t("indexParagraph1")}
      </p>
      <p>
        {t("indexParagraph2")}
      </p>
      <p>
        {t("indexParagraph3")}
      </p>
      <p>
        {t("indexParagraph4")}
      </p>
      <p>
        {t("indexParagraph5")}
      </p>
      <p>
        {t("indexParagraph6")}
      </p>
    </div>
  );
}
