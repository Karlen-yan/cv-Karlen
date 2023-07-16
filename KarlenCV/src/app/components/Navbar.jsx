import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Navbar = ({ currentLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`cv__nav-content ${menuOpen ? "open" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger" />
        <div className="hamburger" />
        <div className="hamburger" />
      </div>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <Link href="/">
            {t("home")}
          </Link>
        </li>
        <li>
          <Link href="/about">
            {t("about")}
          </Link>
        </li>
        <li>
          <Link href="/experience">
            {t("experience")}
          </Link>
        </li>
        <li>
          <Link href="/languege">
            {t("language")}
          </Link>
        </li>
        <li>
          <Link href="/contact">
            {t("contact")}
          </Link>
        </li>
        <li>
          <Link href="/formations">
            {t("formations")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
