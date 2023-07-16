"use client";
import Image from "next/image";
import "./style.css";
import ImageAuthor from "./../images/img_karlen.png";
import Certificate from "./../images/Certificado_PF_DAW.jpg";
import CertificateSoc from "./../images/Certificado_creacion_publicacion_paginas_web.png";
import CertificateSocDescription from "./../images/Certificado_soc_intraducion_horas.png";
import { useTranslation } from "react-i18next";

export default function Formations() {
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
          <h1>Formaciones</h1>
        </div>
      </div>

      <div className="formations__container">
        <h2>
          {t("formationsContent.fpTitle")}
        </h2>
        <h5>
          {t("formationsContent.fpDate")}
        </h5>
        <Image
          src={Certificate}
          alt="Certificado de grado superior"
          width={400}
          height={300}
        />

        <h2>
          {t("formationsContent.musicologyTitle")}
        </h2>
        <h5>
          {t("formationsContent.musicologyDate")}
        </h5>

        <h2>
          {t("formationsContent.highSchoolTitle")}
        </h2>
        <h5>
          {t("formationsContent.highSchoolDate")}
        </h5>

        <Image
          src="/../img/Karlen.png"
          alt="Certificado de bachelerato homologada"
          width={500}
          height={500}
        />
        <h2>
          {t("formationsContent.complementaryTitle")}
        </h2>
        <h3>
          {t("formationsContent.cpTitle")}
        </h3>
        <h5>
          {t("formationsContent.cpDate")}
        </h5>
        <div>
          <Image
            src={CertificateSoc}
            alt="Certificado de bachelerato homologada"
            width={400}
            height={300}
          />
          <Image
            src={CertificateSocDescription}
            alt="Certificado de bachelerato homologada"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
