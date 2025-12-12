import { useMemo, useState } from "react";
import PixelBlast from "../components/PixelBlast";
import RotatingText from '../components/RotatingText'
import ProjectCard from "../components/ProjectCard";
import "../styles/Work.css";
import portfolio from "../data/portfolio.json";

export default function Work() {
    const { projects, tags } = portfolio;

    const [search, setSearch] = useState("");
    const [activeTags, setActiveTags] = useState([]);

    const toggleTag = (tagId) => {
        setActiveTags((prev) =>
            prev.includes(tagId)
                ? prev.filter((t) => t !== tagId)
                : [...prev, tagId]
        );
    };

    const filteredProjects = useMemo(() => {
        return Object.entries(projects).filter(([_, project]) => {
            const matchesSearch = project.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesTags =
                activeTags.length === 0 ||
                activeTags.every((tag) => project.tags.includes(tag));

            return matchesSearch && matchesTags;
        });
    }, [search, activeTags, projects]);

    const rotatingTexts = useMemo(
        () => Object.values(projects).map(project => project.title),
        [projects]
    );


    return (
        <main className="work">
            <section className="hero-section">
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

                <div className="hero-content">
                    <p className="hero-heading">I do</p>
                    <RotatingText
                        texts={rotatingTexts}
                        mainClassName="hero-rotating-text"
                        splitLevelClassName="hero-rotating-text__split"
                        elementLevelClassName="hero-rotating-text__element"
                        staggerFrom="last"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-120%' }}
                        staggerDuration={0.025}
                        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                        rotationInterval={2500}
                    />
                </div>
            </section>
            <div className="work-filters">
                <input
                    type="text"
                    placeholder="Search project..."
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
                                style={{
                                    "--tag-color": tag.color
                                }}
                            >
                                {tag.label}
                            </button>

                        );
                    })}
                </div>
            </div>
            <section className="project-grid">
                {filteredProjects.map(([id, project]) => {
                    const projectTopics = project.tags.map((tagId) => ({
                        name: tags[tagId].label,
                        color: tags[tagId].color,
                    }));

                    return (
                        <ProjectCard
                            key={id}
                            title={project.title}
                            topics={projectTopics}
                        />
                    );
                })}
            </section>
        </main>
    );
}
