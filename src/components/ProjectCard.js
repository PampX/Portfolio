import { useNavigate } from "react-router-dom"


export default function ProjectCard({title, description, picture, link, topics = []}){
    const navigate = useNavigate()
    const handleClick = () => navigate(link)
    return (
        <div onClick={handleClick}>

            <img src={picture} alt="project"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                {topics.map(topic => (
                    <div key={topic} style={{backgroundColor: topic.color}}>
                        {topic.name}
                    </div>
                ))}
            </div>

        </div>
    )
}