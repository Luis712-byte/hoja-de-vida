import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../Context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("luisacosta7417@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
    }
  };

  const t = {
    brandSub: language === "es" ? "DESARROLLADOR FULL-STACK" : "FULL-STACK DEVELOPER",
    contactTitle: language === "es" ? "Contacto" : "Contact",
    contactEmailCopied: language === "es" ? "Correo copiado" : "Email copied",
    contactCall: language === "es" ? "Llamar" : "Call",
    linksTitle: language === "es" ? "Enlaces" : "Links",
    who: language === "es" ? "¿Quién soy?" : "Who am I?",
    whoNote: language === "es" ? "Resumen" : "Summary",
    skills: language === "es" ? "Habilidades" : "Skills",
    skillsNote: language === "es" ? "Tech stack" : "Tech stack",
    projects: language === "es" ? "Proyectos" : "Projects",
    projectsNote: language === "es" ? "Selección" : "Selection",
    contacto: language === "es" ? "Contacto" : "Contact",
    contactoNote: language === "es" ? "Escríbeme" : "Write me",
    redesTitle: language === "es" ? "Redes" : "Social",
    available: language === "es" ? "Disponible para proyectos freelance y colaboraciones remotas." : "Available for freelance projects and remote collaborations.",
    viewResume: language === "es" ? "Ver CV" : "View CV",
    backTop: language === "es" ? "Arriba" : "Top",
    copyright: language === "es" ? `© ${year} Luis Enrique Acosta — Todos los derechos reservados` : `© ${year} Luis Enrique Acosta — All rights reserved`
  };

  return (
    <footer aria-label="Footer" role="contentinfo">
      <style>{`
        .site-footer {
          background: linear-gradient(180deg,#071428 0%, #0c2b4b 100%);
          color: rgba(255,255,255,0.94);
          padding: 56px 0 28px;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }
        .footer-container { max-width:1100px; margin: 0 auto; }
        .brand-strong { font-weight:800; font-size:18px; letter-spacing:0.6px; color:#fff; }
        .brand-muted { color:rgba(255,255,255,0.72); font-size:13px; margin-top:6px; }
        .col-title { color:#fff; font-weight:700; margin-bottom:10px; font-size:14px; }
        .link-list a { color: rgba(255,255,255,0.9); display:block; padding:6px 0; text-decoration:none; transition: color .12s ease, transform .12s ease; }
        .link-list a:hover { color:#a77bff; transform: translateX(4px); }
        .contact-row { display:flex; gap:12px; align-items:center; margin-top:8px; flex-wrap:wrap; }
        .contact-pill { display:inline-flex; gap:10px; align-items:center; padding:8px 12px; border-radius:12px; background: rgba(255,255,255,0.03); cursor:pointer; border:1px solid rgba(255,255,255,0.03); color:inherit; transition: transform .12s ease, background .12s ease; }
        .contact-pill:hover { transform: translateY(-4px); background: linear-gradient(90deg,#7ee8d5,#a77bff); color:#062035 !important; }
        .social-row { display:flex; gap:10px; margin-top:6px; }
        .social-btn { display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:10px; background: rgba(255,255,255,0.03); color:inherit; border:1px solid rgba(255,255,255,0.03); transition: transform .12s ease, background .12s ease; text-decoration:none; }
        .social-btn:hover { transform: translateY(-4px); background: linear-gradient(90deg,#7ee8d5,#a77bff); color:#062035 !important; }
        .bottom { margin-top:28px; border-top:1px solid rgba(255,255,255,0.04); padding-top:18px; display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; color:rgba(255,255,255,0.72); font-size:13px; }
        .cta-btn { padding:8px 12px; border-radius:999px; background: linear-gradient(90deg,#7ee8d5,#a77bff); color:#062035; border:0; cursor:pointer; font-weight:700; text-decoration:none; display:inline-flex; gap:8px; align-items:center; }
        .back-top { padding:8px 10px; border-radius:999px; background: rgba(255,255,255,0.03); border:0; color:inherit; cursor:pointer; display:inline-flex; gap:8px; align-items:center; }
        @media (max-width:767px) {
          .bottom { flex-direction:column; align-items:flex-start; }
          .contact-row { flex-direction:column; align-items:flex-start; gap:8px; }
        }
      `}</style>

      <div className="site-footer">
        <Container className="footer-container">
          <Row className="align-items-start">
            <Col md={5} sm={12}>
              <div className="brand-strong">Luis Enrique Acosta</div>
              <div className="brand-muted">{t.brandSub}</div>

              <div style={{ height: 14 }} />

              <div className="col-title">{t.contactTitle}</div>
              <div className="contact-row" role="group" aria-label={t.contactTitle}>
                <button
                  className="contact-pill"
                  onClick={copyEmail}
                  aria-label={language === "es" ? "Copiar correo" : "Copy email"}
                  title={language === "es" ? "Copiar correo" : "Copy email"}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span style={{ fontSize: 14 }}>{copied ? t.contactEmailCopied : "luisacosta7417@gmail.com"}</span>
                </button>

                <a className="contact-pill" href="tel:+573012618709" aria-label={t.contactCall} title={t.contactCall}>
                  <FontAwesomeIcon icon={faPhone} />
                  <span style={{ fontSize: 14 }}>+57 301 261 8709</span>
                </a>
              </div>

              <div style={{ height: 12 }} />
            </Col>

            <Col md={3} sm={6}>
              <div className="col-title">{t.linksTitle}</div>

              <nav aria-label={language === "es" ? "Enlaces rápidos del sitio" : "Quick site links"}>
                <ul style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gap: 8
                }}>
                  <li>
                    <a href="#quien-soy" role="menuitem" style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 12px",
                      borderRadius: 10,
                      textDecoration: "none",
                      color: "inherit",
                      background: "transparent",
                      transition: "background .14s ease, transform .08s ease, color .12s ease"
                    }}>
                      <span style={{ fontSize: 15 }}>{t.who}</span>
                      <small style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{t.whoNote}</small>
                    </a>
                  </li>

                  <li>
                    <a href="#skills" role="menuitem" style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 12px",
                      borderRadius: 10,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "background .14s ease, transform .08s ease, color .12s ease"
                    }}>
                      <span style={{ fontSize: 15 }}>{t.skills}</span>
                      <small style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{t.skillsNote}</small>
                    </a>
                  </li>

                  <li>
                    <a href="#projects-container" role="menuitem" style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 12px",
                      borderRadius: 10,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "background .14s ease, transform .08s ease, color .12s ease"
                    }}>
                      <span style={{ fontSize: 15 }}>{t.projects}</span>
                      <small style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{t.projectsNote}</small>
                    </a>
                  </li>

                  <li>
                    <a href="#contacto" role="menuitem" style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 12px",
                      borderRadius: 10,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "background .14s ease, transform .08s ease, color .12s ease"
                    }}>
                      <span style={{ fontSize: 15 }}>{t.contacto}</span>
                      <small style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{t.contactoNote}</small>
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>

            <Col md={4} sm={6}>
              <div className="col-title">{t.redesTitle}</div>
              <div className="social-row" role="navigation" aria-label={t.redesTitle}>
                <a className="social-btn" href="https://www.linkedin.com/in/luis-acosta-cassiani-1509b4124" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="social-btn" href="https://www.instagram.com/luis_acosta315/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="social-btn" href="https://github.com/Luis712-byte" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <div style={{ height: 8 }} />
              <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 13 }}>
                {t.available}
              </div>
            </Col>
          </Row>

          <div className="bottom" role="presentation">
            <div>{t.copyright}</div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>            
              <button className="back-top" onClick={scrollToTop} aria-label={t.backTop} title={t.backTop}>
                <FontAwesomeIcon icon={faArrowUp} />
                {t.backTop}
              </button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
