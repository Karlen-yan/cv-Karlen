'use client';
import React from "react";
import { Inter } from "next/font/google";
import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTranslation, I18nextProvider } from 'react-i18next';
import { appWithTranslation } from 'next-i18next';
import i18n from './locales/i18n';
import LanguageButton from "./components/LanguageButton";
import "./globals.css";
import html2pdf from 'html2pdf.js';


const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  const { t, i18n } = useTranslation();

  const targetId = "pdfContent";
  const [pdfLoading, setPdfLoading] = useState(false);
  const pdfRef = useRef(null);

const handleDownload = async () => {
  setPdfLoading(true);
  const element = document.getElementById(targetId);

  const opt = {
    margin: 10,
    filename: 'mi_cv.pdf',
    image: { type: 'png', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  const canvas = await html2canvas(element, opt.html2canvas);

  const resizedCanvas = await resizeCanvas(canvas, 100, 100);

  const imgData = resizedCanvas.toDataURL("image/png");

  const doc = new jsPDF(opt.jsPDF);

  doc.addImage(imgData, "PNG", opt.margin, opt.margin);

  html2pdf().set(opt).from(element).save();

  setPdfLoading(false);
};

const resizeCanvas = (canvas, maxWidth, maxHeight) => {
  return new Promise((resolve) => {
    const { width, height } = canvas;
    let newWidth = width;
    let newHeight = height;

    if (width > maxWidth || height > maxHeight) {
      const aspectRatio = width / height;

      if (width > maxWidth) {
        newWidth = maxWidth;
        newHeight = newWidth / aspectRatio;
      }

      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = newHeight * aspectRatio;
      }
    }

    const resizedCanvas = document.createElement("canvas");
    resizedCanvas.width = newWidth;
    resizedCanvas.height = newHeight;

    const ctx = resizedCanvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0, newWidth, newHeight);

    resolve(resizedCanvas);
  });
};
  

  

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <html lang={i18n.language}>
        <body className={inter.className}>
            <Timer />
          <div className="container">
            <div className="content">
          <div className="language-buttons">
            <LanguageButton
              language="EN"
              currentLanguage={i18n.language}
              onChangeLanguage={handleChangeLanguage}
            />
            <LanguageButton
              language="ES"
              currentLanguage={i18n.language}
              onChangeLanguage={handleChangeLanguage}
            />
          </div>
              <div id={targetId} ref={pdfRef}>
                {children}
                <button onClick={handleDownload} disabled={pdfLoading}>
                  {pdfLoading ? t("generatingPDF") : t("downloadCV")}
                </button>
              </div>
            </div>
            <Navbar currentLanguage={i18n.language} />
          </div>
        </body>
      </html>
    </I18nextProvider>
  );
}

export default appWithTranslation(RootLayout);
