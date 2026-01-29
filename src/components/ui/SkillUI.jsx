import React from "react";
    
const SkillUI = ({ categories, language, title, description, ariaLabel }) => {
  return (
    <div className="skills" id="skills" aria-label={ariaLabel}>
      <section className="skills-header">
        <h2 className="skills-title">{title}</h2>
        <p className="skills-description">{description}</p>
      </section>

      <section className="skills-container" aria-live="polite">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="skill-item"
            style={{ display: "flex", flexDirection: "column", alignItems: "stretch", padding: 16 }}
            role="region"
            aria-label={cat.title}
          >
            <div style={{ marginBottom: 12 }}>  
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <h3 style={{ margin: 0, fontSize: 18, color: "white" }}>{cat.title}</h3>
                <small style={{ color: "rgba(255,255,255,0.65)" }}>{cat.note}</small>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
              {cat.skills.map((s) => (
                <article
                  key={s.name}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    padding: "8px 10px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.02)",
                  }}
                  role="listitem"
                  aria-label={s.name}
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${s.icon}`}
                    alt={`${s.name} icon`}
                    className="skill-icon"
                    style={{ width: 40, height: 40 }}
                    loading="lazy"
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <strong style={{ fontSize: 14, color: "white" }}>{s.name}</strong>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.72)" }}>
                      {language === "es" ? s.descEs : s.descEn}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SkillUI;
