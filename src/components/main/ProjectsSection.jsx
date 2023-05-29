import { StyledProjectSection } from "./ProjectsSection.styled"
import projects from '../../projects.json'
import Project from "./Project"

export default function ProjectsSection() {
  return (
    <StyledProjectSection>
      {
        projects.map(project => {
          return  <Project key={project.id} project={project} />
        })
      }
    </StyledProjectSection>
  )
}
