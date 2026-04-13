import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'motion/react'
import PixelBlast from '../components/PixelBlast'
import RotatingText from '../components/RotatingText'
import '../styles/Home.css'

const rotatingTexts = [
    'IA',
    'Machine Learning',
    "Deep Learning",
    "Reinforcement Learning",
    'Développement',
    'Programmation',
    'Lead Developer',
    '3D',
    'Game Development',
    'Gaming',
    'Freelance',
    "<3",
    "<TB/>"
];


export default function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="home">
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

            <motion.section
                className="home-intro"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <p className="home-intro-tag">— Timothée Baudequin</p>
                <h2 className="home-intro-title">Architecte logiciel &amp; Développeur d'application</h2>
                <p className="home-intro-desc">
                    Fullstack · IA · 3D · Game Dev · Freelance depuis 2020
                </p>
                <div className="home-intro-ctas">
                    <button className="home-btn home-btn--primary" onClick={() => navigate('/work')}>
                        Voir mes projets
                    </button>
                    <button className="home-btn home-btn--ghost" onClick={() => navigate('/about')}>
                        À propos
                    </button>
                </div>
            </motion.section>
        </main>
    )
}
