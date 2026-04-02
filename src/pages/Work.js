import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Work.css";
import portfolio from "../data/portfolio.json";

const STATUS_CONFIG = {
    in_progress: { label: "En cours",  color: "#B19EEF" },
    done:        { label: "Terminé",   color: "#67d672" },
    paused:      { label: "En pause",  color: "#e2ba1c" },
    stopped:     { label: "Arrêté",    color: "#e63e5d" },
};

function parseDate(str) {
    if (!str) return null;
    // "2024-2025" range → treat as 2024-01
    if (/^\d{4}-\d{4}$/.test(str)) {
        return { year: parseInt(str), month: 0, display: str.replace('-', '–'), sortKey: parseInt(str) * 100 };
    }
    // "2025-09" normal
    const m = str.match(/^(\d{4})-(\d{2})$/);
    if (m) {
        const year = parseInt(m[1]);
        const month = parseInt(m[2]);
        const monthNames = ["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"];
        return { year, month, display: `${monthNames[month - 1]} ${year}`, sortKey: year * 100 + month };
    }
    return null;
}

export default function Work() {
    const { projects, tags } = portfolio;
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [activeTags, setActiveTags] = useState([]);

    const toggleTag = (tagId) => {
        setActiveTags((prev) =>
            prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
        );
    };

    const filteredProjects = useMemo(() => {
        return Object.entries(projects).filter(([_, p]) => {
            const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
            const matchesTags = activeTags.length === 0 || activeTags.every((t) => p.tags.includes(t));
            return matchesSearch && matchesTags;
        });
    }, [search, activeTags, projects]);

    // Group by date key, separate undated
    const { sortedGroups, undated } = useMemo(() => {
        const groups = {};
        const noDate = [];

        for (const [id, project] of filteredProjects) {
            if (!project.date) {
                noDate.push([id, project]);
            } else {
                if (!groups[project.date]) groups[project.date] = [];
                groups[project.date].push([id, project]);
            }
        }

        const sorted = Object.entries(groups).sort(([a], [b]) => {
            const da = parseDate(a);
            const db = parseDate(b);
            return (db?.sortKey ?? 0) - (da?.sortKey ?? 0);
        });

        return { sortedGroups: sorted, undated: noDate };
    }, [filteredProjects]);

    const totalCount = filteredProjects.length;

    return (
        <main className="work">
            <section className="work-page-header">
                <h1 className="work-page-title">Projets</h1>
                <span className="work-page-count">{totalCount} projet{totalCount !== 1 ? "s" : ""}</span>
            </section>

            <div className="work-filters">
                <input
                    type="text"
                    placeholder="Rechercher un projet..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="tag-filters">
                    {Object.entries(tags).map(([id, tag]) => {
                        const active = activeTags.includes(id);
                        return (
                            <button
                                key={id}
                                onClick={() => toggleTag(id)}
                                className={`tag-filter ${active ? "active" : ""}`}
                                style={{ "--tag-color": tag.color }}
                            >
                                {tag.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Git Timeline */}
            <div className="git-timeline">
                {sortedGroups.map(([dateKey, entries], groupIndex) => {
                    const parsed = parseDate(dateKey);
                    const isNewYear = groupIndex === 0 || parseDate(sortedGroups[groupIndex - 1][0])?.year !== parsed?.year;
                    const isLast = groupIndex === sortedGroups.length - 1 && undated.length === 0;

                    return (
                        <div key={dateKey}>
                            {isNewYear && parsed && (
                                <div className="tl-year-divider">
                                    <span className="tl-year-label">{parsed.year}</span>
                                </div>
                            )}
                            <div className="tl-row">
                                <div className="tl-date">
                                    {parsed && (
                                        <>
                                            <span className="tl-month">
                                                {parsed.month
                                                    ? ["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"][parsed.month - 1]
                                                    : parsed.display}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <div className="tl-spine">
                                    <div
                                        className="tl-dot"
                                        style={{ borderColor: STATUS_CONFIG[entries[0][1].status]?.color ?? "#B19EEF" }}
                                    />
                                    {!isLast && <div className="tl-line" />}
                                </div>
                                <div className="tl-cards">
                                    {entries.map(([id, project]) => {
                                        const status = STATUS_CONFIG[project.status];
                                        const projectTags = project.tags.map((t) => tags[t]);
                                        return (
                                            <div
                                                key={id}
                                                className="tl-card"
                                                onClick={() => navigate("/work/" + id)}
                                            >
                                                <div className="tl-card-header">
                                                    <span className="tl-card-title">{project.title}</span>
                                                    {status && (
                                                        <span
                                                            className="tl-card-status"
                                                            style={{ "--s-color": status.color }}
                                                        >
                                                            {status.label}
                                                        </span>
                                                    )}
                                                </div>
                                                {project.tagline && (
                                                    <p className="tl-card-tagline">{project.tagline}</p>
                                                )}
                                                <div className="tl-card-tags">
                                                    {projectTags.map((tag) => (
                                                        <span
                                                            key={tag.label}
                                                            className="tl-card-tag"
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
                            </div>
                        </div>
                    );
                })}

                {/* Undated projects */}
                {undated.length > 0 && (
                    <div className="tl-undated">
                        <span className="tl-undated-label">Autres projets</span>
                        <div className="tl-undated-chips">
                            {undated.map(([id, project]) => (
                                <button
                                    key={id}
                                    className="tl-chip"
                                    onClick={() => navigate("/work/" + id)}
                                >
                                    {project.title}
                                    {project.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="tl-chip-dot"
                                            style={{ background: tags[t]?.color }}
                                        />
                                    ))}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
