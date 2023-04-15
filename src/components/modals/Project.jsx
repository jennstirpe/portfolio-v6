import { useState } from "react"
import { StyledProject } from "./styled/Project.styled";
import CloseBtn from "../global/CloseBtn";

export default function Project({ project }) {
    const [descOpen, setDescOpen] = useState(false);

  return (
    <StyledProject>
        
        <div className="project-preview" style={{"backgroundImage": `url(${project.img})`}}></div>
        
        <div className="project-header">
            <h4 className="project-name">{project.name}</h4> 
            <p className="project-tech">
                {
                    project.tech.map(tech => {
                        return `${tech} `
                    })
                }
            </p> 
        </div>

        {
            descOpen ? (<div className="project-info-modal">
                <CloseBtn closeModal={() => setDescOpen(false)} modal="Close info modal" />
                <p className="project-desc">{project.description}</p>
            </div>) : null
        }

        <div className="links">
            {
                !descOpen ? <button onClick={() => setDescOpen(true)} className="open-desc">More info</button> : null
            }
            
            <a className="project-link link" href={project.link} target="_blank">View</a>
            <a className="project-github link" href={project.github} target="_blank">Github</a>
        </div>
    </StyledProject>
  )
}
