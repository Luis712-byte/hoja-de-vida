import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import flagES from "../Assets/Flag-es.jpg";
import flagEN from "../Assets/Flag_of_the_United_States.svg";
import { useLanguage } from "../Context/LanguageContext";

const NavBar = () => {
  const { language, handleLanguageChange } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const progress = document.getElementById("progress-bar");
      if (progress) {
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const percent = height ? (window.scrollY / height) * 100 : 0;
        progress.style.width = `${Math.min(Math.max(percent, 0), 100)}%`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    handleLanguageChange(language === "es" ? "en" : "es");
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <style>{`
        .custom-navbar{
          background: linear-gradient(90deg,#0b2540 0%, #12355a 100%);
          padding:18px 0;
          transition: padding .18s ease, box-shadow .18s ease, background .25s ease;
          z-index:1030;
          backdrop-filter: blur(4px);
        }
        .custom-navbar.scrolled{ padding:10px 0; box-shadow: 0 8px 22px rgba(6,12,30,0.28); }
        .navbar-container-flex { display:flex; align-items:center; width:100%; gap:12px; }
        .navbar-left { display:flex; align-items:center; gap:12px; }
        .navbar-right { margin-left:auto; display:flex; align-items:center; gap:12px; }

        .brand-row{ display:flex; align-items:center; gap:14px; text-decoration:none; }
        .brand-logo{
          width:64px; height:64px; border-radius:10px;
          display:inline-flex; align-items:center; justify-content:center;
          font-weight:800; color:#062035; font-size:18px;
          background: linear-gradient(135deg,#7ee8d5 0%,#a77bff 100%);
          box-shadow: 0 10px 22px rgba(120,84,255,0.12);
          transition: transform .22s ease;
        }
        .custom-navbar.scrolled .brand-logo{ transform: scale(0.93); width:56px; height:56px; }

        .brand-text{ color:#fff; font-weight:700; letter-spacing:.6px; font-size:18px; }
        .brand-sub{ display:block; color:rgba(255,255,255,0.82); font-size:12px; margin-top:2px; font-weight:600; }

        .nav-link-container{ color:rgba(255,255,255,0.94) !important; padding:10px 14px; font-weight:600; position:relative; font-size:15px; }
        .nav-link-container::after{ content:""; position:absolute; left:14px; right:14px; height:3px; bottom:6px; background:transparent; transform:scaleX(0); transform-origin:left; transition:transform .18s ease, background .18s ease; }
        .nav-link-container:hover::after{ transform:scaleX(1); background:linear-gradient(90deg,#7ee8d5,#a77bff); }

        .progress-track{ position:absolute; left:0; bottom:0; width:100%; height:4px; background: rgba(255,255,255,0.06); }
        .progress-thumb{ height:100%; width:0; background: linear-gradient(90deg,#7ee8d5,#a77bff); transition: width 120ms linear; }

        /* Botón de idioma (agrandado) */
        .lang-button{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:8px 14px;
          border-radius:999px;
          border:0;
          background: rgba(255,255,255,0.08);
          color:#fff;
          cursor:pointer;
          transition: background .12s ease, transform .08s ease;
          font-weight:700;
          font-size:14px;
          box-shadow: 0 6px 14px rgba(4,10,30,0.12);
        }
        .lang-button:hover{ background: rgba(255,255,255,0.11); transform: translateY(-2px); }
        .lang-flag{ width:24px; height:16px; object-fit:cover; border-radius:3px; display:block; }
        .lang-label{ display:inline-block; opacity:0.98; letter-spacing:0.6px; }

        /* Desktop: asegurar botón totalmente a la derecha */
        .lang-outside { margin-left: 18px; }

        @media (max-width:991px){
          .brand-sub{ display:none; }
          .brand-text{ font-size:16px; }
          .brand-logo{ width:52px; height:52px; font-size:16px; }
          .lang-button{ padding:7px 10px; font-size:13px; }
        }
      `}</style>

      <Container className="navbar-container-flex">
        <div className="navbar-left">
          <Navbar.Brand className="brand-row" href="#home">
            <div className="brand-logo" aria-hidden>
              LE
            </div>
            <div>
              <span className="brand-text">LUIS ENRIQUE ACOSTA</span>
              <span className="brand-sub">FULL-STACK DEVELOPER</span>
            </div>
          </Navbar.Brand>

        </div>

        <div className="navbar-right d-none d-lg-flex">
          <div className="lang-outside">
            <button
              className="lang-button"
              onClick={toggleLanguage}
              aria-label={language === "es" ? "Cambiar a inglés" : "Cambiar a español"}
              title={language === "es" ? "Cambiar a Inglés" : "Cambiar a Español"}
            >
              <img
                src={language === "es" ? flagES : flagEN}
                alt={language === "es" ? "ES" : "EN"}
                className="lang-flag"
              />
              <span className="lang-label">{language === "es" ? "ES" : "EN"}</span>
            </button>
          </div>
        </div>
          {/* botón móvil fuera del collapse para mostrar siempre la opción de idioma */}
          <div className="d-lg-none" style={{ marginLeft: 8 }}>
            <button
              className="lang-button"
              onClick={toggleLanguage}
              aria-label={language === "es" ? "Cambiar a inglés" : "Cambiar a español"}
              title={language === "es" ? "Cambiar a Inglés" : "Cambiar a Español"}
            >
              <img
                src={language === "es" ? flagES : flagEN}
                alt={language === "es" ? "ES" : "EN"}
                className="lang-flag"
              />
              <span className="lang-label">{language === "es" ? "ES" : "EN"}</span>
            </button>
          </div>

        <div className="progress-track" aria-hidden>
          <div id="progress-bar" className="progress-thumb"></div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
