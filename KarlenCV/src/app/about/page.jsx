"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import "./style.css";
import ImageAuthor from "./../images/img_karlen.png";
import i18n from "../locales/i18n";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="cv">
        <div className="profile">
          <Image
            src={ImageAuthor}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div className="cv-content">
          <h1>
            {t("aboutTitle")}
          </h1>
        </div>
      </div>
      <div className="cv__content-text">
        <p>
          {t("aboutContent.paragraph1")}
        </p>
        <p>
          {t("aboutContent.paragraph2")}
        </p>
        <p>
          {t("aboutContent.paragraph3")}
        </p>
        <p>
          {t("aboutContent.paragraph4")}
        </p>
        <p>
          {t("aboutContent.paragraph5")}
        </p>
        <p>
          {t("aboutContent.paragraph6")}
        </p>
      </div>
    </div>
  );
}
