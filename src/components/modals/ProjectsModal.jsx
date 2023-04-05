import { StyledProjectsModal } from "./styled/ProjectsModal.styled";
import Project from "./Project";
import projects from "../../projects.json";
import CloseBtn from "../global/CloseBtn";

export default function ProjectsModal({ handleClose }) {

  function closeProjects() {
    handleClose("projects")
  }

  return (
    <StyledProjectsModal>
      <CloseBtn closeModal={closeProjects} />
      <h3 className="projects-header">Projects</h3>
      <ul className="projects-list">
        {
          projects.map(project => {
            return <li><Project project={project} /></li>
          })
        }
      </ul>
      
    </StyledProjectsModal>
  )
}
