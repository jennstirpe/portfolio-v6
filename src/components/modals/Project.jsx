import { useState } from "react"
import { StyledProject } from "./styled/Project.styled";
import CloseBtn from "../global/CloseBtn";
import { StyledShadow } from "../global/Shadow.styled";

export default function Project({ project }) {
    const [detailsOpen, setDetailsOpen] = useState(false);

    function closeModal() {
        setDetailsOpen(false)
    }

  return (
    <StyledProject onClick={ !detailsOpen ? () => setDetailsOpen(true) : null}>
        
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
            detailsOpen ? (
            <>
                <StyledShadow></StyledShadow>
                <div className="project-info-modal">
                    <CloseBtn closeModal={closeModal} modal="Close project details" />
                    <div>
                    <h4 className="project-name">{project.name}</h4> 
                        <p className="project-tech">
                        {
                            project.tech.map(tech => {
                                return `${tech} `
                            })
                        }
                        </p> 
                    </div>
                    
                    <p className="project-desc">{project.description}</p>

                    <div className="links">            
                        <a className="project-link link" href={project.link} target="_blank">View</a>
                        <a className="project-github link" href={project.github} target="_blank">Github</a>
                    </div>
                </div>
            </>
            ) : null
        }

        
    </StyledProject>
  )
}
