import { motion } from 'motion/react';
import '../styles/About.css';

const experiences = [
    {
        company: "Solem",
        role: "Ingénieur Fullstack · IA",
        period: "Nov 2025 — 2026",
        description: "Développement d'application web avec intégration IA.",
        current: true,
    },
    {
        company: "Coptis",
        role: "Développeur IA",
        period: "Mai 2025 — Août 2025",
        description: "Création d'un modèle de formulation cosmétique par IA.",
    },
    {
        company: "PharmaNature",
        role: "Lead Développeur Fullstack",
        period: "Avr 2023 — Fév 2025",
        description: "Encadrement d'une équipe de 5 personnes. Développement d'applications mobiles, sites web, logiciels en ligne et outils internes.",
        tags: ["Node.js", "Python", "React", "React Native"],
    },
    {
        company: "Factory456",
        role: "Développeur Robot Logiciel",
        period: "Sep 2022 — Mars 2023",
        description: "Automatisation des tâches pour les cabinets comptables.",
        tags: ["UIPath"],
    },
];

const skills = [
    { category: "Frontend", items: ["React", "React Native", "CSS / UI"] },
    { category: "Backend", items: ["Node.js", "Python", "SQL", "C#"] },
    { category: "IA & Data", items: ["Machine Learning", "Deep Learning", "Q-Learning / DQN"] },
    { category: "Outils", items: ["Blender 3D", "Unity", "UIPath"] },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function About() {
    return (
        <main className="about">
            {/* Hero */}
            <motion.section initial="hidden" animate="visible" variants={fadeUp}>
                <p className="about-kicker">— à propos</p>
                <h1 className="about-name">Timothée Baudequin</h1>
                <p className="about-title">Architecte logiciel · Développeur d'application</p>
                <p className="about-bio">
                    Basé à Castelnau-le-Lez · Freelance depuis déc. 2020 · Passionné par l'IA,
                    le développement fullstack et la 3D.
                </p>
                <div className="about-ctas">
                    <a href="mailto:timotheebaudequin@gmail.com" className="about-btn about-btn--primary">
                        Me contacter
                    </a>
                    <a
                        href="https://www.linkedin.com/in/timothee-baudequin/"
                        target="_blank"
                        rel="noreferrer"
                        className="about-btn about-btn--ghost"
                    >
                        LinkedIn
                    </a>
                </div>
            </motion.section>

            {/* Experiences */}
            <section className="about-section">
                <motion.p
                    className="about-section-title"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Expériences
                </motion.p>
                <div className="about-timeline">
                    {experiences.map((exp, i) => (
                        <motion.div
                            className="timeline-item"
                            key={exp.company}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                        >
                            <div className="timeline-dot" />
                            <div className="timeline-header">
                                <div className="timeline-header-left">
                                    <span className="timeline-company">{exp.company}</span>
                                    {exp.current && <span className="timeline-badge">Actuel</span>}
                                </div>
                                <span className="timeline-period">{exp.period}</span>
                            </div>
                            <p className="timeline-role">{exp.role}</p>
                            <p className="timeline-desc">{exp.description}</p>
                            {exp.tags && (
                                <div className="timeline-tags">
                                    {exp.tags.map(t => (
                                        <span key={t} className="timeline-tag">{t}</span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="about-section">
                <motion.p
                    className="about-section-title"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Compétences
                </motion.p>
                <div className="skills-grid">
                    {skills.map((group, i) => (
                        <motion.div
                            className="skills-card"
                            key={group.category}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                        >
                            <p className="skills-category">{group.category}</p>
                            <ul className="skills-list">
                                {group.items.map(item => (
                                    <li key={item} className="skills-item">{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education + Languages + Hobbies */}
            <section className="about-section about-bottom-grid">
                <motion.div
                    className="about-card"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p className="about-card-label">Formation</p>
                    <p className="about-card-title">Master Architecte logiciel</p>
                    <p className="about-card-sub">Développeur d'application · Spécialité IA & Big Data</p>
                    <p className="about-card-meta">Epitech Montpellier · 2021–2022</p>
                </motion.div>

                <motion.div
                    className="about-card"
                    custom={1}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p className="about-card-label">Langues</p>
                    <div className="lang-list">
                        <div className="lang-item">
                            <span className="lang-name">Français</span>
                            <span className="lang-level">Natif</span>
                        </div>
                        <div className="lang-item">
                            <span className="lang-name">Anglais</span>
                            <span className="lang-level">C1</span>
                        </div>
                        <div className="lang-item">
                            <span className="lang-name">Espagnol</span>
                            <span className="lang-level">B1</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-card"
                    custom={2}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p className="about-card-label">Loisirs</p>
                    <div className="hobbies-list">
                        {["Modélisation 3D", "Tennis & Workout", "Exploration scientifique", "Jeux-vidéo", "Passion automobile"].map(h => (
                            <span key={h} className="hobby-tag">{h}</span>
                        ))}
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
