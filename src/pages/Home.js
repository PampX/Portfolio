import PixelBlast from '../components/PixelBlast'
import ProjectCard from '../components/ProjectCard';
import RotatingText from '../components/RotatingText'
import '../styles/Home.css'
import portfolio from "../data/portfolio.json"

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
    const { projects, tags } = portfolio
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
                {Object.entries(projects).slice(0,3).map(([id, project]) => {
                    const projectTopics = project.tags.map(tagId => ({
                        name: tags[tagId].label,
                        color: tags[tagId].color
                    }));
                    return (
                        <ProjectCard
                            key={id}
                            title={project.title}
                            topics={projectTopics}
                            link={"/work/"+id}
                        />
                    );
                })}
            </div>
        </main>
    )
}
