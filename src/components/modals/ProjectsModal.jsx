import { StyledProjectsModal } from "./styled/ProjectsModal.styled";
import Project from "./Project";
import projects from "../../projects";
import CloseBtn from "../global/CloseBtn";

export default function ProjectsModal({ handleClose }) {

  function closeProjects() {
    handleClose("projects")
  }

  return (
    <StyledProjectsModal className="modal">
      <CloseBtn closeModal={closeProjects} modal="Close project modal" />
      <h3 className="modal-header">Projects</h3>
      <ul className="projects-list">
        {
          projects.map(project => {
            return <li key={project.id}><Project project={project} /></li>
          })
        }
      </ul>
      
    </StyledProjectsModal>
  )
}
