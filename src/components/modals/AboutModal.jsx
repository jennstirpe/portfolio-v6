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
        <div className="about-body">
          <ul className="tech-list">
            <li className="tech-list-item">
                <span className="tooltip">React</span>
                <i className="fa-brands fa-react"></i>
            </li>
            <li className="tech-list-item">
                <span className="tooltip">JavaScript</span>
                <i className="fa-brands fa-square-js"></i>
            </li>
            <li className="tech-list-item">
                <span className="tooltip">HTML</span>
                <i className="fa-brands fa-html5"></i>
            </li>
            <li className="tech-list-item">
                <span className="tooltip">CSS</span>
                <i className="fa-brands fa-css3-alt"></i>
            </li>
            <li className="tech-list-item">
                <span className="tooltip">Sass</span>
                <i className="fa-brands fa-sass"></i>
            </li>
            <li className="tech-list-item">
                <span className="tooltip">Bootstrap</span>
                <i className="fa-brands fa-bootstrap"></i>
            </li>
          </ul>

          <section className="about-desc">
            <div className="about-desc-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>Rochester, NY</p>
            </div>
            <div className="about-desc-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <p>3 years Experience</p>
            </div>
            <div className="about-desc-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              <p>BS in Computer Science, <span>Southern New Hampshire University (2025)</span></p>
            </div>
          </section>

          <ul className="about-socials">
            <li className="about-social">
              <a href="https://www.linkedin.com/in/jenniferstirpe/" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            </li>
            <li className="about-social">
              <a className="about-resume" href={resume} target="_blank">resume</a>
            </li>
            <li className="about-social">
              <a href="https://github.com/jennstirpe" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github-square"></i></a>
            </li>
          </ul>
        </div>

    </StyledAboutModal>
  )
}
