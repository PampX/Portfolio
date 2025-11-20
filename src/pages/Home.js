import PixelBlast from '../components/PixelBlast'
import ProjectCard from '../components/ProjectCard';
import RotatingText from '../components/RotatingText'
import '../styles/Home.css'

import pamplemousse from '../media/pamplemousse.jpg'
import wawedo from '../media/wawedo.png'
import pinkcc from '../media/pinkcc.png'


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

// images

const topics = [
    { name: "Tiktok", color: "#01ad62ff" },
    { name: "AutoEntrepreneur", color: "#e2ba1cff" }
]
const topics2 = [
    { name: "Unity", color: "#0185adff" },
    { name: "AutoEntrepreneur", color: "#e2ba1cff" }
]
const topics3 = [
    { name: "Python", color: "#ad015dff" },
    { name: "IA", color: "#27027bff" }
]

export default function Home() {
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
            <div className='homePC'>
                <ProjectCard title={"Wawedo"} picture={wawedo} description={"Création de projet communautaire"} topics={topics} />
                <ProjectCard title={"Unknown"} picture={pamplemousse} description={"?"} topics={topics2} />
                <ProjectCard title={"PinkCC"} picture={pinkcc} description={"Challenge Machine Learning cancer ovarien"} topics={topics3} />
                <ProjectCard title={"Wawedo"} picture={wawedo} description={"Création de projet communautaire"} topics={topics} />
                <ProjectCard title={"Unknown"} picture={pamplemousse} description={"?"} topics={topics2} />
                <ProjectCard title={"PinkCC"} picture={pinkcc} description={"Challenge Machine Learning cancer ovarien"} topics={topics3} />
            </div>
        </main>
    )
}
