import { StyledProject } from "./styled/Project.styled"

export default function Project({ project }) {
  return (
    <StyledProject key={project.id}>
        <div className="project-header">
            <h4 className="project-name">{project.name}</h4> 
            <span className="project-tech">
            {
                project.tech.map(tech => {
                    return `${tech} `
                })
            }
            </span>
        </div>
        <p  className="project-desc">{project.description}</p>

        <div className="links">
            <a className="project-link link" href={project.link} target="_blank">View</a>
            <a className="project-github link" href={project.github} target="_blank">Github</a>
        </div>
    </StyledProject>
  )
}
