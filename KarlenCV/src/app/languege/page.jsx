'use client'
import { useTranslation } from "react-i18next";
import Image from "next/image";
import ImageAuthor from "./../images/img_karlen.png";
import FlagArmenian from "./../images/Armenia.png";
import FlagSpanish from "./../images/España.png";
import FlagUSA from "./../images/USA.png";
import FlagRussian from "./../images/russian.png";
import './style.css';

export default function Languages() {
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
          <h1>{t("languege")}</h1>
        </div>
      </div>

      <div className="len__container">
        <div>
          <div>
          <Image className="icon__flags" src={FlagArmenian} />
          </div>
          <span>{t("languagesItem1.language")}: </span>
          {t("languagesItem1.level")}
        </div>
        <div>
          <div>
          <Image className="icon__flags" src={FlagSpanish} />
          </div>
          <span>{t("languagesItem2.language")}: </span>
          {t("languagesItem2.level")}
        </div>
        <div>
          <div>
          <Image className="icon__flags" src={FlagUSA} />
          </div>
          <span>{t("languagesItem3.language")}: </span>
          {t("languagesItem3.level")}
        </div>
        <div>
          <div>
          <Image className="icon__flags" src={FlagRussian} />
          </div>
          <span>{t("languagesItem4.language")}: </span>
          {t("languagesItem4.level")}
        </div>
      </div>
    </div>
  );
}
