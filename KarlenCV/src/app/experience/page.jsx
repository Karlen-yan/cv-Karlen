'use client'
import { useTranslation } from "react-i18next";
import Image from "next/image";
import ImageAuthor from "./../images/img_karlen.png";
import './style.css'
export default function Experience() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="cv">
        <div className="profile">
          <Image
            src={ImageAuthor}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <div className="cv-content">
          <h1>{t("experienceTitle")}</h1>
        </div>
      </div>
      <div className="cv__container-text">
        <h2>{t("experienceItem1.title")}</h2>
        <h5>{t("experienceItem1.date")}</h5>
        <p>{t("experienceItem1.description")}</p>

        <h2>{t("experienceItem2.title")}</h2>
        <h5>{t("experienceItem2.date")}</h5>
        <p>{t("experienceItem2.description")}</p>

        <h2>{t("experienceItem3.title")}</h2>
        <h5>{t("experienceItem3.date")}</h5>
        <p>{t("experienceItem3.description")}</p>
      </div>
    </div>
  );
}
