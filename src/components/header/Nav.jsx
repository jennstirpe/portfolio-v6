
import { useState } from "react"
import { StyledNav } from "./Nav.styled"
import ProjectsModal from "../modals/ProjectsModal";
import ContactModal from "../modals/ContactModal";
import AboutModal from "../modals/AboutModal";

export default function Nav({ showShadow, hideShadow }) {
  const [ projectsOpen, setProjectsOpen ] = useState(false);
  const [ contactOpen, setContactOpen ] = useState(false);
  const [ aboutOpen, setAboutOpen ] = useState(false);
  
  function handleOpen(modal) {
    if (modal === "projects") {
      setProjectsOpen(true)
      showShadow()
    } else if (modal === "contact") {
      setContactOpen(true)
      showShadow()
    } else {
      setAboutOpen(true)
      showShadow()
    }
  }

  function handleClose(modal) {
    if (modal === "projects") {
      setProjectsOpen(false)
      hideShadow()
    } else if (modal === "contact") {
      setContactOpen(false)
      hideShadow()
    } else {
      setAboutOpen(false)
      hideShadow()
    }
  }


  return (
    <StyledNav>
      <ul className="nav-list">
        <li><button onClick={() => handleOpen("projects")} className="nav-item">Projects</button></li>
        <li><button onClick={() => handleOpen("contact")} className="nav-item">Contact</button></li>
        <li><button onClick={() => handleOpen("about")} className="nav-item">About</button></li>
      </ul>

      {
        projectsOpen ? <ProjectsModal handleClose={handleClose} />  : null
      }
        
      {
        contactOpen ? <ContactModal handleClose={handleClose} /> : null
      }
        
      {
        aboutOpen ? <AboutModal handleClose={handleClose} /> : null
      }
    </StyledNav>
  )
}
