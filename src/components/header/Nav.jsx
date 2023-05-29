
import { useState } from "react"
import { StyledNav } from "./Nav.styled"
import ContactModal from "../modals/ContactModal";
import AboutModal from "../modals/AboutModal";

export default function Nav({ showShadow, hideShadow }) {
  const [ contactOpen, setContactOpen ] = useState(false);
  const [ aboutOpen, setAboutOpen ] = useState(false);
  
  function handleOpen(modal) {
    if (modal === "contact") {
      setContactOpen(true)
      showShadow()
    } else {
      setAboutOpen(true)
      showShadow()
    }
  }

  function handleClose(modal) {
    if (modal === "contact") {
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
        <li><button onClick={() => handleOpen("contact")} className="nav-item">Contact</button></li>
        <li><button onClick={() => handleOpen("about")} className="nav-item">About</button></li>
      </ul>
        
      {
        contactOpen ? <ContactModal handleClose={handleClose} /> : null
      }
        
      {
        aboutOpen ? <AboutModal handleClose={handleClose} /> : null
      }
    </StyledNav>
  )
}
