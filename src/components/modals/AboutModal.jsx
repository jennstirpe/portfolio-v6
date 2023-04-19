import CloseBtn from "../global/CloseBtn"
import { StyledAboutModal } from "./styled/AboutModal.styled"

export default function AboutModal({ handleClose }) {

    function closeAbout() {
        handleClose("about")
      }

  return (
    <StyledAboutModal className="modal">
        <CloseBtn closeModal={closeAbout} modal="Close about modal" />
        <h3 className="modal-header">About me</h3>
        <p className="about-desc">details</p>
    </StyledAboutModal>
  )
}
