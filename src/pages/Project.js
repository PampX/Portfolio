import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import portfolio from "../data/portfolio.json";
import "../styles/ProjectPage.css";
import PixelBlast from "../components/PixelBlast";

const STATUS = {
    in_progress: { label: "En cours", tone: "info" },
    done: { label: "Terminé", tone: "success" },
    paused: { label: "En pause", tone: "warning" },
    stopped: { label: "Arrêté", tone: "danger" },
};

function formatDate(dateStr) {
    if (!dateStr) return null;
    // "2025-12" -> "Déc. 2025" (simple)
    const [y, m] = dateStr.split("-");
    const month = [
        "Jan.", "Fév.", "Mars", "Avr.", "Mai", "Juin",
        "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."
    ][Number(m) - 1];
    if (!month || !y) return dateStr;
    return `${month} ${y}`;
}

export default function ProjectPage() {
    const { id } = useParams();

    const project = portfolio.projects?.[id];
    const tags = portfolio.tags || {};

    const meta = STATUS[project?.status] || { label: "—", tone: "neutral" };
    const dateLabel = useMemo(() => formatDate(project?.date), [project?.date]);

    if (!project) {
        return (
            <div className="project-page">
                <div className="project-shell">
                    <p className="pp-muted">Projet introuvable.</p>
                    <Link to="/work" className="pp-link">← Retour Work</Link>
                </div>
            </div>
        );
    }

    const projectTags = (project.tags || []).map((tagId) => ({
        id: tagId,
        label: tags[tagId]?.label || tagId,
        color: tags[tagId]?.color || "rgba(255,255,255,0.18)",
    }));

    return (
        <div className="project-page">
            <section className="hero-section2">
                <PixelBlast
                    className="pixelblast-hero"
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
            </section>
            <div className="project-shell">
                {/* Header */}
                <header className="pp-header card">
                    <div className="pp-header__left">
                        <div className="pp-kicker">Project</div>
                        <h1 className="pp-title">{project.title}</h1>
                        {project.tagline && <p className="pp-tagline">{project.tagline}</p>}

                        <div className="pp-badges">
                            <span className={`pp-status pp-status--${meta.tone}`}>
                                {meta.label}
                            </span>
                            {dateLabel && <span className="pp-date">{dateLabel}</span>}
                        </div>

                        <div className="pp-tags">
                            {projectTags.map((t) => (
                                <span
                                    key={t.id}
                                    className="pp-chip"
                                    style={{ borderColor: t.color, color: t.color }}
                                >
                                    {t.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pp-header__right">
                        <div className="pp-actions">
                            {(project.links || []).map((l) => (
                                <a
                                    key={l.url}
                                    href={l.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="pp-button"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>

                        {/* petit résumé méta optionnel */}
                        <div className="pp-meta">
                            {project.role && (
                                <div className="pp-meta__row">
                                    <span className="pp-meta__label">Rôle</span>
                                    <span className="pp-meta__value">{project.role}</span>
                                </div>
                            )}
                            {project.stack && (
                                <div className="pp-meta__row">
                                    <span className="pp-meta__label">Stack</span>
                                    <span className="pp-meta__value">{project.stack}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Content grid */}
                <div className="pp-grid">
                    {/* Description */}
                    <section className="card pp-section">
                        <h2 className="pp-h2">Contexte & Description</h2>
                        <p className="pp-text">{project.description || "—"}</p>

                        {Array.isArray(project.sections) && project.sections.length > 0 && (
                            <div className="pp-sections">
                                {project.sections.map((s, idx) => (
                                    <div key={idx} className="pp-subsection">
                                        <h3 className="pp-h3">{s.title}</h3>
                                        <p className="pp-text">{s.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Gallery */}
                    <section className="card pp-section">
                        <div className="pp-section__head">
                            <h2 className="pp-h2">Galerie</h2>
                            <span className="pp-muted">
                                {(project.media || []).length} média(s)
                            </span>
                        </div>

                        <div className="pp-gallery">
                            {(project.media || []).map((m, idx) => (
                                <div key={idx} className="pp-media">
                                    {m.type === "image" ? (
                                        <img className="pp-img" src={m.src} alt={m.alt || ""} />
                                    ) : (
                                        <iframe
                                            className="pp-video"
                                            src={m.src}
                                            title={m.alt || `video-${idx}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    )}
                                    {(m.caption || m.alt) && (
                                        <div className="pp-caption">{m.caption || m.alt}</div>
                                    )}
                                </div>
                            ))}

                            {(!project.media || project.media.length === 0) && (
                                <div className="pp-empty">Aucun média pour ce projet.</div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
