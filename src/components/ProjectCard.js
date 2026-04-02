import { useNavigate } from "react-router-dom"
import '../styles/ProjectCard.css'

export default function ProjectCard({ title, tagline, link, topics = [] }) {
    const navigate = useNavigate()
    const handleClick = () => navigate(link)
    return (
        <div className="PCcontainer" onClick={handleClick}>
            <h3 className="PCtitle">{title}</h3>
            {tagline && <p className="PCtagline">{tagline}</p>}
            <div className="PCtopics">
                {topics.map(topic => (
                    <div
                        className="PCtopic"
                        key={topic.name}
                        style={{ '--tag-color': topic.color }}
                    >
                        {topic.name}
                    </div>
                ))}
            </div>
        </div>
    )
}