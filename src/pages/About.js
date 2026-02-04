import { useEffect, useMemo, useState } from "react";
import PixelBlast from "../components/PixelBlast";
import "../styles/About.css";

const FAVORITE_COLOR = { name: "Viridian", hex: "#40826D" };

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

// Hash simple et stable (pour générer une couleur identique sur une journée donnée)
function hashStringToInt(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// RNG déterministe à partir d’un seed
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

  // Couleur "propre" (pas trop sombre/flashy)
  const r = Math.floor(60 + rnd() * 160);
  const g = Math.floor(60 + rnd() * 160);
  const b = Math.floor(60 + rnd() * 160);
  return { key, hex: hexFromRgb(r, g, b) };
}

function computeAgeYears(birthdateStr, now = Date.now()) {
  const birth = new Date(birthdateStr).getTime();
  const diffMs = now - birth;
  const years = diffMs / (365.2425 * 24 * 60 * 60 * 1000); // année moyenne
  return years;
}

export default function About() {
  const [nowMs, setNowMs] = useState(Date.now());

useEffect(() => {
  const id = setInterval(() => setNowMs(Date.now()), 100);
  return () => clearInterval(id);
}, []);



  const age = useMemo(() => computeAgeYears(BIRTHDATE, nowMs), [nowMs]);
  const ageDisplay = useMemo(() => age.toFixed(9), [age]);

  const colorOfDay = useMemo(() => getColorOfDay(new Date(nowMs)), [nowMs]);

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
        </header>

        <section className="about-grid">
          <div className="card about-card">
            <div className="card-head">
              <h2>Couleur préférée</h2>
            </div>

            <div className="row">
              <div
                className="swatch"
                style={{ backgroundColor: FAVORITE_COLOR.hex }}
                title={FAVORITE_COLOR.hex}
              />
              <div className="row-text">
                <div className="value">{FAVORITE_COLOR.name}</div>
                <div className="muted">{FAVORITE_COLOR.hex}</div>
              </div>
            </div>
          </div>

          {/* Couleur du jour */}
          <div className="card about-card">
            <div className="card-head">
              <h2>Couleur du jour</h2>
              <span className="muted">{colorOfDay.key}</span>
            </div>

            <div className="row">
              <div
                className="swatch"
                style={{ backgroundColor: colorOfDay.hex }}
                title={colorOfDay.hex}
              />
              <div className="row-text">
                <div className="value">{colorOfDay.hex}</div>
              </div>
            </div>
          </div>

          {/* Âge */}
          <div className="card about-card about-card--wide">
            <div className="card-head"></div>

            <div className="age">
              <div className="age-number">{ageDisplay}</div>
              <div className="muted">années</div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
