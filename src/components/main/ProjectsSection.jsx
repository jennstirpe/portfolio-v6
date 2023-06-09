import { StyledProjectSection } from "./styled/ProjectsSection.styled"
import projects from '../../projects.json'
import Project from "./Project"

export default function ProjectsSection() {
  return (
    <StyledProjectSection>
      <h2 className="section-header">Featured Projects <span className="projects-length">({projects.length})</span></h2>
      <ul className="projects-list">
        {
          projects.map(project => {
            return  <li key={project.id}><Project project={project} /></li>
          })
        }
      </ul>
      
    </StyledProjectSection>
  )
}
