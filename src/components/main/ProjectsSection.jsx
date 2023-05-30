import { StyledProjectSection } from "./ProjectsSection.styled"
import projects from '../../projects.json'
import Project from "./Project"

export default function ProjectsSection() {
  return (
    <StyledProjectSection>
      <h2 className="section-header">Projects</h2>
      <ul className="projects-list">
        {
          projects.map(project => {
            return  <li><Project key={project.id} project={project} /></li>
          })
        }
      </ul>
      
    </StyledProjectSection>
  )
}
