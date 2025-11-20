import { useNavigate } from "react-router-dom"
import '../styles/ProjectCard.css'

export default function ProjectCard({ title, description, picture, link, topics = [] }) {
    const navigate = useNavigate()
    const handleClick = () => navigate(link)
    return (
        <div className="PCcontainer" onClick={handleClick}>
            <div className="PCcontainer_picture">
                <img className="PCpicture" src={picture} alt="project" />
            </div>
            <div className='PCcontainer_text'>
                <h3 className="PCtitle">{title}</h3>
                <p className="PCdescription">{description}</p>
                <div className="PCtopics">
                    {topics.map(topic => (
                        <div className="PCtopic" key={topic} style={{ backgroundColor: topic.color }}>
                            {topic.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}