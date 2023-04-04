import { StyledProjectsModal } from "./styled/ProjectsModal.styled"

export default function ProjectsModal({ handleClose }) {

  function closeProjects() {
    handleClose("projects")
  }

  return (
    <StyledProjectsModal>
      <button onClick={closeProjects}>&#10005;</button>
      <h3>Projects</h3>
      <div>projects list</div>
    </StyledProjectsModal>
  )
}
