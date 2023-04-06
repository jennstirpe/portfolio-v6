import CloseBtn from "../global/CloseBtn"
import { StyledAboutModal } from "./styled/AboutModal.styled"

export default function AboutModal({ handleClose }) {

    function closeAbout() {
        handleClose("about")
      }

  return (
    <StyledAboutModal>
        <CloseBtn closeModal={closeAbout} modal="Close about modal" />
        <h3 className="about-header">About me</h3>
        <p className="about-desc">details</p>
    </StyledAboutModal>
  )
}
