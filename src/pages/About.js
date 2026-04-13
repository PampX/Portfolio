import { useEffect, useMemo, useState } from "react";
import useLanguage from "../hooks/useLanguage";
import PixelBlast from "../components/PixelBlast";
import { translateData, translateHobbyLabel } from "../utils/translateData";
import "../styles/About.css";
import experiences from "../data/experiences.json";
import hobbies from "../data/hobbies.json";

const FAVORITE_COLOR = { name: "Couleur préférée", hex: "#40826D" };

const BIRTHDATE = "2000-05-10";


/** Helpers */
const pad2 = (n) => String(n).padStart(2, "0");

function hexFromRgb(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => Math.max(0, Math.min(255, x)).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function hashStringToInt(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getColorOfDay(dateObj = new Date()) {
  const key = `${dateObj.getFullYear()}-${pad2(dateObj.getMonth() + 1)}-${pad2(
    dateObj.getDate(),
  )}`;

  const seed = hashStringToInt(key);
  const rnd = mulberry32(seed);

  const r = Math.floor(60 + rnd() * 160);
  const g = Math.floor(60 + rnd() * 160);
  const b = Math.floor(60 + rnd() * 160);
  return { key, hex: hexFromRgb(r, g, b) };
}

function computeAgeYears(birthdateStr, now = Date.now()) {
  const birth = new Date(birthdateStr).getTime();
  const diffMs = now - birth;
  const years = diffMs / (365.2425 * 24 * 60 * 60 * 1000);
  return years;
}

function parseDate(str) {
  if (!str) return null;
  if (/^\d{4}-\d{4}$/.test(str)) {
    return { year: parseInt(str), month: 0, display: str.replace('-', '–'), sortKey: parseInt(str) * 100 };
  }
  const m = str.match(/^(\d{4})-(\d{2})$/);
  if (m) {
    const year = parseInt(m[1]);
    const month = parseInt(m[2]);
    const monthNames = ["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"];
    return { year, month, display: `${monthNames[month - 1]} ${year}`, sortKey: year * 100 + month };
  }
  return null;
}

const STATUS_CONFIG = {
  in_progress: { label: "En cours", color: "#B19EEF" },
  done: { label: "Terminé", color: "#67d672" },
  paused: { label: "En pause", color: "#e2ba1c" },
  stopped: { label: "Arrêté", color: "#e63e5d" },
};

export default function About() {
  const [nowMs, setNowMs] = useState(Date.now());
  const [activeExpTags, setActiveExpTags] = useState([]);
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNowMs(Date.now()), 100);
    return () => clearInterval(id);
  }, []);

  const age = useMemo(() => computeAgeYears(BIRTHDATE, nowMs), [nowMs]);
  const ageDisplay = useMemo(() => age.toFixed(9), [age]);


  const colorOfDay = useMemo(() => getColorOfDay(new Date(nowMs)), [nowMs]);

  const toggleExpTag = (tagId) => {
    setActiveExpTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  };

  const filteredExperiences = useMemo(() => {
    const exps = Object.entries(experiences.experiences);
    return exps.filter(([_, exp]) => {
      if (activeExpTags.length === 0) return true;
      return activeExpTags.every((t) => exp.tags.includes(t));
    }).sort(([, a], [, b]) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return (dateB?.sortKey ?? 0) - (dateA?.sortKey ?? 0);
    });
  }, [activeExpTags]);

  return (
    <main className="about">
      <PixelBlast
        className="pixelblast-bg"
        variant="square"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />

      <section className="about-shell">
        <header className="about-header card">
          <div>
            <div className="kicker">About</div>
            <h1 className="title">Timothée Baudequin</h1>
            <p className="subtitle">Developer • IA • Web • Game Dev • 3D</p>
          </div>
          <div className="about-header-age">
            <div className="age-display">
              <div className="age-number age-fixed">{ageDisplay}</div>
              <div className="age-label">{t('about.years')}</div>
            </div>
          </div>
        </header>

        <div className="colors-showcase">
          <div className="color-item">
            <div
              className="color-swatch"
              style={{ backgroundColor: FAVORITE_COLOR.hex }}
              title={FAVORITE_COLOR.hex}
            />
            <div className="color-info">
              <div className="color-name">{t('about.favorite_color')}</div>
              <div className="color-code">{FAVORITE_COLOR.hex}</div>
            </div>
          </div>
          <div className="color-item">
            <div
              className="color-swatch"
              style={{ backgroundColor: colorOfDay.hex }}
              title={colorOfDay.hex}
            />
            <div className="color-info">
              <div className="color-name">{t('about.color_of_day')}</div>
              <div className="color-code">{colorOfDay.hex}</div>
            </div>
          </div>
        </div>

        {/* SECTION 1: PASSIONS & LOISIRS */}
        <section className="about-section">
          <h2 className="section-title">{t('about.hobbies_title')}</h2>
          <div className="hobbies-grid">
            {Object.entries(hobbies.hobbies).map(([key, hobby]) => {
              const hobbyTitle = translateData(language, 'hobbies', key, 'title') || hobby.title;
              const hobbyDesc = translateData(language, 'hobbies', key, 'description') || hobby.description;
              return (
              <div key={key} className="hobby-card-stats">
                <div className="hobby-card-top">
                  <div className="hobby-icon-badge">{hobby.icon}</div>
                  <h3 className="hobby-card-title">{hobbyTitle}</h3>
                </div>

                <p className="hobby-card-desc">{hobbyDesc}</p>

                <div className="hobby-stats-section">
                  <div className="stat-item">
                    <div className="stat-label">{hobby.stats.label}</div>
                    <div className="stat-value" style={{ "--stat-color": hobby.stats.color }}>
                      <span className="stat-number">{hobby.stats.value}</span>
                      <span className="stat-unit">{hobby.stats.unit}</span>
                    </div>
                  </div>
                </div>

                {(hobby.sports || hobby.favorites || hobby.mainActivity || hobby.favoriteModels) && (
                  <div className="hobby-list">
                    {hobby.sports && hobby.sports.length > 0 && (
                      <div className="list-item">
                        <span className="list-label">{translateHobbyLabel(language, 'sports')}:</span>
                        <div className="list-items-inline">
                          {hobby.sports.map((sport, idx) => (
                            <span key={idx} className="list-badge">{sport}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {hobby.mainActivity && !hobby.sports && (
                      <div className="list-item">
                        <span className="list-label">{translateHobbyLabel(language, 'mainActivity')}:</span>
                        <span className="list-value">{hobby.mainActivity}</span>
                      </div>
                    )}
                    {hobby.favorites && hobby.favorites.length > 0 && (
                      <div className="list-item">
                        <span className="list-label">{translateHobbyLabel(language, 'favorites')}:</span>
                        <div className="list-items-inline">
                          {hobby.favorites.map((fav, idx) => (
                            <span key={idx} className="list-badge">{fav}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {hobby.favoriteModels && hobby.favoriteModels.length > 0 && (
                      <div className="list-item">
                        <span className="list-label">{translateHobbyLabel(language, 'favoriteModels')}:</span>
                        <div className="list-items-inline">
                          {hobby.favoriteModels.map((model, idx) => (
                            <span key={idx} className="list-badge">{model}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: EXPÉRIENCES PROFESSIONNELLES */}
        <section className="about-section">
          <h2 className="section-title">{t('about.experiences_title')}</h2>

          <div className="exp-filters">
            <div className="filter-label">{t('about.filter_by_tech')}</div>
            <div className="tag-filters">
              {Object.entries(experiences.tags).map(([id, tag]) => {
                const active = activeExpTags.includes(id);
                return (
                  <button
                    key={id}
                    onClick={() => toggleExpTag(id)}
                    className={`tag-filter ${active ? "active" : ""}`}
                    style={{ "--tag-color": tag.color }}
                  >
                    {tag.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="experiences-timeline">
            {filteredExperiences.map(([id, exp]) => {
              const status = STATUS_CONFIG[exp.status];
              const expTags = exp.tags.map((t) => experiences.tags[t]);
              return (
                <div key={id} className="exp-card card">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-title">{exp.title}</h3>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    {status && (
                      <span
                        className="exp-status"
                        style={{ "--s-color": status.color }}
                      >
                        {status.label}
                      </span>
                    )}
                  </div>

                  <div className="exp-meta">
                    <span className="exp-date">
                      {parseDate(exp.date)?.display}
                      {exp.endDate && ` - ${parseDate(exp.endDate)?.display}`}
                    </span>
                    {exp.location && <span className="exp-location">{exp.location}</span>}
                  </div>

                  <p className="exp-description">{exp.longDescription || exp.description}</p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="exp-highlights">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="highlight-item">• {highlight}</div>
                      ))}
                    </div>
                  )}

                  <div className="exp-tags">
                    {expTags.map((tag) => (
                      <span
                        key={tag.label}
                        className="exp-tag"
                        style={{ "--tag-color": tag.color }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: COMPÉTENCES TECHNIQUES */}
        <section className="about-section">
          <h2 className="section-title">{t('about.skills_title')}</h2>
          <div className="card skills-cloud-card">
            <div className="skills-cloud">
              {[
                { name: "React", level: 5 },
                { name: "Node.js", level: 5 },
                { name: "Python", level: 5 },
                { name: "React Native", level: 4 },
                { name: "IA/ML", level: 5 },
                { name: "SQL", level: 4 },
                { name: "TypeScript", level: 4 },
                { name: "Blender", level: 4 },
                { name: "Unity", level: 3 },
                { name: "C#", level: 3 },
                { name: "Angular", level: 3 },
                { name: "Three.js", level: 3 },
                { name: "PyTorch", level: 4 },
                { name: "Leadership", level: 4 },
                { name: "Architecture", level: 4 },
              ].map((skill) => {
                const sizeMap = { 5: "xl", 4: "lg", 3: "md", 2: "sm", 1: "xs" };
                const size = sizeMap[skill.level];
                const opacity = 0.6 + (skill.level / 5) * 0.4;
                return (
                  <span
                    key={skill.name}
                    className={`skill-cloud-tag skill-size-${size}`}
                    style={{ opacity }}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: FORMATION */}
        <section className="about-section">
          <h2 className="section-title">{t('about.education_title')}</h2>
          <div className="card education-card">
            <div className="edu-degree">{experiences.education["epitech-master"].degree}</div>
            <div className="edu-school">{experiences.education["epitech-master"].school}</div>
            <div className="edu-meta">
              <span className="edu-specialty">Spécialité: {experiences.education["epitech-master"].specialty}</span>
              <span className="edu-year">{experiences.education["epitech-master"].date}</span>
            </div>
          </div>
        </section>

      </section>
    </main>
  );
}
