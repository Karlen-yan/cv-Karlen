import React from "react";
import html2pdf from "html2pdf.js";

export default function DownloadButton({ targetId, fileName }) {
  const handleDownload = () => {
    const element = document.getElementById(targetId);
    html2pdf().from(element).save(fileName);
  };

  return (
    <button onClick={handleDownload}>
      Descargar en PDF
    </button>
  );
}
