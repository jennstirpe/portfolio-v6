import CloseBtn from "../global/CloseBtn"
import { StyledAboutModal } from "./styled/AboutModal.styled"
import resume from "../../resume.pdf";

export default function AboutModal({ handleClose }) {

    function closeAbout() {
        handleClose("about")
      }

  return (
    <StyledAboutModal className="modal">
        <CloseBtn closeModal={closeAbout} modal="Close about modal" />
        <h3 className="modal-header">About me</h3>
        <div className="about-desc">
        
          <ul className="tech-list">
            <li class="tech-list-item">
                <span class="tooltip">React</span>
                <span>
                  <i class="fa-brands fa-react"></i>
                </span>
            </li>
            <li class="tech-list-item">
                <span class="tooltip">HTML</span>
                <span>
                  <i class="fa-brands fa-html5"></i>
                </span>
            </li>
            <li class="tech-list-item">
                <span class="tooltip">CSS / Sass</span>
                <span>
                <i class="fa-brands fa-css3-alt"></i>/<i class="fa-brands fa-sass"></i>
                </span>
            </li>
            <li class="tech-list-item">
                <span class="tooltip">JavaScript</span>
                <span>
                <i class="fa-brands fa-square-js"></i>
                </span>
            </li>
            <li class="tech-list-item">
                <span class="tooltip">Bootstrap</span>
                <span>
                <i class="fa-brands fa-bootstrap"></i>
                </span>
            </li>
          </ul>

          <ul className="about-socials">
            <li className="about-social">
              <a href="https://www.linkedin.com/in/jenniferstirpe/" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            </li>
            <li className="about-social">
              <a href="https://github.com/jennstirpe" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github-square"></i></a>
            </li>
          </ul>

          <a class="about-resume" href={resume} target="_blank">Resume</a>

        </div>

    </StyledAboutModal>
  )
}
